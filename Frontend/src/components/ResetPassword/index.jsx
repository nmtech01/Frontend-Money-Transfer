import { useState, } from 'react'
import Header from "../Header/Header";
import { Link } from 'react-router-dom';


function index() {
  const [count, setCount] = useState(0)

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
                      <h1 className="text-11 text-white mb-4">Reset Password</h1>
                      <p className="text-4 text-white lh-base mb-5">Weaving a new strand of security! 🛡️ Please input your email and craft a brand-new password below to fortify your account.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="container my-4">
                <div className="row g-0">
                  <div className="col-11 col-lg-9 col-xl-8 mx-auto">
                    <h3 className="fw-400 mb-4">Password Reset</h3>
                    <form id="loginForm" method="post">
                      <div className="mb-3">
                        <label htmlFor="emailAddress" className="form-label">Password</label>
                        <input type="email" className="form-control" id="emailAddress" required placeholder="Enter Your Password" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="emailAddress" className="form-label">Confirm Password</label>
                        <input type="email" className="form-control" id="emailAddress" required placeholder="Enter Confirm Password" />
                      </div>
                      <Link to="/">
                      <div className="d-grid mb-3">
                            <button  className="btn btn-primary" type="submit">Submit</button>
                        </div>
                        </Link>
                    </form>
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
