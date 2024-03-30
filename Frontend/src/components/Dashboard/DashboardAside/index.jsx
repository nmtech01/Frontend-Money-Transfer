import React, { useEffect, useState } from "react";


const index = () => {
    const [firstName, setFisrtName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [userData, setuserData] = useState(null);
    useEffect(() => {
        
        const authdata = localStorage.getItem('user_data')
        if (authdata) {
            const user = JSON.parse(authdata)
            setFisrtName(user?.first_name)
            setlastName(user?.last_name)
            setEmail(user?.email)
            setProfilePic(user?.profile_pic)
            setuserData(user)
        }
    }, [])
    return (

        <>
            <aside className="col-lg-3">

                <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                    <div className="profile-thumb mt-3 mb-4">

                        <img
                            height={100}
                            width={100}
                            className="rounded-circle" src={profilePic ?? "/src/assets/images/profile-thumb.jpg"} alt="" />
                        {/* <div className="profile-thumb-edit bg-primary text-white" data-bs-toggle="tooltip" title="Change Profile Picture"> <i className="fas fa-camera position-absolute"></i>
                            <input type="file" className="custom-file-input" id="customFile" />
                        </div> */}
                    </div>
                    <p className="text-3 fw-500 mb-2">Hello, {userData?.first_name} {userData?.last_name}</p>
                    {/* <p className="mb-2"><a href="settings-profile.html" className="text-5 text-light" data-bs-toggle="tooltip" title="Edit Profile"><i className="fas fa-edit"></i></a></p> */}
                </div>
                <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                    <div className="text-17 text-light my-3"><i className="fas fa-wallet"></i></div>
                    <h3 className="text-9 fw-400">${userData?.total_requested}</h3>
                    <p className="mb-2 text-muted opacity-8">Available Balance</p>
                    {/* <hr className="mx-n3"></hr> */}
                    {/* <div className="d-flex"><a href="withdraw-money.html" className="btn-link me-auto">Withdraw</a> <a href="deposit-money.html" className="btn-link ms-auto">Deposit</a></div> */}
                </div>
                <div className="bg-white shadow-sm rounded text-center p-3 mb-4">
                    <div className="text-17 text-light my-3"><i className="fas fa-comments"></i></div>
                    <h3 className="text-5 fw-400 my-4">Need Help?</h3>
                    <p className="text-muted opacity-8 mb-4">Have questions or concerns regrading your account?<br></br>
                        Our experts are here to help!.</p>
                    <div className="d-grid"><a href="#" className="btn btn-primary">Chate with Us</a></div>
                </div>


            </aside>
        </>

    );
};
export default index;