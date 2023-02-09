import React from 'react';
import Logoblc from '@/Images/Logofooter.svg'

import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <img src={Logoblc} alt="Logo blanc" className="footer_img" />
            <p className="footer_text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;