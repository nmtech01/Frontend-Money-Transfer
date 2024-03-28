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

                        <div className="row mt-4 mb-5">
                            <div className="col-lg-11 mx-auto">
                                <div className="row widget-steps">
                                    <div className="col-4 step active">
                                        <div className="step-name">Details</div>
                                        <div className="progress">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <a href="#" className="step-dot"></a> </div>
                                    <div className="col-4 step disabled">
                                        <div className="step-name">Confirm</div>
                                        <div className="progress">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <a href="#" className="step-dot"></a> </div>
                                    <div className="col-4 step disabled">
                                        <div className="step-name">Success</div>
                                        <div className="progress">
                                            <div className="progress-bar"></div>
                                        </div>
                                        <a href="#" className="step-dot"></a> </div>
                                </div>
                            </div>
                        </div>
                        <h2 className="fw-400 text-center mt-3">Request Money</h2>
                        <div className="row">
                            <div className="col-md-9 col-lg-7 col-xl-6 mx-auto">
                                <div className="bg-white shadow-sm rounded p-3 pt-sm-4 pb-sm-5 px-sm-5 mb-4">
                                    <h3 className="text-5 fw-400 mb-3 mb-sm-4">Personal Details</h3>
                                    <hr className="mx-n3 mx-sm-n5 mb-4"></hr>
                                    <form id="form-send-money" method="post">
                                        <div className="mb-3">
                                            <label for="amount" className="form-label">Amount</label>
                                            <input type="text" value="" className="form-control" id="amount" required placeholder="Enter Amount" />
                                        </div>

                                        <div className="form-check form-switch">
                                            <input className="form-check-input" type="checkbox" id="toggleGAB" />
                                            <label className="form-check-label" for="toggleGAB">GAB</label>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col">
                                                <h6>Billets</h6>
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td><input type="text" className="form-control" placeholder="200" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="text" className="form-control" placeholder="100" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="text" className="form-control" placeholder="50" /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="col table-wrapper" id="table2">
                                                <h6>Pieces</h6>
                                                <table className="table">
                                                    <tbody>
                                                        <tr>
                                                            <td><input type="text" className="form-control" placeholder="10" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="text" className="form-control" placeholder="5" /></td>
                                                        </tr>
                                                        <tr>
                                                            <td><input type="text" className="form-control" placeholder="1" /></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="d-grid"><button className="btn btn-primary">Continue</button></div>


                                    </form>

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
