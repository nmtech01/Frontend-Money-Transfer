import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

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
import { logoutApi } from "../../../services/authService.js";
import FullScreenLoader from "../../../commonComponent/FullScreenLoader.jsx";
import { toast } from "react-toastify";

const index = ({pofile}) => {
    const navigate=useNavigate();
    const toastId = React.useRef(null);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [userData, setuserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleNotificationsHover = (isOpen) => {
        setIsNotificationsOpen(isOpen);
    };

    const handleProfileHover = (isOpen) => {
        setIsProfileOpen(isOpen);
    };

    console.log("pofile--",pofile);
    useEffect(()=>{
        const authdata=localStorage.getItem('user_data')
        if(authdata){
            setuserData(JSON.parse(authdata))
        }

    },[pofile])

        const logoutFn=(e)=>{
            e.preventDefault();
              setIsLoading(true);
              const param ={
                id:userData?.id
              }
        logoutApi(param).then((resp) => {
             setIsLoading(false);
            if(resp?.data?.status==200){
                 toastId.current = toast.success(resp?.data?.message);
                navigate('/')
                
            }
            else{
                toastId.current = toast.error(resp?.data?.message);
            }
        })
        .catch((error) => {
          setIsLoading(false);
          toastId.current = toast.error(error);
        });
        }
    const handleDropdownClose = () => {
        setIsDropdownOpen(false);
    };
    const handleDropDownHover = (isOpen) => {
        setIsDropdownOpen(isOpen);
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
                            <div className="logo me-3"> <a className="d-flex" href="/dashboard" title="HTML Template">
                                <img src="/src/assets/images/logo.png" width="80" height="60" alt="" />
                            </a> </div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#header-nav"> <span></span> <span></span> <span></span> </button>

                            <nav className="primary-menu navbar navbar-expand-lg">
                                <div id="header-nav" className="collapse navbar-collapse">
                                    <ul className="navbar-nav me-auto">
                                        <li className="dropdown">
                                            <a className="dropdown-toggle" onClick={handleDropdownToggle}>
                                                AG
                                            </a>
                                            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} style={{ left: '-50%', minWidth: '140px' }}>
                                                <li onClick={handleDropdownClose}><Link className="dropdown-item " to="/collect-money">COLL</Link></li>
                                                <li onClick={handleDropdownClose}><Link className="dropdown-item " to="/app-form">APP</Link></li>
                                                <li onClick={handleDropdownClose}><Link className="dropdown-item " href="#">CONS</Link></li>

                                            </ul>
                                        </li>
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
                                        <ul className={`dropdown-menu ${isNotificationsOpen ? 'show' : ''}`} style={{ left: '-450%' }}>
                                            <li className="text-center text-3 py-2">Notifications (3)</li>
                                            <li className="dropdown-divider mx-n3"></li>
                                            <li><a className="dropdown-item" href="#"><i className="fas fa-bell"></i>A new digital FIRC document is available for you to download<span className="text-1 text-muted d-block">22 Jul 2021</span></a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fas fa-bell"></i>Updates to our privacy policy. Please read.<span className="text-1 text-muted d-block">04 March 2021</span></a></li>
                                            <li><a className="dropdown-item" href="#"><i className="fas fa-bell"></i>Update about fees<span className="text-1 text-muted d-block">18 Feb 2021</span></a></li>
                                            <li className="dropdown-divider mx-n3"></li>
                                            <li><a className="dropdown-item text-center text-primary px-0" href="#">See all Notifications</a></li>
                                        </ul>
                                    </li>

                                    <li className="dropdown profile ms-2" onMouseEnter={() => handleProfileHover(true)} onMouseLeave={() => handleProfileHover(false)}>
                                        <a className="px-0 dropdown-toggle" href="#">
                                            <img 
                                            height={40}
                                            width={40}
                                            className="rounded-circle" src={pofile??
                                             
                                                
                                                
                                              ( userData?.profile_pic ==""?"/src/assets/images/profile_placeholder.png":userData?.profile_pic)} alt="" />
                                        </a>
                                       <ul className={`dropdown-menu ${isProfileOpen ? 'show' : ''}`} style={{ position:"absolute",right:10 }}>
                                        
                                        <li><Link className="dropdown-item" to="/my-profile"><i className="fas fa-user"></i> My Profile</Link></li>
                                        <li><Link className="dropdown-item" to="/change-password" ><i className="fas fa-key"></i> Change password</Link></li>
                                        <li className="dropdown-divider mx-n3"></li>
                                        <li><div
                                        onClick={(e)=>logoutFn(e)}
                                        className="dropdown-item"  ><i className="fas fa-sign-out-alt"></i> Sign Out</div></li>
                                    </ul>

                                       
                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>
                    
                </div>
            </header>
            {isLoading&&
            <FullScreenLoader/>
            
            }


        </>

    );
};
export default index;