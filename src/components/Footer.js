import React from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (
        <div className="Footer">
            <p className="tagline">The Grind Doesn't Stop</p>
            <div className="header-container">
                <h1 className='footh1'>Become a GymBuddy today!</h1>
                <div className="button-container">
                    <button className="download-button">
                        Download <span role="img" aria-label="fire">🔥</span>
                    </button>
                </div>
            </div>
            <p className="email">gymbuddy@support.com</p>
            <div className="social-media">
                <FontAwesomeIcon className="facebook" icon="fa-brands fa-facebook" style={{color: "#ffffff",}} />
                <FontAwesomeIcon className="instagram" icon="fa-brands fa-instagram" style={{color: "#ffffff",}} />
                <FontAwesomeIcon className="linkedin" icon="fa-brands fa-linkedin" style={{color: "#ffffff",}} />
            </div>
            <div style={{ paddingBottom: '100px' }}></div>
        </div>
    );
}

export default Footer;