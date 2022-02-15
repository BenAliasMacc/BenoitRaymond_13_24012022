import React from 'react';
import './Index.css';
import logo from '../../img/argentBankLogo.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../Redux/ConnexionApi/actionConnection';


function Header({statusInLocaleStorage, userFirstNameInLocaleStorage}) {

  const statusInRedux = useSelector(state => state.connection.status)
  const status = statusInLocaleStorage ? statusInLocaleStorage : statusInRedux
  const userFirstNameInRedux = useSelector(state => state.userData.firstName)
  const userFirstName = userFirstNameInLocaleStorage ? userFirstNameInLocaleStorage : userFirstNameInRedux

  const dispatch = useDispatch();

  const handleSignOut = () => {
    localStorage.clear()
    dispatch(signOut())
    document.locale.reload()
  }
  
  console.log(status);
  const signInOutButton =  status !== 200 ? (
    <Link to='/sign-in' className='header-signIn'><i className="fa fa-user-circle"></i> Sign In</Link>
  ) : (
    <div>
      <Link to='/private/accounts' className='header-signIn'>
        <i className="fa fa-user-circle"></i> {userFirstName}</Link>
      <Link to='/' className='header-signIn' onClick={() => handleSignOut()}>
        <i className="fa fa-sign-out"></i> Sign Out
      </Link>
    </div>
  )

  return (
    <header className='header'>
        <Link to='/' className='header-logo'><img src={logo} alt="Logo ArgentBank" className='header-logo-img' /></Link>
        <h1 className='sr-only'>Argent Bank</h1>
        {signInOutButton}
    </header>)
}

export default Header;
