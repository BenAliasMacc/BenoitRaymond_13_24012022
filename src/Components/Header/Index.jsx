import React from 'react';
import './Index.css';
import logo from '../../img/argentBankLogo.png';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className='header'>
        <Link to='/' className='header-logo'><img src={logo} alt="Logo ArgentBank" className='header-logo-img' /></Link>
        <h1 className='sr-only'>Argent Bank</h1>
        <Link to='/sign-in' className='header-signIn'><i className="fa fa-user-circle"></i> Sign In</Link>
    </header>)
}

export default Header;
