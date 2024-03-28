import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../../assets/css/stylesheet.css';
// import '../../assets/css/bootstrap-select.min.css';
// import '../../assets/css/currency-flags.min.css';
// import '../../assets/css/daterangepicker.css';
// import '../../assets/css/owl.carousel.min.css';

import '../../assets/vendor/jquery/jquery.min.js'
import '../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
import '../../assets/vendor/bootstrap/js/switcher.min.js'
import '../../assets/vendor/bootstrap/js/theme.js'


const Header = () => {

    return (

        <>
            <div id="preloader">
                <div data-loader="dual-ring"></div>
            </div>
        </>

    );
};
export default Header;