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


                <div id="content" className="py-4">
                    <div className="container">
                        <div className="row">

                            <Aside />
                            <div className="col-lg-9">




                                <div className="bg-white shadow-sm rounded p-4 mb-4">
                                    <h3 className="text-5 fw-400 d-flex align-items-center mb-4">Personal Details<a href="#edit-personal-details"
                                        data-bs-toggle="modal" className="ms-auto text-2 text-uppercase btn-link"><span className="me-1"><i
                                            className="fas fa-edit"></i></span>Edit</a></h3>
                                    <hr className="mx-n4 mb-4">
                                    </hr>
                                    <div className="row gx-3 align-items-center">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Name:</p>
                                        <p className="col-sm-9 text-3">Smith Rhodes</p>
                                    </div>
                                    <div className="row gx-3 align-items-center">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Date of Birth:</p>
                                        <p className="col-sm-9 text-3">12-09-1982</p>
                                    </div>
                                    <div className="row gx-3 align-items-baseline">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Address:</p>
                                        <p className="col-sm-9 text-3">4th Floor, Plot No.22, Above Public Park, 145 Murphy Canyon Rd, Suite
                                            100-18,<br></br>
                                            San Ditego,<br></br>
                                            California - 22434,<br></br>
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
                                            <div className="modal-body p-4">
                                                <form id="personaldetails" method="post">
                                                    <div className="row g-3">
                                                        <div className="col-12 col-sm-6">
                                                            <label htmlFor="firstName" className="form-label">First Name</label>
                                                            <input type="text" value="Smith" className="form-control" data-bv-field="firstName"
                                                                id="firstName" required placeholder="First Name" />
                                                        </div>
                                                        <div className="col-12 col-sm-6">
                                                            <label htmlFor="lastName" className="form-label">Last Name</label>
                                                            <input type="text" value="Rhodes" className="form-control" data-bv-field="lastName"
                                                                id="lastName" required placeholder="Last Name" />
                                                        </div>
                                                        <div className="col-12">
                                                            <label htmlFor="birthDate" className="form-label">Date of Birth</label>
                                                            <div className="position-relative">
                                                                <input id="birthDate" value="12-09-1982" type="text" className="form-control" required
                                                                    placeholder="Date of Birth" />
                                                                <span className="icon-inside"><i className="fas fa-calendar-alt"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <h3 className="text-5 fw-400 mt-4">Address</h3>
                                                    <hr>
                                                    </hr>
                                                    <div className="row g-3">
                                                        <div className="col-12">
                                                            <label htmlFor="address" className="form-label">Address</label>
                                                            <input type="text" value="4th Floor, Plot No.22, Above Public Park" className="form-control"
                                                                data-bv-field="address" id="address" required placeholder="Address 1" />
                                                        </div>
                                                        <div className="col-12 col-sm-6">
                                                            <label htmlFor="city" className="form-label">City</label>
                                                            <input id="city" value="San Ditego" type="text" className="form-control" required
                                                                placeholder="City" />
                                                        </div>

                                                        <div className="col-12 col-sm-6">
                                                            <label htmlFor="zipCode" className="form-label">Zip Code</label>
                                                            <input id="zipCode" value="22434" type="text" className="form-control" required
                                                                placeholder="City" />
                                                        </div>

                                                        <div className="col-12 mt-4 d-grid"><button className="btn btn-primary" type="submit">Save
                                                            Changes</button></div>
                                                    </div>

                                                </form>
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



                <Footer />
            </div>
        </>
    )
}

export default index
