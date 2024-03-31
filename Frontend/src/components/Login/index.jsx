import React, { useState, } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { emailReg } from "../../utilities/validators";
import Spinner from "../../commonComponent/Spinner";
import {loginApi } from "../../services/authService";

function index() {
  const navigate = useNavigate();
  const toastId = React.useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    var pattern = new RegExp(emailReg);
    var resultemail = pattern.test(email);
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
      email: email,
      password: password,
    };
    loginApi(param)
      .then((resp) => {
        setIsLoading(false);
        if (resp?.data?.status == 200) {
          toastId.current = toast.success(resp?.data?.message);
            navigate('/Dashboard')
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
                      <div className="logo mt-5 mb-5 mb-md-0"> <Link className="d-flex" to="/" title="">
                        <img src="/src/assets/images/logo.png" width="80" height="60" alt="" />
                      </Link> </div>
                    </div>
                  </div>
                  <div className="row g-0 my-auto">
                    <div className="col-10 col-lg-9 mx-auto">
                      <h1 className="text-11 text-white mb-4">Welcome back!</h1>
                      <p className="text-4 text-white lh-base mb-5">We are glad to see you again! Instant deposits, withdrawals & payouts trusted by millions worldwide.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="container my-4">
                <div className="row g-0">
                  <div className="col-11 col-lg-9 col-xl-8 mx-auto">
                    <h3 className="fw-400 mb-4">Log In</h3>
                    <form id="loginForm" method="post">
                      <div className="mb-3">
                        <label htmlFor="emailAddress" className="form-label">Email Address</label>
                        <input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          type="email" className="form-control" id="emailAddress"
                          //  required 
                          placeholder="Enter Your Email" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="loginPassword" className="form-label">Password</label>
                        <div className="input-group">
                          <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? "text" : "password"}
                            className="form-control"
                            id="loginPassword"
                            placeholder="Enter Password"
                            aria-describedby="passwordToggle"
                          />
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
                      <div className="row mb-3">
                        <div className="col-sm">
                          <div className="form-check form-check-inline">
                            <input className="form-check-input" id="remember-me" name="remember" type="checkbox" />
                            <label className="form-check-label" htmlFor="remember-me">Remember Me</label>
                          </div>
                        </div>
                        <div className="col-sm text-end">
                          {/* <a
                            className={
                              isLoading ? "disabled-anything " : "btn-link"
                            }
                            href="#"
                          >
                            Forgot Password ?
                          </a> */}
                        </div>
                        <div className="col-sm text-end"><Link className="btn-link" to="/forgot-password" >Forgot Password ?</Link></div>
                      </div>
                      {/* <Link to="/dashboard"> */}
                      <div className="d-grid mb-3">
                        <button
                          onClick={(e) => handleSubmit(e)}
                          className="btn btn-primary" type="submit"> {isLoading ? <Spinner /> : "Login"}</button>
                      </div>
                      {/* </Link> */}
                    </form>
                    <p className="text-3 text-center text-muted">Don't have an account? <Link

                      className={
                        isLoading ? "disabled-anything" : "btn-link"
                      } to="/signup">Sign Up</Link></p>

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
