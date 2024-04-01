import React,{ useEffect, useState, } from 'react'
import Header from "../Header/Header";
import { Link ,useNavigate,useParams} from 'react-router-dom';
import { toast } from "react-toastify";
import Spinner from '../../commonComponent/Spinner';
import { resetPasswordApi } from '../../services/authService';

function index() {
  const navigate=useNavigate();
 
    const toastId = React.useRef(null);

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState('');

    const [linkId, setLinkId] = useState('');
    const [isLoading,setIsLoading]=useState(false)
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const id = urlParams.get('id');
      setLinkId(id)
  }, []);
  const resetPassword= (e) => {
    e.preventDefault();
 
  if (password === "") {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.error("Please enter password");
    }
    return;
  }
  
  if (confirmPassword === "") {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.error("Please enter confirm password");
    }
    return;
  }
  if (password !== confirmPassword) {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast.error("Password not matche");
    }
    return;
  }
  setIsLoading(true);
  const param = {
    "password":password,
    "confirm_password":confirmPassword,
    "id":linkId
};
   console.log("paramsss",param);
   resetPasswordApi(param)
    .then((resp) => {
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
                        <input 
                        value={password}
                        onChange={(e)=>setPassword(e?.target?.value)}
                        
                        type="email" className="form-control" id="emailAddress"  placeholder="Enter Your Password" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="emailAddress" className="form-label">Confirm Password</label>
                        <input 
                         value={confirmPassword}
                         onChange={(e)=>setConfirmPassword(e?.target?.value)}
                        type="email" className="form-control" id="emailAddress"  placeholder="Enter Confirm Password" />
                      </div>
                      <Link to="/">
                      <div className="d-grid mb-3">
                            <button 
                            onClick={(e)=>resetPassword(e)}
                            className="btn btn-primary" type="submit">{isLoading?<Spinner/>:"Submit"}</button>
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
