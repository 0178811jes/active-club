import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            <h1>SPORTS-ACTIVE-CLUB</h1>
           
        </div>
    );
};

export default Header;