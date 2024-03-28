import React, { useState } from "react";
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../../../assets/css/stylesheet.css';
import '../../../assets/css/all.min.css';
// import '../../../assets/css/currency-flags.min.css';
import '../../../assets/css/daterangepicker.css';
// import '../../../assets/css/owl.carousel.min.css';

import '../../../assets/vendor/jquery/jquery.min.js'
import '../../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js'



import '../../../assets/vendor/bootstrap/js/switcher.min.js'
import '../../../assets/vendor/bootstrap/js/theme.js'
import '@fortawesome/fontawesome-free/css/all.min.css';


const index = () => {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    const handleNotificationsHover = (isOpen) => {
        setIsNotificationsOpen(isOpen);
    };

    const handleProfileHover = (isOpen) => {
        setIsProfileOpen(isOpen);
    };
    return (

        <>
            {/* <div id="preloader">
                <div data-loader="dual-ring"></div>
            </div> */}

            <header id="header" className="bg-dark-2 header-text-light">
                <div className="container">
                    <div className="header-row">
                        <div className="header-column justify-content-start">
                            <div className="logo me-3"> <a className="d-flex" href="/" title="HTML Template">
                                <img src="/src/assets/images/logo.png" width="80" height="60" alt="" />
                            </a> </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>

                            <nav className="primary-menu navbar navbar-expand-lg">
                                <div id="header-nav" className="collapse navbar-collapse">
                                    <ul className="navbar-nav me-auto">
                                        <li><a href="/dashboard">Dashboard</a></li>
                                        <li><Link  className="dropdown-item" to="/request-money">Send/Request Money</Link></li>
                                        <li><a href="">Reporting</a></li>
                                        <li><a href="">Settings</a></li>
                                        <li><a href="">Administrator</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                        <div className="header-column justify-content-end">
                            <nav className="login-signup navbar navbar-expand">
                                <ul className="navbar-nav">

                                    <li className="dropdown notifications" onMouseEnter={() => handleNotificationsHover(true)} onMouseLeave={() => handleNotificationsHover(false)}>
                                        <a className="dropdown-toggle" href="#">
                                            <span className="text-5"><i className="far fa-bell"></i></span>
                                            <span className="count">3</span>
                                        </a>
                                        <ul className={`dropdown-menu ${isNotificationsOpen ? 'show' : ''}`} style={{ left: '-100%' }}>
                                            <li className="text-center text-3 py-2">Notifications (3)</li>
                                            <li className="dropdown-divider mx-n3"></li>
                                            <li><a className="dropdown-item" href="#"><i className="fas fa-bell"></i>A new digital FIRC document is available for you to download<span className="text-1 text-muted d-block">22 Jul 2021</span></a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fas fa-bell"></i>Updates to our privacy policy. Please read.<span className="text-1 text-muted d-block">04 March 2021</span></a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fas fa-bell"></i>Update about fees<span className="text-1 text-muted d-block">18 Feb 2021</span></a></li>
                                            <li className="dropdown-divider mx-n3"></li>
                                            <li><a className="dropdown-item text-center text-primary px-0" href="notifications.html">See all Notifications</a></li>
                                        </ul>
                                    </li>

                                    <li className="dropdown profile ms-2" onMouseEnter={() => handleProfileHover(true)} onMouseLeave={() => handleProfileHover(false)}>
                                        <a className="px-0 dropdown-toggle" href="#">
                                            <img className="rounded-circle" src="/src/assets/images/profile-thumb-sm.jpg" alt="" />
                                        </a>
                                        <ul className={`dropdown-menu ${isProfileOpen ? 'show' : ''}`} style={{ left: '-100%' }}>
                                            <li className="text-center text-3 py-2">Hi, Smith Rhodes</li>
                                            <li className="dropdown-divider mx-n3"></li>
                                            <li><Link  className="dropdown-item" to="/my-profile"><i className="fas fa-user"></i> My Profile</Link></li>
                                            <li><a className="dropdown-item" href="change-password.html"><i className="fas fa-key"></i> Change password</a></li>
                                            <li className="dropdown-divider mx-n3"></li>
                                            <li><a className="dropdown-item" href="index.html"><i className="fas fa-sign-out-alt"></i> Sign Out</a></li>
                                        </ul>
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        </>

    );
};
export default index;