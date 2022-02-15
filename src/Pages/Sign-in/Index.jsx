import React, { useEffect, useState } from 'react';
import './Index.css'
import { useDispatch, useSelector } from 'react-redux';
import { apiCall } from '../../Redux/ConnexionApi/actionConnection';
import { useNavigate } from "react-router-dom";
import { getUserData } from '../../Redux/GetUserData/actionGetUserData';

function SignIn({tokenInLocaleStorage}) {

    const tokenInRedux = useSelector(data => data.connection.token)
    const token = tokenInLocaleStorage ? tokenInLocaleStorage : tokenInRedux
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const [checkbox, setCheckbox] = useState(false);
    
    const handleCheckbox = () => {
        setCheckbox(true)
    }

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const handleForm = e => {
        e.preventDefault();
        dispatch(apiCall(user, checkbox))
    }

    useEffect(() => {
        if(token) {
            dispatch(getUserData(token, checkbox))
            navigate('/private/accounts')
        }
    }, [dispatch, navigate, token]);

    return (
        <main className='signIn'>
            <div className='signIn-content'>
                <i className='fa fa-user-circle signIn-content-icon'></i>
                <h1>Sign In</h1>
                <form onSubmit={e => {handleForm(e)}
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
                        <input type='checkbox' id='remember-me' onClick={handleCheckbox}/>
                        <label htmlFor='remember-me'>Remember me</label>
                    </div>
                    <button className='signIn-content-button'>Sign In</button>
                </form>
            </div>
        </main>
    );
}

export default SignIn;
