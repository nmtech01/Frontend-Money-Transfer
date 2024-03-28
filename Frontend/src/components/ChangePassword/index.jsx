import { useState, } from 'react'
import Header from "../Dashboard/DashboardHeader/index";
import { Link } from 'react-router-dom';
import Footer from "../Dashboard/DashboardFooter/index"
import Aside from "../Dashboard/DashboardAside/index"
import { Button, Modal } from 'antd';


function index() {
    const [count, setCount] = useState(0)

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
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

                                <div class="bg-white shadow-sm rounded p-4 mb-4">
                                    <h3 class="text-5 fw-400 d-flex align-items-center mb-4">Password<a onClick={showModal} class="ms-auto text-2 text-uppercase btn-link"><span class="me-1"><i class="fas fa-edit"></i></span>Change</a></h3>
                                    <hr class="mx-n4 mb-4"></hr>
                                    <p class="text-3">Create or update your password. - <span class="text-muted">Last changed: 15 March, 2021</span></p>
                                </div>
                                <Modal
                                footer={false}
                                 class="modal fade " role="dialog" aria-hidden="true" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                                    <div class="modal-dialog modal-dialog-centered" role="document">
                                        <div class="modal-content">
                                            
                                            <div class="modal-body p-4">
                                                <form id="changePassword" method="post">
                                                    <div class="mb-3">
                                                        <label for="existingPassword" class="form-label">Confirm Current Password</label>
                                                        <input type="text" class="form-control" data-bv-field="existingpassword" id="existingPassword" required placeholder="Enter Current Password" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="newPassword" class="form-label">New Password</label>
                                                        <input type="text" class="form-control" data-bv-field="newpassword" id="newPassword" required placeholder="Enter New Password" />
                                                    </div>
                                                    <div class="mb-3">
                                                        <label for="confirmPassword" class="form-label">Confirm New Password</label>
                                                        <input type="text" class="form-control" data-bv-field="confirmgpassword" id="confirmPassword" required placeholder="Enter Confirm New Password" />
                                                    </div>
                                                    <div class="d-grid mt-4"><button onClick={handleOk} class="btn btn-primary" type="submit">Update Password</button></div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </Modal>


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
