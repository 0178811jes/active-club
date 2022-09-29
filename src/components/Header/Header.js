import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
            <h1>SPORTS-ACTIVE-CLUB</h1>
           
        </div>
    );
};

export default Header;