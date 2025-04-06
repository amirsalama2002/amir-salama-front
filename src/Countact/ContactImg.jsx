import React from 'react';
import './CountactImg.css';
import { Link } from "react-router-dom";

const ContactImg = () => {
    return (
        <div className='contactimg'>
           <div className="countact_her">
                <h1>Contact us</h1>
                <p><Link to='/' className='mo'>Home</Link>/ Contact us</p>
           </div>
        </div>
    );
}

export default ContactImg;
