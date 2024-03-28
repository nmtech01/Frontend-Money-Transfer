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

                                <div className="bg-white shadow-sm rounded p-4 mb-4">
                                    <h3 className="text-5 fw-400 d-flex align-items-center mb-4">Personal Details<a href="#edit-personal-details"  className="ms-auto text-2 text-uppercase btn-link"><span className="me-1"><i className="fas fa-edit"></i></span>Edit</a></h3>
                                    <hr className="mx-n4 mb-4"></hr>
                                    <div className="row gx-3 align-items-center">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">First Name:</p>
                                        <p className="col-sm-9 text-3">Smith Rhodes</p>
                                    </div>
                                    <div className="row gx-3 align-items-center">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Last Name:</p>
                                        <p className="col-sm-9 text-3">Smith Rhodes</p>
                                    </div>
                                    <div className="row gx-3 align-items-center">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Email:</p>
                                        <p className="col-sm-9 text-3">xyz@gmail.com</p>
                                    </div>
                                    <div className="row gx-3 align-items-center">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Phone Number:</p>
                                        <p className="col-sm-9 text-3">+91 9115911615</p>
                                    </div>
                                    <div className="row gx-3 align-items-center">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Date of Birth:</p>
                                        <p className="col-sm-9 text-3">12-09-1982</p>
                                    </div>
                                    <div className="row gx-3 align-items-center">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Gender:</p>
                                        <p className="col-sm-9 text-3">Male</p>
                                    </div>


                                    
                                    <div className="row gx-3 align-items-baseline">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Address:</p>
                                        <p className="col-sm-9 text-3">4th Floor, Plot No.22, Above Public Park, 145 Murphy Canyon Rd,  Suite 100-18,<br></br>
                                            San Ditego,<br></br>
                                                California - 22434,
                                            United States.</p>
                                    </div>
                                </div>
                                <div id="edit-personal-details" className="modal fade " role="dialog" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title fw-400">Personal Details</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white shadow-sm rounded p-4 mb-4">
                                    <h3 className="text-5 fw-400 d-flex align-items-center mb-4">Account Settings</h3>
                                    <hr className="mx-n4 mb-4"></hr>
                                    
                                    <div className="row gx-3 align-items-center">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Time Zone:</p>
                                        <p className="col-sm-9 text-3">(GMT-06:00) Central America</p>
                                    </div>
                                    <div className="row gx-3 align-items-center">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Account Status:</p>
                                        <p className="col-sm-9 text-3"><span className="bg-success text-white rounded-pill d-inline-block px-2 mb-0"><i className="fas fa-check-circle"></i> Active</span></p>
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
