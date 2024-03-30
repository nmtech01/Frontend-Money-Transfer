import React, { useEffect, useState } from "react";
import Header from "../Dashboard/DashboardHeader/index";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Dashboard/DashboardFooter/index";
import Aside from "../Dashboard/DashboardAside/index";
import { Button, DatePicker, Modal, Space } from "antd";
import { toast } from "react-toastify";
import { withdrawMoneyApi } from "../../services/transactionService";
import ConfirmationModal from "../../commonComponent/ConfirmationModal";
import moment from "moment";
import { digits } from "../../utilities/validators";
import FullScreenLoader from "../../commonComponent/FullScreenLoader";

function index() {
  const navigate = useNavigate();
  const toastId = React.useRef(null);
  const [visible, setVisible] = useState(false);
  const [userData, setuserData] = useState(null);
  const [amount, setAmount] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );
  useEffect(() => {

    const authdata = localStorage.getItem('user_data')
    if (authdata) {
        const user = JSON.parse(authdata)
     
        setuserData(user)
    }
}, [])
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (date, dateString) => {
    setSelectedDate(moment(date).format("YYYY-MM-DD"));
    console.log("dattetfetfe", date);
  };
  const showModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };
  const onCancel = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Please enter amount");
      }
      return;
    }
    if (isNaN(amount)) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Amount must be a valid number");
      }
      return;
    }
    if (amount >userData?.total_requested) {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.error("Amount should not be greater then available balance");
        }
        return;
      }
    showModal();
  };

  const withdrawMoney = () => {
    closeModal();
    setIsLoading(true);
    const param = {
      amount: amount === "" ? 0 : parseInt(amount),
      date: selectedDate,
    };
    withdrawMoneyApi(param)
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
          onOk={withdrawMoney}
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
                <nav
                  style={{
                    "--bs-breadcrumb-divider":
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E\")",
                  }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/dashboard">Home</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Ag
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      COLL
                    </li>
                  </ol>
                </nav>
                <div className="bg-white shadow-sm rounded p-4 mb-4">
                  <h3 className="text-5 fw-400 d-flex align-items-center mb-4">
                    Collect Money
                  </h3>
                  <hr className="mx-n4 mb-4"></hr>
                  <div className="col-lg-11 mx-auto">
                    <div className="row">
                      <form id="form-send-money" method="post">
                        <div className="row mb-3 mt-4">
                          <div className="col-3">
                            <label htmlFor="amount" className="form-label">
                              Balance:
                            </label>
                          </div>
                          <div className="col-9 h-1">
                            <input
                              type="text"
                              value={userData?.total_requested}
                              className="form-control"
                              id="amount"
                              required
                              placeholder="Enter Balance"
                              disabled
                            />
                          </div>
                        </div>
                        <div className="row mb-3 mt-4">
                          <div className="col-3">
                            <label htmlFor="amount" className="form-label">
                              Amount:
                            </label>
                          </div>
                          <div className="col-9 h-1">
                            <input
                              value={amount}
                              inputMode="numeric"
                              onChange={(e) => {
                                const input = e.target.value;
                                const regex =digits;
                                if (regex.test(input) || input === "") {
                                  setAmount(input);
                                }
                              }}
                              className="form-control"
                              id="amount"
                              placeholder="Enter Amount"
                            />
                          </div>
                        </div>
                        <div className="row mb-3 mt-4">
                          <div className="col-3">
                            <label htmlFor="amount" className="form-label">
                              Date:
                            </label>
                          </div>
                          <div className="col-9 h-1">
                            <div className="position-relative">
                              <Space direction="vertical">
                                <DatePicker
                                  defaultValue={moment()}
                                  format="YYYY-MM-DD"
                                  className="form-control"
                                  onChange={onChange}
                                />
                              </Space>
                            </div>
                          </div>
                        </div>
                        <div
                          className="row mb-3"
                          style={{ marginTop: "100px" }}
                        >
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
        {isLoading&&<FullScreenLoader/>}

        <Footer />
      </div>
    </>
  );
}

export default index;
