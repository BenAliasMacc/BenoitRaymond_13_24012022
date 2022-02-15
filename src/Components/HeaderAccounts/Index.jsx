import React, { useState } from 'react';
import './Index.css'
import { useDispatch, useSelector } from 'react-redux';
import { editUserData } from '../../Redux/GetUserData/actionGetUserData';

function HeaderAccounts() {

    const userDataInLocaleStorage = JSON.parse(localStorage.getItem('userData')) || ''
    const userDataInRedux = useSelector(state => state.userData)
    const userData = userDataInLocaleStorage ?  userDataInLocaleStorage : userDataInRedux

    const connexionResponseApiInLocaleStorage = JSON.parse(localStorage.getItem('connexion')) || ''
    const tokenInLocaleStorage = connexionResponseApiInLocaleStorage.token || ''
    const tokenInRedux = useSelector(state => state.connection.token)
    const token = tokenInLocaleStorage ? tokenInLocaleStorage : tokenInRedux

    const [user, setUser] = useState({
        lastName: '',
        firstName: ''
    });
    const [editMode, setEditMode] = useState(false);
    const dispatch = useDispatch()

    const handleForm = (e, boolean) => {
        e.preventDefault();
        dispatch(editUserData(token, user))
        setEditMode(boolean)
    }

    const handleToggler = (e, boolean) => {
        e.preventDefault()
        setEditMode(boolean)
    }

    const displayHeader = !editMode ? (
        <>
            <h1>Welcome back<br/>{userData.firstName} {userData.lastName} !</h1>
            <button className='accountHeader-editButton' onClick={(e) => handleToggler(e, true)}>Edit Name</button>
        </>
    ) : (
        <>
            <h1>Welcome back</h1>
            <form onSubmit={e => {handleForm(e, false)}}>
                <div className='accountHeader-Input'>
                    <input type="text" placeholder={userData.firstName} value={user.firstName} onChange={e => setUser({...user, firstName: e.target.value})}/>
                    <input type="text" placeholder={userData.lastName} value={user.lastName} onChange={e => setUser({...user, lastName: e.target.value})}/>
                </div>
                <div className='accountHeader-buttons'>
                    <button type='submit' className='accountheader-buttons-buttonSave'>Save</button>
                    <button className='accountheader-buttons-buttonEdit' onClick={(e) => handleToggler(e, false)}>Cancel</button>
                </div>
            </form>
        </>
    )
    

    return (
        <div className='accountHeader'>
            {displayHeader}
        </div>
    );
}

export default HeaderAccounts;
