import React from 'react';
import { LinkedIn, GitHub, Instagram } from '@mui/icons-material';
import { TextField } from '@mui/material';
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="center-content">
                <div className="social-icons">
               Connect with me on:
                    <a href="https://www.linkedin.com/" style={{ backgroundColor: 'blue' }}>
                        LinkedIn <LinkedIn sx={{ml:1}}/>
                    </a>
                    <a href="https://github.com/">
                        Github <GitHub sx={{ml:1}}/>
                    </a>
                    <a href="https://www.instagram.com/" style={{backgroundColor:"red"}}>
                        Instagram <Instagram sx={{ml:1}} />
                    </a>
                </div>
            </div>
            <div className="right-content">
                {/* <TextField sx={{backgroundColor:"white"}}label="Email" variant="outlined" size="small" /> */}
            </div>
        </div>
    );
};

export default Footer;
