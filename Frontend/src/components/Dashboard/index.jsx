import { useState, } from 'react'
import Header from "../Dashboard/DashboardHeader/index";
import { Link } from 'react-router-dom';


function index() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main-wrapper">
        <Header />
        <div id="content" className="py-4">
          <div className="container">
            <div className="row">

              <aside className="col-lg-3">

                <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                  <div className="profile-thumb mt-3 mb-4"> <img className="rounded-circle" src="/src/assets/images/profile-thumb.jpg" alt="" />
                    <div className="profile-thumb-edit bg-primary text-white" data-bs-toggle="tooltip" title="Change Profile Picture"> <i className="fas fa-camera position-absolute"></i>
                      <input type="file" className="custom-file-input" id="customFile" />
                    </div>
                  </div>
                  <p className="text-3 fw-500 mb-2">Hello, Smith Rhodes</p>
                  <p className="mb-2"><a href="settings-profile.html" className="text-5 text-light" data-bs-toggle="tooltip" title="Edit Profile"><i className="fas fa-edit"></i></a></p>
                </div>

                <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                  <div className="text-17 text-light my-3"><i className="fas fa-wallet"></i></div>
                  <h3 className="text-9 fw-400">$2956.00</h3>
                  <p className="mb-2 text-muted opacity-8">Available Balance</p>
                  <hr className="mx-n3"></hr>
                  <div className="d-flex"><a href="withdraw-money.html" className="btn-link me-auto">Withdraw</a> <a href="deposit-money.html" className="btn-link ms-auto">Deposit</a></div>
                </div>

                <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                  <div className="text-17 text-light my-3"><i className="fas fa-comments"></i></div>
                  <h3 className="text-5 fw-400 my-4">Need Help?</h3>
                  <p className="text-muted opacity-8 mb-4">Have questions or concerns regrading your account?<br></br>
                    Our experts are here to help!.</p>
                  <div className="d-grid"><a href="#" className="btn btn-primary">Chate with Us</a></div>
                </div>


              </aside>
              <div className="col-lg-9">
                <h2 className="fw-400 mb-3">Transactions</h2>

                <div className="row">
                  <div className="col mb-2">
                    <form id="filterTransactions" method="post">
                      <div className="row g-3 mb-3">
                        <div className="col-sm-6 col-md-5">
                          <div className="position-relative">
                            <input id="dateRange" type="text" className="form-control" placeholder="Date Range" />
                            <span className="icon-inside"><i className="fas fa-calendar-alt"></i></span>
                          </div>
                        </div>
                        <div className="col-auto d-flex align-items-center me-auto form-group" data-bs-toggle="collapse"> <a className="btn-link" data-bs-toggle="collapse" href="#allFilters" aria-expanded="false" aria-controls="allFilters">All Filters<i className="fas fa-sliders-h text-3 ms-1"></i></a> </div>

                        <div className="col-auto d-flex align-items-center ms-auto">
                          <div className="dropdown"> <a className="text-muted btn-link" href="#" role="button" id="statements" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-file-download text-3 me-1"></i>Statements</a>
                            <div className="dropdown-menu dropdown-menu-end" aria-labelledby="statements"> <a className="dropdown-item" href="#">CSV</a> <a className="dropdown-item" href="#">PDF</a> </div>
                          </div>
                        </div>

                        <div className="col-12 collapse" id="allFilters">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="allTransactions" name="allFilters" />
                            <label className="form-check-label" htmlFor="allTransactions">All Transactions</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="paymentsSend" name="allFilters" />
                            <label className="form-check-label" htmlFor="paymentsSend">Payments Send</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="paymentsReceived" name="allFilters" />
                            <label className="form-check-label" htmlFor="paymentsReceived">Payments Received</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="refunds" name="allFilters" />
                            <label className="form-check-label" htmlFor="refunds">Refunds</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="withdrawal" name="allFilters" />
                            <label className="form-check-label" htmlFor="withdrawal">Withdrawal</label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" id="deposit" name="allFilters" />
                            <label className="form-check-label" htmlFor="deposit">Deposit</label>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="bg-white shadow-sm rounded py-4 mb-4">
                  <h3 className="text-5 fw-400 d-flex align-items-center px-4 mb-4">All Transactions</h3>

                  <div className="transaction-title py-2 px-4">
                    <div className="row">
                      <div className="col-2 col-sm-1 text-center"><span className="">Date</span></div>
                      <div className="col col-sm-7">Description</div>
                      <div className="col-auto col-sm-2 d-none d-sm-block text-center">Status</div>
                      <div className="col-3 col-sm-2 text-end">Amount</div>
                    </div>
                  </div>
                  <div className="transaction-list">
                    <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                      <div className="row align-items-center flex-row">
                        <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">16</span> <span className="d-block text-1 fw-300 text-uppercase">APR</span> </div>
                        <div className="col col-sm-7"> <span className="d-block text-4">HDFC Bank</span> <span className="text-muted">Withdraw to Bank account</span> </div>
                        <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-warning" data-bs-toggle="tooltip" title="In Progress"><i className="fas fa-ellipsis-h"></i></span> </div>
                        <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">- $562</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                      </div>
                    </div>
                    <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                      <div className="row align-items-center flex-row">
                        <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">15</span> <span className="d-block text-1 fw-300 text-uppercase">APR</span> </div>
                        <div className="col col-sm-7"> <span className="d-block text-4">Envato Pty Ltd</span> <span className="text-muted">Payment Received</span> </div>
                        <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-bs-toggle="tooltip" title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                        <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">+ $562</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                      </div>
                    </div>
                    <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                      <div className="row align-items-center flex-row">
                        <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">04</span> <span className="d-block text-1 fw-300 text-uppercase">APR</span> </div>
                        <div className="col col-sm-7"> <span className="d-block text-4">HDFC Bank</span> <span className="text-muted">Withdraw to Bank account</span> </div>
                        <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-bs-toggle="tooltip" title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                        <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">- $106</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                      </div>
                    </div>
                    <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                      <div className="row align-items-center flex-row">
                        <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">28</span> <span className="d-block text-1 fw-300 text-uppercase">MAR</span> </div>
                        <div className="col col-sm-7"> <span className="d-block text-4">Patrick Cary</span> <span className="text-muted">Refund</span> </div>
                        <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-bs-toggle="tooltip" title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                        <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">+ $60</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                      </div>
                    </div>
                    <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                      <div className="row align-items-center flex-row">
                        <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">28</span> <span className="d-block text-1 fw-300 text-uppercase">MAR</span> </div>
                        <div className="col col-sm-7"> <span className="d-block text-4">Patrick Cary</span> <span className="text-muted">Payment Sent</span> </div>
                        <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-danger" data-bs-toggle="tooltip" title="Cancelled"><i className="fas fa-times-circle"></i></span> </div>
                        <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">- $60</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                      </div>
                    </div>
                    <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                      <div className="row align-items-center flex-row">
                        <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">16</span> <span className="d-block text-1 fw-300 text-uppercase">FEB</span> </div>
                        <div className="col col-sm-7"> <span className="d-block text-4">HDFC Bank</span> <span className="text-muted">Withdraw to Bank account</span> </div>
                        <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-bs-toggle="tooltip" title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                        <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">- $1498</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                      </div>
                    </div>
                    <div className="transaction-item px-4 py-3" data-bs-toggle="modal" data-bs-target="#transaction-detail">
                      <div className="row align-items-center flex-row">
                        <div className="col-2 col-sm-1 text-center"> <span className="d-block text-4 fw-300">15</span> <span className="d-block text-1 fw-300 text-uppercase">FEB</span> </div>
                        <div className="col col-sm-7"> <span className="d-block text-4">Envato Pty Ltd</span> <span className="text-muted">Payment Received</span> </div>
                        <div className="col-auto col-sm-2 d-none d-sm-block text-center text-3"> <span className="text-success" data-bs-toggle="tooltip" title="Completed"><i className="fas fa-check-circle"></i></span> </div>
                        <div className="col-3 col-sm-2 text-end text-4"> <span className="text-nowrap">+ $1498</span> <span className="text-2 text-uppercase">(USD)</span> </div>
                      </div>
                    </div>
                  </div>
                  <div id="transaction-detail" className="modal fade" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered transaction-details" role="document">
                      <div className="modal-content">
                        <div className="modal-body">
                          <div className="row g-0">
                            <div className="col-sm-5 d-flex justify-content-center bg-primary rounded-start py-4">
                              <div className="my-auto text-center">
                                <div className="text-17 text-white my-3"><i className="fas fa-building"></i></div>
                                <h3 className="text-4 text-white fw-400 my-3">Envato Pty Ltd</h3>
                                <div className="text-8 fw-500 text-white my-4">$557.20</div>
                                <p className="text-white">15 March 2021</p>
                              </div>
                            </div>
                            <div className="col-sm-7">
                              <h5 className="text-5 fw-400 m-3">Transaction Details
                                <button type="button" className="btn-close text-2 float-end" data-bs-dismiss="modal" aria-label="Close"></button>
                              </h5>
                              <hr></hr>
                              <div className="px-3">
                                <ul className="list-unstyled">
                                  <li className="mb-2">Payment Amount <span className="float-end text-3">$562.00</span></li>
                                  <li className="mb-2">Fee <span className="float-end text-3">-$4.80</span></li>
                                </ul>
                                <hr className="mb-2"></hr>
                                <p className="d-flex align-items-center fw-500 mb-0">Total Amount <span className="text-3 ms-auto">$557.20</span></p>
                                <div className="mb-4 mt-2">
                                  <ul className="list-unstyled">
                                    <li className="fw-500">Paid By:</li>
                                    <li className="text-muted">Envato Pty Ltd</li>
                                  </ul>
                                  <ul className="list-unstyled">
                                    <li className="fw-500">Transaction ID:</li>
                                    <li className="text-muted">26566689645685976589</li>
                                  </ul>
                                  <ul className="list-unstyled">
                                    <li className="fw-500">Description:</li>
                                    <li className="text-muted">Envato March 2021 Member Payment</li>
                                  </ul>
                                  <ul className="list-unstyled">
                                    <li className="fw-500">Status:</li>
                                    <li className="text-muted">Completed<span className="text-success text-3 ms-1"><i className="fas fa-check-circle"></i></span></li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <ul className="pagination justify-content-center mt-4 mb-0">
                      <li className="page-item disabled"> <a className="page-link" href="#" tabIndex="-1"><i className="fas fa-angle-left"></i></a> </li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item active"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item d-flex align-content-center flex-wrap text-muted text-5 mx-1">......</li>
                      <li className="page-item"><a className="page-link" href="#">15</a></li>
                      <li className="page-item"> <a className="page-link" href="#"><i className="fas fa-angle-right"></i></a> </li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer id="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg d-lg-flex align-items-center">
                <ul className="nav justify-content-center justify-content-lg-start text-3">
                  <li className="nav-item"> <a className="nav-link active" href="#">About Us</a></li>
                  <li className="nav-item"> <a className="nav-link" href="#">Support</a></li>
                  <li className="nav-item"> <a className="nav-link" href="#">Help</a></li>
                </ul>
              </div>
              <div className="col-lg d-lg-flex justify-content-lg-end mt-3 mt-lg-0">
                <ul className="social-icons justify-content-center">
                  <li className="social-icons-facebook"><a data-bs-toggle="tooltip" href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                  <li className="social-icons-twitter"><a data-bs-toggle="tooltip" href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                  <li className="social-icons-google"><a data-bs-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i className="fab fa-google"></i></a></li>
                  <li className="social-icons-youtube"><a data-bs-toggle="tooltip" href="http://www.youtube.com/" target="_blank" title="Youtube"><i className="fab fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="footer-copyright pt-3 pt-lg-2 mt-2">
              <div className="row">
                <div className="col-lg">
                  <p className="text-center text-lg-start mb-2 mb-lg-0">Copyright &copy; 2022 <a href="#">xyz</a>. All Rights Reserved.</p>
                </div>
                <div className="col-lg d-lg-flex align-items-center justify-content-lg-end">
                  <ul className="nav justify-content-center">
                    <li className="nav-item"> <a className="nav-link active" href="#">Security</a></li>
                    <li className="nav-item"> <a className="nav-link" href="#">Terms</a></li>
                    <li className="nav-item"> <a className="nav-link" href="#">Privacy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default index
