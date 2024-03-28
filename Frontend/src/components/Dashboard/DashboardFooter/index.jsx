import React, { useState } from "react";


const index = () => {

    return (

        <>
            <footer id="footer " className="bg-dark-2 header-text-light">
                <div className="container">
                    
                    <div className="footer-copyright pt-3 pt-lg-2 mt-2">
                        <div className="row">
                            <div className="col-lg">
                                <p className="text-center text-lg-start mb-2 mb-lg-0" style={{color:"white"}}>Copyright &copy; 2022 <a href="#">xyz</a>. All Rights Reserved.</p>
                            </div>
                            <div className="col-lg d-lg-flex align-items-center justify-content-lg-end">
                                <ul className="nav justify-content-center" >
                                    <li className="nav-item"> <a className="nav-link" style={{color:"white"}} href="#">Security</a></li>
                                    <li className="nav-item"> <a className="nav-link" style={{color:"white"}} href="#">Terms</a></li>
                                    <li className="nav-item"> <a className="nav-link" style={{color:"white"}} href="#">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    );
};
export default index;