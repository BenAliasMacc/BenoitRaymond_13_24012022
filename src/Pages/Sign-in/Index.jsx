import React from 'react';
import './Index.css'
import { Link } from 'react-router-dom';

function SignIn() {
    return (
        <main className='signIn'>
            <div className='signIn-content'>
                <i className='fa fa-user-circle signIn-content-icon'></i>
                <h1>Sign In</h1>
                <form>
                    <div className='signIn-content-wrapper'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' id='username'/>
                    </div>
                    <div className='signIn-content-wrapper'>
                        <label htmlFor='password'>Password</label>
                        <input type='text' id='password'/>
                    </div>
                    <div className='signIn-content-remember'>
                        <input type='checkbox' id='remember-me'/>
                        <label htmlFor='remember-me'>Remember me</label>
                    </div>
                    <Link to='/accounts' className='signIn-content-button'>Sign In</Link>
                </form>
            </div>
        </main>
    );
}

export default SignIn;
