import React from 'react';
import './Index.css'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { apiCall } from '../../Redux/ConnexionApi/actionConnection';
import reducerConnection from '../../Redux/ConnexionApi/reducerConnection';
import { useState } from 'react';

function SignIn() {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const dispatch = useDispatch()
console.log(apiCall.body);
    

    return (
        <main className='signIn'>
            <div className='signIn-content'>
                <i className='fa fa-user-circle signIn-content-icon'></i>
                <h1>Sign In</h1>
                <form onSubmit={() => {dispatch(apiCall(user))}
                    }>
                    <div className='signIn-content-wrapper'>
                        <label htmlFor='username'>Username</label>
                        <input type='text' id='username' value={user.email} onChange={e => setUser({...user, email: e.target.value})}/>
                    </div>
                    <div className='signIn-content-wrapper'>    
                        <label htmlFor='password'>Password</label>
                        <input type='text' id='password' value={user.password} onChange={e => setUser({...user, password: e.target.value})}/>
                    </div>
                    <div className='signIn-content-remember'>
                        <input type='checkbox' id='remember-me'/>
                        <label htmlFor='remember-me'>Remember me</label>
                    </div>
                    <button className='signIn-content-button'><Link to='#'>Sign In</Link></button> 
                </form>
            </div>
        </main>
    );
}

export default SignIn;
