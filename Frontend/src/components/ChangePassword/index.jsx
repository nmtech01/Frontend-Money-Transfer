import React,{ useState, } from 'react'
import Header from "../Dashboard/DashboardHeader/index";
import { Link, useNavigate } from 'react-router-dom';
import Footer from "../Dashboard/DashboardFooter/index"
import Aside from "../Dashboard/DashboardAside/index"
import { Button, Modal } from 'antd';
import { toast } from "react-toastify";

import Spinner from "../../commonComponent/Spinner";
import { changePasswordApi } from '../../services/authService';

function index() {
    const navigate=useNavigate();
    const toastId = React.useRef(null);

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading,setIsLoading]=useState(false)
  

    const [isModalOpen, setIsModalOpen] = useState(true);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        // setIsModalOpen(false);
        navigate('/dashboard')
    };

    const changePassword = (e) => {
        e.preventDefault();
     
      if (currentPassword === "") {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.error("Please enter current password");
        }
        return;
      }
      if (newPassword === "") {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.error("Please enter New Password");
        }
        return;
      }
      if (confirmPassword === "") {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.error("Please enter confirm password");
        }
        return;
      }
      if (newPassword !== confirmPassword) {
        if (!toast.isActive(toastId.current)) {
          toastId.current = toast.error("Password not matched");
        }
        return;
      }
      setIsLoading(true);
      const param = {
        "old_password":currentPassword,
        "new_password1":newPassword,
        "new_password2":confirmPassword
    };
       console.log("paramsss",param);
       changePasswordApi(param)
        .then((resp) => {
            setIsLoading(false);
            if(resp?.data?.status==200){
                toastId.current = toast.success(resp?.data?.message);
                handleCancel()
                
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
                <Header />

                <div id="content" class="py-4">
                    <div class="container">
                        <div class="row">

                            <Aside />
                            <div class="col-lg-9">
{/* 
                                <div class="bg-white shadow-sm rounded p-4 mb-4">
                                    <h3 class="text-5 fw-400 d-flex align-items-center mb-4">Password<a onClick={showModal} class="ms-auto text-2 text-uppercase btn-link"><span class="me-1"><i class="fas fa-edit"></i></span>Change</a></h3>
                                    <hr class="mx-n4 mb-4"></hr>
                                    <p class="text-3">Create or update your password. - <span class="text-muted">Last changed: 15 March, 2021</span></p>
                                </div> */}
                                {/* <Modal
                                footer={false}
                                 class="modal fade " role="dialog" aria-hidden="true" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            
                                            <div class="modal-body p-4">
                                                <form id="changePassword" method="post">
                                                    <div class="mb-3">
                                                        <label for="existingPassword" class="form-label">Confirm Current Password</label>
                                                        <input type="text" class="form-control" data-bv-field="existingpassword" id="existingPassword" 
                                                         placeholder="Enter Current Password" 
                                                         value={currentPassword}
                                                         onChange={(e) => setCurrentPassword(e.target.value)}
                                                         />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="newPassword" class="form-label">New Password</label>
                                                        <input type="text" 
                                                         value={newPassword}
                                                         onChange={(e) => setNewPassword(e.target.value)}
                                                        class="form-control" data-bv-field="newpassword" id="newPassword"  placeholder="Enter New Password" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="confirmPassword" class="form-label">Confirm New Password</label>
                                                        <input 
                                                         value={confirmPassword}
                                                         onChange={(e) => setConfirmPassword(e.target.value)}
                                                        type="text" class="form-control" data-bv-field="confirmgpassword" id="confirmPassword"  placeholder="Enter Confirm New Password" />
                                                    </div>
                                                    <div class="d-grid mt-4"><button onClick={(e)=>changePassword(e)} class="btn btn-primary" type="submit">
                                                        {isLoading?<Spinner/>:'Update Password'


                                                    }</button></div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </Modal> */}

<div class="modal-dialog modal-dialog-centered custom-shadow" role="document">
  <div class="modal-content">
    <div class="modal-body p-4">
      <form id="changePassword" method="post">
        <div class="mb-3">
          <label for="existingPassword" class="form-label">Confirm Current Password</label>
          <input type="text" class="form-control" data-bv-field="existingpassword" id="existingPassword" 
            placeholder="Enter Current Password" 
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="newPassword" class="form-label">New Password</label>
          <input type="text" 
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            class="form-control" data-bv-field="newpassword" id="newPassword"  placeholder="Enter New Password" 
          />
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Confirm New Password</label>
          <input 
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="text" class="form-control" data-bv-field="confirmgpassword" id="confirmPassword"  placeholder="Enter Confirm New Password" 
          />
        </div>
        <div class="d-grid mt-4">
          <button onClick={(e)=>changePassword(e)} class="btn btn-primary" type="submit">
            {isLoading ? <Spinner/> : 'Update Password'}
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

                            </div>
                        </div>
                    </div>
                </div>


                <Footer />
            </div>
        </>
    )
}

export default index
