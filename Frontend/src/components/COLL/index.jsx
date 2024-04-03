import React, { useEffect, useState } from "react";
import Header from "../Dashboard/DashboardHeader/index";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Dashboard/DashboardFooter/index";
import Aside from "../Dashboard/DashboardAside/index";
import { Button, DatePicker, Modal, Space } from "antd";
import { toast } from "react-toastify";
import { updateTransactionApi, withdrawMoneyApi } from "../../services/transactionService";
import ConfirmationModal from "../../commonComponent/ConfirmationModal";
import moment from "moment";
import { digits } from "../../utilities/validators";
import FullScreenLoader from "../../commonComponent/FullScreenLoader";

function index() {
  const data=localStorage.getItem('update_data')
  const UPDATE_DATA=  data ?JSON.parse(data):null;
  console.log("Dd",UPDATE_DATA)
  const navigate = useNavigate();
  const toastId = React.useRef(null);
  const [visible, setVisible] = useState(false);
  const [userData, setuserData] = useState(null);
  const [amount, setAmount] = useState(UPDATE_DATA?.amount??"");
  const [selectedDate, setSelectedDate] = useState(
    moment().format("YYYY-MM-DD")
  );

  console.log("selectedDateselectedDateselectedDate", selectedDate)
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
    if (amount > userData?.total_requested) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Amount should not be greater then available balance");
      }
      return;
    }
    showModal();
  };

  const withdrawMoney = () => {
    const authData = localStorage.getItem(
      'user_data',
    )
    const AUTH_DATA = authData ? JSON.parse(authData) : null
    var TOKEN = AUTH_DATA ? 'Token ' + AUTH_DATA?.token : null
    closeModal();
    setIsLoading(true);
    const param = {
      amount: amount === "" ? 0 : parseInt(amount),
      date: selectedDate,
    };
    withdrawMoneyApi(param, TOKEN)
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

  const updateMoney = () => {
    const authData = localStorage.getItem(
      'user_data',
    )
    const AUTH_DATA = authData ? JSON.parse(authData) : null
    var TOKEN = AUTH_DATA ? 'Token ' + AUTH_DATA?.token : null
    closeModal();
    setIsLoading(true);
    const param = {
      amount: amount === "" ? 0 : parseInt(amount),
      date: selectedDate,
      id:UPDATE_DATA?.id
    };
    updateTransactionApi(param, TOKEN)
      .then((resp) => {  
        setIsLoading(false);
        if (resp?.data?.status === 200) {
          try {
            localStorage.removeItem('update_data');
            console.log('Item removed successfully');
        } catch (error) {
            console.error('Error removing item:', error);
        }
          toastId.current = toast.success(resp?.data?.message);
          setTimeout(() => {
            navigate("/dashboard");
          }, 400);
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
          onOk={()=>UPDATE_DATA!==null?updateMoney(): withdrawMoney()}
          onCancel={closeModal}
          okText="Yes"
          cancelText="No"
        >
          <p>Are you sure you want to confirm?</p>
        </ConfirmationModal>

        <div id="content" className="py-4">
          <div className="container">
            <div className="row">
              <aside className="col-lg-3">


                <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                  <h4 className="text-4 mb-3">AG - COLL </h4>
                  <hr></hr>
                  <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          SAISI COLL
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{marginLeft:"-150px"}}>SAI COL</div>
                        <div className="accordion-body" style={{marginLeft:"-155px"}}>SAI LIV</div>
                        <div className="accordion-body" style={{marginLeft:"-95px"}}>PLACE HOLDER</div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          PLACEHOLDER
                        </button>
                      </h2>
                    </div>
                  </div>
                </div>



              </aside>
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
                <div className="bg-white shadow-sm rounded mb-4">
                  <h3 className="form-header-css text-5 fw-400 d-flex align-items-center mb-4">
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
                              value={'1000'}
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
                                const regex = digits;
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
                                  // defaultValue={moment()}
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
                               {UPDATE_DATA!==null?'Update':'Next'} 
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
