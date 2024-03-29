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
                                    <div className="col-lg-11 mx-auto">
                                        <div className="row widget-steps">
                                            <div className="col-4 step active">
                                                <div className="step-name">Details</div>
                                                <div className="progress">
                                                    <div className="progress-bar"></div>
                                                </div>
                                                <a href="#" className="step-dot"></a> </div>
                                            <div className="col-4 step disabled">
                                                <div className="step-name">Confirm</div>
                                                <div className="progress">
                                                    <div className="progress-bar"></div>
                                                </div>
                                                <a href="#" className="step-dot"></a> </div>
                                            <div className="col-4 step disabled">
                                                <div className="step-name">Success</div>
                                                <div className="progress">
                                                    <div className="progress-bar"></div>
                                                </div>
                                                <a href="#" className="step-dot"></a> </div>
                                        </div>
                                        <div className='row'>
                                            <form id="form-send-money" method="post">
                                                <div className="row mb-3 mt-4">
                                                    <div className="col-3">
                                                        <label htmlFor="amount" className="form-label">Amount:</label>
                                                    </div>
                                                    <div className="col-9 h-1">
                                                        <input type="text" value="" className="form-control" id="amount" required placeholder="Enter Amount" style={{ height: '40px' }} />

                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-3">
                                                        <label htmlFor="toggleGAB" className="form-label">GAB:</label>
                                                    </div>
                                                    <div className="col">

                                                        <div className="form-check form-switch">
                                                            <input className="form-check-input" type="checkbox" id="toggleGAB" style={{ height: '22px', width: '40px' }} />
                                                            <label className="form-check-label" htmlFor="toggleGAB"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="row mb-3">
                                                    <div className="col-6">
                                                        <h6 className='form-header-style'>Billets</h6>
                                                        <table className="table">
                                                            <tbody>
                                                                <tr>
                                                                    <div className="row mb-3">
                                                                        <div className="col-2">
                                                                            <label htmlFor="toggleGAB" className="form-label">200:</label>
                                                                        </div>
                                                                        <div className="col-10">
                                                                            <input type="text" className="form-control" placeholder="200" />
                                                                        </div>
                                                                    </div>

                                                                </tr>
                                                                <tr>
                                                                    <div className="row mb-3">
                                                                        <div className="col-2">
                                                                            <label htmlFor="toggleGAB" className="form-label">100:</label>
                                                                        </div>
                                                                        <div className="col-10">
                                                                            <input type="text" className="form-control" placeholder="200" />
                                                                        </div>
                                                                    </div>
                                                                </tr>
                                                                <tr>
                                                                    <div className="row mb-3">
                                                                        <div className="col-2">
                                                                            <label htmlFor="toggleGAB" className="form-label">50:</label>
                                                                        </div>
                                                                        <div className="col-10">
                                                                            <input type="text" className="form-control" placeholder="200" />
                                                                        </div>
                                                                    </div>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="col table-wrapper" id="table2">
                                                        <h6 className='form-header-style'>Pieces</h6>
                                                        <table className="table">
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <div className="row mb-3">
                                                                            <div className="col-2">
                                                                                <label htmlFor="toggleGAB" className="form-label">10:</label>
                                                                            </div>
                                                                            <div className="col-10">
                                                                                <input type="text" className="form-control" placeholder="" />
                                                                            </div>
                                                                        </div>

                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <div className="row mb-3">
                                                                        <div className="col-2">
                                                                            <label htmlFor="toggleGAB" className="form-label">5:</label>
                                                                        </div>
                                                                        <div className="col-10">
                                                                            <input type="text" className="form-control" placeholder="" />
                                                                        </div>
                                                                    </div>
                                                                </tr>
                                                                <tr>
                                                                    <div className="row mb-3">
                                                                        <div className="col-2">
                                                                            <label htmlFor="toggleGAB" className="form-label">1:</label>
                                                                        </div>
                                                                        <div className="col-10">
                                                                            <input type="text" className="form-control" placeholder="" />
                                                                        </div>
                                                                    </div>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <hr></hr>


                                                    <div className="col-12 table-wrapper" id="table2">
                                                        <table className="table">
                                                            <tbody>
                                                                <div className="row mb-3">
                                                                    <div className="col-6">
                                                                        <tr>
                                                                            <td>
                                                                                <div className="row mb-3">
                                                                                    <div className="col-4">
                                                                                        <label htmlFor="toggleGAB" className="form-label">Total Billets:</label>
                                                                                    </div>
                                                                                    <div className="col-8">
                                                                                        <input type="text" className="form-control" placeholder="" />
                                                                                    </div>
                                                                                </div>

                                                                            </td>
                                                                        </tr>

                                                                    </div>
                                                                    <div className="col-6">
                                                                        <tr>
                                                                            <div className="row mb-3">
                                                                                <div className="col-4">
                                                                                    <label htmlFor="toggleGAB" className="form-label">Total Pieces:</label>
                                                                                </div>
                                                                                <div className="col-8">
                                                                                    <input type="text" className="form-control" placeholder="" />
                                                                                </div>
                                                                            </div>
                                                                        </tr>

                                                                    </div>

                                                                </div>

                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-6">
                                                        <div className="d-grid"><button className="btn btn-primary">Cancel</button></div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="d-grid"><button className="btn btn-primary">Next</button></div>
                                                    </div>
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
