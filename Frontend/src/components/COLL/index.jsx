import { useState, } from 'react'
import Header from "../Dashboard/DashboardHeader/index";
import { Link } from 'react-router-dom';
import Footer from "../Dashboard/DashboardFooter/index"
import Aside from "../Dashboard/DashboardAside/index"
import { Button, DatePicker, Modal, Space } from 'antd';


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
    const onChange = (date, dateString) => {
        console.log(date, dateString);
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
                                <nav style={{ '--bs-breadcrumb-divider': 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'8\' height=\'8\'%3E%3Cpath d=\'M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z\' fill=\'currentColor\'/%3E%3C/svg%3E")' }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/dashboard">Home</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Ag</li>
                                        <li className="breadcrumb-item active" aria-current="page">COLL</li>
                                    </ol>
                                </nav>
                                <div className="bg-white shadow-sm rounded p-4 mb-4">
                                    <h3 className="text-5 fw-400 d-flex align-items-center mb-4">Collect Money</h3>
                                    <hr className="mx-n4 mb-4">
                                    </hr>
                                    <div className="col-lg-11 mx-auto">

                                        <div className='row'>
                                            <form id="form-send-money" method="post">
                                                <div className="row mb-3 mt-4">
                                                    <div className="col-3">
                                                        <label htmlFor="amount" className="form-label">Balance:</label>
                                                    </div>
                                                    <div className="col-9 h-1">
                                                        <input type="text" value="" className="form-control" id="amount" required placeholder="Enter Balance" disabled />

                                                    </div>
                                                </div>
                                                <div className="row mb-3 mt-4">
                                                    <div className="col-3">
                                                        <label htmlFor="amount" className="form-label">Amount:</label>
                                                    </div>
                                                    <div className="col-9 h-1">
                                                        <input type="text" value="" className="form-control" id="amount" required placeholder="Enter Amount" />

                                                    </div>
                                                </div>
                                                <div className="row mb-3 mt-4">
                                                    <div className="col-3">
                                                        <label htmlFor="amount" className="form-label">Date:</label>
                                                    </div>
                                                    <div className="col-9 h-1">
                                                        <div className="position-relative">
                                                            <Space direction="vertical">
                                                                <DatePicker className="form-control"  onChange={onChange}  />
                                                            </Space>

                                                        </div>

                                                    </div>
                                                </div>
                                                <div className="row mb-3" style={{marginTop:'100px'}}>
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
