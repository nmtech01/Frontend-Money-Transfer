import React, { useState, } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { emailReg } from "../../utilities/validators";
import Spinner from "../../commonComponent/Spinner";
import { signup, sigupApi } from "../../services/authService";


function index() {
    const navigate = useNavigate();
    const toastId = React.useRef(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        var pattern = new RegExp(emailReg);
        var resultemail = pattern.test(email);
        if (firstName === "") {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Please enter first name");
            }
            return;
        }
        if (lastName === "") {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Please enter last name");
            }
            return;
        }
        if (resultemail === false) {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Please enter valid email");
            }
            return;
        }
        if (password === "") {
            if (!toast.isActive(toastId.current)) {
                toastId.current = toast.error("Please enter valid password");
            }
            return;
        }
        setIsLoading(true);
        const param = {
            "first_name": firstName,
            "last_name": lastName,
            "email": email,
            "password": password
        };
        console.log("paramsss", param);
        sigupApi(param)
            .then((resp) => {
                setIsLoading(false);
                if (resp?.data?.status == 200) {
                    toastId.current = toast.success(resp?.data?.message);
                    navigate('/')

                }
                else {
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
                <div className="container-fluid px-0">
                    <div className="row g-0 min-vh-100">
                        <div className="col-md-6">
                            <div className="hero-wrap d-flex align-items-center h-100">
                                <div className="hero-mask opacity-8 bg-primary"></div>
                                <div className="hero-bg hero-bg-scroll" style={{ backgroundImage: `url('./src/assets/images/image-3.jpg')` }}></div>
                                <div className="hero-content mx-auto w-100 h-100 d-flex flex-column">
                                    <div className="row g-0">
                                        <div className="col-10 col-lg-9 mx-auto">
                                            <div className="logo mt-5 mb-5 mb-md-0"> <Link className="d-flex" to="/" title="HTML Template">
                                                <img src="/src/assets/images/logo.png" width="80" height="60" alt="" />
                                            </Link> </div>
                                        </div>
                                    </div>
                                    <div className="row g-0 my-auto">
                                        <div className="col-10 col-lg-9 mx-auto">
                                            <h1 className="text-11 text-white mb-4">Get Verified!</h1>
                                            <p className="text-4 text-white lh-base mb-5">Every day,  it makes thousands of customers happy.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex align-items-center">
                            <div className="container my-4">
                                <div className="row g-0">
                                    <div className="col-11 col-lg-9 col-xl-8 mx-auto">
                                        <h3 className="fw-400 mb-4">Sign Up</h3>
                                        <form id="loginForm" method="post">
                                            <div className="mb-3">
                                                <label htmlFor="firstName" className="form-label">First Name</label>
                                                <input
                                                    value={firstName}
                                                    onChange={(e) => setFirstName(e.target.value)}
                                                    type="text" className="form-control" id="firstName"
                                                    // required 
                                                    placeholder="Enter Your First Name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                                <input
                                                    value={lastName}
                                                    onChange={(e) => setLastName(e.target.value)}
                                                    type="text" className="form-control" id="lastName"
                                                    // required 
                                                    placeholder="Enter Your Last Name" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="emailAddress" className="form-label">Email Address</label>
                                                <input
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    type="email" className="form-control" id="emailAddress"

                                                    // required

                                                    placeholder="Enter Your Email" />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="loginPassword" className="form-label">Password</label>
                                                <div className="input-group">
                                                    <input
                                                        value={password}
                                                        onChange={(e) => setPassword(e.target.value)}
                                                        type="password" className="form-control" id="loginPassword"
                                                        // required 
                                                        placeholder="Enter Password" />
                                                    <span
                                                        className="input-group-text bg-white"
                                                        id="passwordToggle"
                                                        onClick={() => setShowPassword(!showPassword)}
                                                        style={{ cursor: 'pointer' }}
                                                    >
                                                        {showPassword ? <i className="fa-solid fa-eye" ></i> : <i className="fa-solid fa-eye-slash" ></i>}
                                                    </span>
                                                </div>
                                            </div>
                                            {/* <Link to="/"> */}
                                            <div className="d-grid mt-4 mb-3">

                                                <button
                                                    onClick={(e) => handleSubmit(e)}
                                                    className="btn btn-primary" type="submit"> {isLoading ? <Spinner /> : "Sign Up"}</button></div>
                                            {/* </Link> */}
                                        </form>
                                        <p className="text-3 text-center text-muted">Already have an account? <Link className={
                                            isLoading ? "disabled-anything " : "btn-link"
                                        } to="/">Login</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default index
