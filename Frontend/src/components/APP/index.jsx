import React, { useState } from "react";
import Header from "../Dashboard/DashboardHeader/index";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Dashboard/DashboardFooter/index";
import Aside from "../Dashboard/DashboardAside/index";
import { Button, Modal } from "antd";
import { toast } from "react-toastify";
import Spinner from "../../commonComponent/Spinner";
import { requestMoneyApi } from "../../services/transactionService";
import FullScreenLoader from "../../commonComponent/FullScreenLoader";
import ConfirmationModal from "../../commonComponent/ConfirmationModal";

function index() {
  const navigate = useNavigate();
  const toastId = React.useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [visible, setVisible] = useState(false);
  const [amount, setAmount] = useState("");
  const [billets200, setBillets200] = useState("");
  const [billets100, setBillets100] = useState("");
  const [billets50, setBillets50] = useState("");
  const [pieces10, setPieces10] = useState("");
  const [pieces5, setPieces5] = useState("");
  const [pieces1, setPieces1] = useState("");
  const [isGab, setIsGab] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter amount");
      }
      return;
    }
    if (!isAmountValid()) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(
          "Amount should be equal to billtes and pieces"
        );
      }
      return;
    }
    showModal();
  };
  const onCancel = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  const calculateTotal = () => {
    const total =
      (parseInt(billets200) > 0 ? parseInt(billets200) * 200 : 0) +
      (parseInt(billets100) > 0 ? parseInt(billets100) * 100 : 0) +
      (parseInt(billets50) > 0 ? parseInt(billets50) * 50 : 0) +
      (parseInt(pieces10) > 0 ? parseInt(pieces10) * 10 : 0) +
      (parseInt(pieces5) > 0 ? parseInt(pieces5) * 5 : 0) +
      (parseInt(pieces1) > 0 ? parseInt(pieces1) * 1 : 0);

    return total;
  };

  const isAmountValid = () => {
    const total = calculateTotal();
    const parsedAmount = parseInt(amount); // Parse amount as integer

    return !isNaN(parsedAmount) && total === parsedAmount; // Check if amount is a valid integer and equals total
  };
  const onToggleGab = (value) => {
    setIsGab(value);
    if (value == true) {
      setPieces1("");
      setPieces10("");
      setPieces5("");
    }
  };
  const showModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  const requestmoney = () => {
    closeModal();
    setIsLoading(true);
    const param = {
      amount: amount === "" ? 0 : parseInt(amount),
      billets_200: billets200 === "" ? 0 : parseInt(billets200),
      billets_100: billets100 === "" ? 0 : parseInt(billets100),
      billets_50: billets50 === "" ? 0 : parseInt(billets50),
      pieces_10: pieces10 === "" ? 0 : parseInt(pieces10),
      pieces_5: pieces5 === "" ? 0 : parseInt(pieces5),
      pieces_1: pieces1 === "" ? 0 : parseInt(pieces1),
    };

    requestMoneyApi(param)
      .then((resp) => {
        setIsLoading(false);
        if (resp?.data?.status == 200) {
          toastId.current = toast.success(resp?.data?.message);
          navigate("/dashboard");
        } else {
          toastId.current = toast.error(resp?.data?.message);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        toastId.current = toast.error(error);
      });
  };
  return (
    <>
      <div id="main-wrapper">
        <Header />

        <ConfirmationModal
          title="Confirm"
          visible={visible}
          onOk={requestmoney}
          onCancel={closeModal}
          okText="Yes"
          cancelText="No"
        >
          <p>Are you sure you want to confirm?</p>
        </ConfirmationModal>

        <div id="content" className="py-4">
          <div className="container">
            <div className="row">
              <Aside />
              <div className="col-lg-9">
                <div className="bg-white shadow-sm rounded p-4 mb-4">
                  {/* <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                    Personal Details
                    <a
                      href="#edit-personal-details"
                      data-bs-toggle="modal"
                      className="ms-auto text-2 text-uppercase btn-link"
                    >
                      <span className="me-1">
                        <i className="fas fa-edit"></i>
                      </span>
                      Edit
                    </a>
                  </h3> */}
                  <hr className="mx-n4 mb-4"></hr>
                  <div className="col-lg-11 mx-auto">
                    <div className="row widget-steps">
                      <div className="col-4 step active">
                        <div className="step-name">Details</div>
                        <div className="progress">
                          <div className="progress-bar"></div>
                        </div>
                        <a href="#" className="step-dot"></a>{" "}
                      </div>
                      <div className="col-4 step disabled">
                        <div className="step-name">Confirm</div>
                        <div className="progress">
                          <div className="progress-bar"></div>
                        </div>
                        <a href="#" className="step-dot"></a>{" "}
                      </div>
                      <div className="col-4 step disabled">
                        <div className="step-name">Success</div>
                        <div className="progress">
                          <div className="progress-bar"></div>
                        </div>
                        <a href="#" className="step-dot"></a>{" "}
                      </div>
                    </div>
                    <div className="row">
                      <form id="form-send-money" method="post">
                        <div className="row mb-3 mt-4">
                          <div className="col-3">
                            <label htmlFor="amount" className="form-label">
                              Amount:
                            </label>
                          </div>
                          <div className="col-9 h-1">
                            <input
                              inputMode="numeric"
                              value={amount}
                              onChange={(e) => setAmount(e?.target?.value)}
                              //   type="number"
                              className="form-control"
                              id="amount"
                              required
                              placeholder="Enter Amount"
                              style={{ height: "40px" }}
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-3">
                            <label htmlFor="toggleGAB" className="form-label">
                              GAB:
                            </label>
                          </div>
                          <div className="col">
                            <div className="form-check form-switch">
                              <input
                                checked={isGab}
                                onChange={(e) => onToggleGab(e?.target.checked)}
                                className="form-check-input"
                                type="checkbox"
                                id="toggleGAB"
                                style={{ height: "22px", width: "40px" }}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="toggleGAB"
                              ></label>
                            </div>
                          </div>
                        </div>
                        <hr></hr>
                        <div className="row mb-3">
                          <div className="col-6">
                            <h6 className="form-header-style">Billets</h6>
                            <table className="table">
                              <tbody>
                                <tr>
                                  <div className="row mb-3">
                                    <div className="col-2">
                                      <label
                                        htmlFor="toggleGAB"
                                        className="form-label"
                                      >
                                        200:
                                      </label>
                                    </div>
                                    <div className="col-10">
                                      <input
                                        value={billets200}
                                        inputMode="numeric"
                                        onChange={(e) =>
                                          setBillets200(e.target.value)
                                        }
                                        className="form-control"
                                        placeholder="0"
                                      />
                                    </div>
                                  </div>
                                </tr>
                                <tr>
                                  <div className="row mb-3">
                                    <div className="col-2">
                                      <label
                                        htmlFor="toggleGAB"
                                        className="form-label"
                                      >
                                        100:
                                      </label>
                                    </div>
                                    <div className="col-10">
                                      <input
                                        value={billets100}
                                        inputMode="numeric"
                                        onChange={(e) =>
                                          setBillets100(e.target.value)
                                        }
                                        className="form-control"
                                        placeholder="0"
                                      />
                                    </div>
                                  </div>
                                </tr>
                                <tr>
                                  <div className="row mb-3">
                                    <div className="col-2">
                                      <label
                                        htmlFor="toggleGAB"
                                        className="form-label"
                                      >
                                        50:
                                      </label>
                                    </div>
                                    <div className="col-10">
                                      <input
                                        inputMode="numeric"
                                        value={billets50}
                                        onChange={(e) =>
                                          setBillets50(e.target.value)
                                        }
                                        className="form-control"
                                        placeholder="0"
                                      />
                                    </div>
                                  </div>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <div className="col table-wrapper" id="table2">
                            <h6 className="form-header-style">Pieces</h6>
                            <table className="table">
                              <tbody>
                                <tr>
                                  <td>
                                    <div className="row mb-3">
                                      <div className="col-2">
                                        <label
                                          htmlFor="toggleGAB"
                                          className="form-label"
                                        >
                                          10:
                                        </label>
                                      </div>
                                      <div className="col-10">
                                        <input
                                          inputMode="numeric"
                                          disabled={isGab}
                                          value={pieces10}
                                          onChange={(e) =>
                                            setPieces10(e.target.value)
                                          }
                                          className="form-control"
                                          placeholder="0"
                                        />
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <div className="row mb-3">
                                    <div className="col-2">
                                      <label
                                        htmlFor="toggleGAB"
                                        className="form-label"
                                      >
                                        5:
                                      </label>
                                    </div>
                                    <div className="col-10">
                                      <input
                                        disabled={isGab}
                                        inputMode="numeric"
                                        value={pieces5}
                                        onChange={(e) =>
                                          setPieces5(e.target.value)
                                        }
                                        className="form-control"
                                        placeholder="0"
                                      />
                                    </div>
                                  </div>
                                </tr>
                                <tr>
                                  <div className="row mb-3">
                                    <div className="col-2">
                                      <label
                                        htmlFor="toggleGAB"
                                        className="form-label"
                                      >
                                        1:
                                      </label>
                                    </div>
                                    <div className="col-10">
                                      <input
                                        disabled={isGab}
                                        inputMode="numeric"
                                        value={pieces1}
                                        onChange={(e) =>
                                          setPieces1(e.target.value)
                                        }
                                        className="form-control"
                                        placeholder="0"
                                      />
                                    </div>
                                  </div>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <hr></hr>

                          <div className="col-12 table-wrapper" id="table2">
                            <table className="table">
                              <tbody>
                                <div className="row mb-3">
                                  <div className="col-6">
                                    <tr>
                                      <td>
                                        <div className="row mb-3">
                                          <div className="col-4">
                                            <label
                                              htmlFor="toggleGAB"
                                              className="form-label"
                                            >
                                              Total Billets:
                                            </label>
                                          </div>
                                          <div className="col-8">
                                            <input
                                              disabled
                                              value={
                                                (parseInt(billets100) || 0) +
                                                (parseInt(billets200) || 0) +
                                                (parseInt(billets50) || 0)
                                              }
                                              className="form-control"
                                              placeholder=""
                                            />
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  </div>
                                  <div className="col-6">
                                    <tr>
                                      <div className="row mb-3">
                                        <div className="col-4">
                                          <label
                                            htmlFor="toggleGAB"
                                            className="form-label"
                                          >
                                            Total Pieces:
                                          </label>
                                        </div>
                                        <div className="col-8">
                                          <input
                                            disabled
                                            value={
                                              (parseInt(pieces1) || 0) +
                                              (parseInt(pieces10) || 0) +
                                              (parseInt(pieces5) || 0)
                                            }
                                            className="form-control"
                                            placeholder="0"
                                          />
                                        </div>
                                      </div>
                                    </tr>
                                  </div>
                                </div>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-6">
                            <div className="d-grid">
                              <button
                                onClick={(e) => onCancel(e)}
                                className="btn btn-primary"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="d-grid">
                              <button
                                onClick={(e) => handleSubmit(e)}
                                className="btn btn-primary"
                              >
                                Next
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isLoading && <FullScreenLoader />}

        <Footer />
      </div>
    </>
  );
}

export default index;
