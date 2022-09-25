import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav className='nav'>
                <div>
                    <img src={logo} alt="" />
                </div>
                <div className=''>
                    <a href="">HOME</a>
                    <a href="">CONTACT</a>
                    <a href="">SUPPORT</a>
                    <a href="">DASHBOARD</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;