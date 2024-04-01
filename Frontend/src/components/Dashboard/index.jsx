import React, { useEffect, useState } from "react";
import Header from "../Dashboard/DashboardHeader/index";
import Footer from "../Dashboard/DashboardFooter/index";
import { Link, useNavigate } from "react-router-dom";
import Aside from "../Dashboard/DashboardAside/index";
import { getUserProfileApi } from "../../services/authService";
import {
  getTransactionDetailAPI,
  getTransactionListAPI,
} from "../../services/transactionService";
import { toast } from "react-toastify";
import moment from "moment";
import NotFound from "../../commonComponent/NotFound";
import Spinner from "../../commonComponent/Spinner";
import FullScreenLoader from "../../commonComponent/FullScreenLoader";
import { Modal } from "antd";
import {
  calculateBillets,
  calculatePieces,
} from "../../utilities/globalMethods";
function index() {
  const navigate = useNavigate();
  const toastId = React.useRef(null);
  const [count, setCount] = useState(0);
  const [transactionList, setTransactionList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [tDetailLoading, setTDetailLoading] = useState(false);
  const [transactionDetail, setTransactionDetail] = useState({});
  const [userData, setUserData] = useState({});

  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const authData= localStorage.getItem(
      'user_data',
    )
    const AUTH_DATA=authData?JSON.parse(authData):null
    var TOKEN= AUTH_DATA ?'Token '+AUTH_DATA?.token:null
    setIsLoading(true);

    getUserProfileApi(TOKEN)
    .then((resp) => {
      setIsLoading(false);
      if (resp?.data?.status == 200) {
        setUserData(resp?.data?.data);
      } else {
        toastId.current = toast.error(resp?.data?.message);
      }
    })
    .catch((error) => {
      setIsLoading(false);
      toastId.current = toast.error(error);
    });
    getTransactionListAPI(TOKEN)
      .then((resp) => {
        setIsLoading(false);
        if (resp?.data?.status == 200) {
          setTransactionList(resp?.data?.data);
        } else {
          toastId.current = toast.error(resp?.data?.message);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        toastId.current = toast.error(error);
      });
  }, []);
  const getTransactionDetail = (id) => {
    setTDetailLoading(true);
    const param = {
      id: id,
    };
    getTransactionDetailAPI(param)
      .then((resp) => {
        console.log("response", JSON.stringify(resp));
        setTDetailLoading(false);
        if (resp?.data?.status == 200) {
          setTransactionDetail(resp?.data?.data);
          setIsModalOpen(true);
        } else {
          toastId.current = toast.error(resp?.data?.message);
          setIsModalOpen(false);
        }
      })
      .catch((error) => {
        setTDetailLoading(false);
        toastId.current = toast.error(error);
        setIsModalOpen(false);
      });
  };
  const showTModal = (id) => {
    getTransactionDetail(id);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div id="main-wrapper">
        <Header />
        <div id="content" className="py-4">
          <div className="container">
            <div className="row">
              <Aside 
              tottalAmount={userData?.total_requested}
              />
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
                      Dashboard
                    </li>
                  </ol>
                </nav>

                <div className="row">
                  <div className="col mb-2">
                    <form id="filterTransactions" method="post">
                      <div className="row g-3 mb-3">
                        <div className="col-sm-6 col-md-5"></div>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <div
                    className="onlineOrder"
                    style={{
                      cursor: "pointer",
                      background: "linear-gradient(to right, #000428, #004e92)",
                      marginRight: "20px",
                    }}
                  >
                    <h4 className="loginMain">Money Requested</h4>
                    <button className="OrderBtn">$6300</button>
                  </div>
                  <div
                    className="onlineOrder"
                    style={{
                      cursor: "pointer",
                      background: "linear-gradient(to right, #000428, #004e92)",
                    }}
                  >
                    <h4 className="loginMain">Money Collected</h4>
                    <button className="OrderBtn">$300</button>
                  </div>
                </div>
                <div className="bg-white custom-shadow-border rounded mb-4">
                  <div className="bg-white text-primary custom-header">
                    <h3 className="text-primary">All Transactions</h3>
                  </div>

                  <div className="transaction-title py-2 px-4 custom-solid-border">
                    <div className="row">
                      <div className="col-2 col-sm-1 text-center">
                        <span className="custom-text-primary">Date</span>
                      </div>
                      <div className="col col-sm-6">
                        <span className="custom-text-primary">Description</span>
                      </div>
                      <div className="col-auto col-sm-2 text-center">
                        <span className="custom-text-primary">Status</span>
                      </div>
                      <div className="col-3 col-sm-3 text-end">
                        <span className="custom-text-primary">Amount</span>
                      </div>
                    </div>
                  </div>

                  {isLoading ? (
                    <FullScreenLoader />
                  ) : (
                    <>
                      {transactionList.length > 0 ? (
                        transactionList.map((transaction) => {
                          const { id, created_at, type_id, amount } =
                            transaction;
                          return (
                            <div key={id} className="bg-white  transaction-list">
                              <div
                              style={{pointerEvents:'none'}}
                                className="transaction-item px-4 py-3"
                                data-bs-target="#transaction-detail"
                                // onClick={() => showTModal(id)}
                              >
                                <div className="row align-items-center flex-row">
                                  <div className="col-2 col-sm-1 text-center">
                                    <span className="d-block text-4 fw-300 text-primary">
                                      {moment(created_at).format("DD")}
                                    </span>
                                    <span className="d-block text-1 fw-300 text-uppercase text-secondary">
                                      {moment(created_at).format("MMMM")}
                                    </span>
                                  </div>
                                  <div className="col col-sm-6">
                                    <span className="d-block text-4">
                                      HDFC Bank
                                    </span>
                                    <span className="text-muted text-info">
                                      Withdraw to Bank account
                                    </span>
                                  </div>
                                  <div className="col-auto col-sm-2 text-center text-3">
                                    {type_id === 0 ? (
                                      <span className="text-nowrap text-primary">
                                        <i className="fas fa-hourglass-start"></i>{" "}
                                        Requested
                                      </span>
                                    ) : (
                                      <span className="text-nowrap text-success">
                                        <i className="fas fa-check-circle"></i>{" "}
                                        Collected
                                      </span>
                                    )}
                                  </div>

                                  <div className="col-3 col-sm-3 text-end text-4">
                                    <span className="text-nowrap text-primary">
                                      ${amount}
                                    </span>
                                    <span className="text-2 text-uppercase text-warning">
                                      (USD)
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })
                      ) : (
                        <NotFound />
                      )}
                    </>
                  )}

                  {tDetailLoading ? (
                    <FullScreenLoader />
                  ) : (
                    <Modal
                      footer={false}
                      className="modal fade"
                      role="dialog"
                      aria-hidden="true"
                      open={isModalOpen}
                      onOk={handleOk}
                      onCancel={handleCancel}
                      id="transaction-detail"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered transaction-details"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-body">
                            <div className="row g-0">
                              <div className="col-sm-5 d-flex justify-content-center bg-primary rounded-start py-4">
                                <div className="my-auto text-center">
                                  <div className="text-17 text-white my-3">
                                    <i className="fas fa-building"></i>
                                  </div>
                                  <div className="text-8 fw-500 text-white my-4">
                                    ${transactionDetail?.amount ?? 0}
                                  </div>
                                  <p className="text-white">
                                    {moment(
                                      transactionDetail?.created_at
                                    ).format("DD MMMM YYYY")}
                                  </p>
                                </div>
                              </div>
                              <div className="col-sm-7">
                                <h5 className="text-5 fw-400 m-3">
                                  Transaction Details
                                </h5>
                                <div className="px-3">
                                  <ul className="list-unstyled">
                                    <div className="col-sm-12">
                                      <div className="row mb-3 align-items-center">
                                        <div className="col-auto">
                                          <label
                                            htmlFor="toggleGAB"
                                            className="form-label mb-0"
                                          >
                                            GAB:
                                          </label>
                                        </div>
                                        <div className="col">
                                          <div className="form-check form-switch d-flex align-items-center justify-content-center">
                                            <input
                                              checked={transactionDetail?.gab==1?true:false }
                                              onChange={(e)=>setCount(0)}
                                              className="form-check-input"
                                              type="checkbox"
                                              id="toggleGAB"
                                              style={{
                                                height: "22px",
                                                width: "40px",
                                              }}
                                              disabled
                                            />
                                            <label
                                              className="form-check-label mb-0"
                                              htmlFor="toggleGAB"
                                            ></label>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="d-flex flex-wrap">
                                        <div className="col-6 mb-2">
                                          <ul className="list-unstyled">
                                            <li className="fw-500">Billets:</li>
                                            <li className="text-muted">
                                              200:{" "}
                                              {transactionDetail?.billets_200}
                                            </li>
                                            <li className="text-muted">
                                              100:{" "}
                                              {transactionDetail?.billets_100}
                                            </li>
                                            <li className="text-muted">
                                              50:{" "}
                                              {transactionDetail?.billets_50}
                                            </li>
                                            <li className="text-muted">
                                              Total:{" "}
                                              {calculateBillets(
                                                transactionDetail?.billets_200,
                                                transactionDetail?.billets_100,
                                                transactionDetail?.billets_50
                                              )}
                                            </li>
                                          </ul>
                                        </div>
                                        <div className="col-6 mb-2">
                                          <ul className="list-unstyled">
                                            <li className="fw-500">Pieces:</li>
                                            <li className="text-muted">
                                              10: {transactionDetail?.pieces_10}
                                            </li>
                                            <li className="text-muted">
                                              5: {transactionDetail?.pieces_5}
                                            </li>
                                            <li className="text-muted">
                                              1: {transactionDetail?.pieces_1}
                                            </li>
                                            <li className="text-muted">
                                              Total:{" "}
                                              {calculatePieces(
                                                transactionDetail?.pieces_10,
                                                transactionDetail?.pieces_5,
                                                transactionDetail?.pieces_1
                                              )}
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </div>
                                  </ul>
                                  <hr className="mb-2" />
                                  <p className="d-flex align-items-center fw-500 mb-0">
                                    Total Amount{" "}
                                    <span className="text-3 ms-auto">
                                      ${transactionDetail?.amount ?? 0}
                                    </span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Modal>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default index;
