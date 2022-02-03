import React from 'react';
import './Index.css';
import logo from '../../img/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../Redux/ConnexionApi/actionConnection';


function Header() {

  const connectionState = useSelector(state => state.connection.connected)
  const userFirstName = useSelector(state => state.userData.firstName)
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(signOut())
  }
  
  const signInOutButton = !connectionState ? (<Link to='/sign-in' className='header-signIn'><i className="fa fa-user-circle"></i> Sign In</Link>) : (<Link to='/' className='header-signIn' onClick={() => handleSignOut()}><i className="fa fa-user-circle"></i> {userFirstName} <i className="fa fa-sign-out"></i> Sign Out</Link>)

  return (
    <header className='header'>
        <Link to='/' className='header-logo'><img src={logo} alt="Logo ArgentBank" className='header-logo-img' /></Link>
        <h1 className='sr-only'>Argent Bank</h1>
        {signInOutButton}
    </header>)
}

export default Header;
