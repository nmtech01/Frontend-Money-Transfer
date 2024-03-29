import React,{ useEffect, useRef, useState, } from 'react'
import Header from "../Dashboard/DashboardHeader/index";
import { Link, json, useNavigate } from 'react-router-dom';
import Footer from "../Dashboard/DashboardFooter/index"
import Aside from "../Dashboard/DashboardAside/index"
import { Button, Modal } from 'antd';
import { getUserProfileApi, updateUserProfileApi } from '../../services/authService';
import { capitalizeFirstLetter } from '../../utilities/globalMethods';
import { toast } from "react-toastify";
import Spinner from "../../commonComponent/Spinner";
import { BASE_URL } from '../../constants/APIinventory';


function index() {
    const modalRef = useRef();
    const navigate=useNavigate();
    const toastId = React.useRef(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userData, setuserData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [firstName, setFisrtName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [isProfileEdit, setIsEditProfile] = useState(false);

    const [address, setAddress] = useState('');

    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    


    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    useEffect(()=>{
       
        const authdata=localStorage.getItem('user_data')
        if(authdata){
            const user=JSON.parse(authdata)
            setFisrtName(user?.first_name)
            setlastName(user?.last_name)
            setEmail(user?.email)
            setProfilePic(user?.profile_pic)
            setAddress(user?.address)
            setCity(userData?.city)
            setState(userData?.state)
            setuserData(user)
        }
    },[])
    const getUserProfile=()=>{
        getUserProfileApi()
        .then((resp) => {
            setIsLoading(false);
            setIsEditProfile(false)
            if(resp?.data?.status==200){
            const user=resp?.data?.data
            setFisrtName(user?.first_name)
            setlastName(user?.last_name)
            setEmail(user?.email)
            setProfilePic(user?.profile_pic)
            setAddress(user?.address)
            setCity(userData?.city)
            setState(userData?.state)
            setuserData(user)      
            }
            
        })
        .catch((error) => {
          setIsLoading(false);
          toastId.current = toast.error(error);
        });
    }
    const uploadImage = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        setProfilePic(file);
        setIsEditProfile(true)
      };

        const updateUserProfile=(e)=>{
            e.preventDefault();
            setIsLoading(true);
        const formData = new FormData();
        formData.append('first_name',firstName)
        formData.append('last_name',firstName)
        formData.append('email',email)
        formData.append('address',address)
        formData.append('profile_pic',URL.createObjectURL(profilePic))
        formData.append('city',city)
        formData.append('state',state)
        console.log("formData",formData);
            updateUserProfileApi(formData)
            .then((resp) => {
                setIsEditProfile(false)
                setIsLoading(false);
                if(resp?.data?.status==200){
                    getUserProfile()
                    toastId.current = toast.success(resp?.data?.message);
                    $(modalRef.current).modal('hide');
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
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">First Name:</p>
                                        <p className="col-sm-9 text-3">{capitalizeFirstLetter(userData?.first_name)}</p>
                                    </div>
                                    <div className="row gx-3 align-items-center">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Last Name:</p>
                                        <p className="col-sm-9 text-3">{capitalizeFirstLetter(userData?.last_name)}</p>
                                    </div>
                                    <div className="row gx-3 align-items-center">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Email:</p>
                                        <p className="col-sm-9 text-3">{userData?.email}</p>
                                    </div>
                                    
                                    
                                    {/* <div className="row gx-3 align-items-center">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Date of Birth:</p>
                                        <p className="col-sm-9 text-3">12-09-1982</p>
                                    </div> */}
                                    <div className="row gx-3 align-items-baseline">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">Address:</p>
                                        <p className="col-sm-9 text-3">{userData?.address??'-'}
                                            {/* 100-18,<br></br>
                                            San Ditego,<br></br>
                                            California - 22434,<br></br>
                                            United States. */}
                                            </p>
                                    </div>
                                    <div className="row gx-3 align-items-baseline">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">City:</p>
                                        <p className="col-sm-9 text-3">{userData?.city??'-'}
                                          
                                            </p>
                                    </div>
                                    <div className="row gx-3 align-items-baseline">
                                        <p className="col-sm-3 text-muted text-sm-end mb-0 mb-sm-3">State:</p>
                                        <p className="col-sm-9 text-3">{userData?.state??'-'}
                                            
                                            </p>
                                    </div>
                                </div>

                                <div 
                                ref={modalRef}
                                id="edit-personal-details" className="modal fade " role="dialog" aria-hidden="true">
                                    <div className="modal-dialog modal-dialog-centered" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title fw-400">Personal Details</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            
                                            <div className="modal-body p-4">
                                                                                    <div className="modal-body p-4 d-flex justify-content-center align-items-center">
                                            <div className="profile-thumb mt-3 mb-4 text-center">
                                                <div className="d-inline-block position-relative">
                                                <img 
                                                height={100}
                                                width={100}
                                                className="rounded-circle" 
                                                src={isProfileEdit?URL.createObjectURL(profilePic):(profilePic?? "/src/assets/images/profile_placeholder.png")} 
                                                alt="" 
                                            />


                                                    <div className="profile-thumb-edit bg-primary text-white" data-bs-toggle="tooltip" title="Change Profile Picture">
                                                        <i className="fas fa-camera position-absolute"></i>
                                                        <input 
                                                          name="profile_image"
                                                        accept="image/jpeg, image/png"
                                                        type="file" className="custom-file-input" id="customFile" 
                                                        onChange={(e) => uploadImage(e)}
                                                        />

                                                      
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                                <form id="personaldetails" method="post">
                                                    <div className="row g-3">
                                                        <div className="col-12 col-sm-6">
                                                            <label htmlFor="firstName" className="form-label">First Name</label>
                                                            <input 
                                                            onChange={(e)=>setFisrtName(e?.target?.value)}
                                                            type="text" value={firstName} className="form-control" data-bv-field="firstName"
                                                                id="firstName"  placeholder="First Name" />
                                                        </div>
                                                        <div className="col-12 col-sm-6">
                                                            <label htmlFor="lastName" className="form-label">Last Name</label>
                                                            <input 
                                                            onChange={(e)=>setlastName(e?.target?.value)}
                                                            type="text" value={lastName} className="form-control" data-bv-field="lastName"
                                                                id="lastName"  placeholder="Last Name" />
                                                        </div>
                                                        <div className="col-12 col-sm-6">
                                                            <label htmlFor="email" className="form-label">Email</label>
                                                            <input 
                                                            disabled
                                                            type="text" value={email} className="form-control" data-bv-field="Email"
                                                                id="email"  placeholder="Email" />
                                                        </div>
                                                        {/* <div className="col-12">
                                                            <label htmlFor="birthDate" className="form-label">Date of Birth</label>
                                                            <div className="position-relative">
                                                                <input id="birthDate" value="12-09-1982" type="text" className="form-control" required
                                                                    placeholder="Date of Birth" />
                                                                <span className="icon-inside"><i className="fas fa-calendar-alt"></i></span>
                                                            </div>
                                                        </div> */}
                                                    </div>

                                                    <h3 className="text-5 fw-400 mt-4">Address</h3>
                                                    <hr>
                                                    </hr>
                                                    <div className="row g-3">
                                                        <div className="col-12">
                                                            <label htmlFor="address" className="form-label">Address</label>
                                                            <input 
                                                            onChange={(e)=>setAddress(e?.target?.value)}
                                                            type="text" value={address} className="form-control"
                                                                data-bv-field="address" id="address" required placeholder="Address 1" />
                                                        </div>
                                                        <div className="col-12 col-sm-6">
                                                            <label htmlFor="city" className="form-label">City</label>
                                                            <input 
                                                            onChange={(e)=>setCity(e?.target?.value)}
                                                            id="city" value={city} type="text" className="form-control" 
                                                                placeholder="City" />
                                                        </div>

                                                        <div className="col-12 col-sm-6">
                                                            <label htmlFor="zipCode" className="form-label">State</label>
                                                            <input 
                                                            onChange={(e)=>setState(e?.target?.value)}
                                                            id="zipCode" value={state} type="text" className="form-control" 
                                                                placeholder="State" />
                                                        </div>

                                                        <div 
                                                        onClick={(e)=>updateUserProfile(e)}
                                                        className="col-12 mt-4 d-grid"><button className="btn btn-primary" type="submit">
                                                            
                                                           {isLoading?<Spinner/>: 'Save Changes'}
                                                            
                                                            </button></div>
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
