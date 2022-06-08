import React, { useState } from 'react';

const UserForm = (props) => {
    const [userName, setUserName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [userNameError, setUserNameError] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    // const [hasBeenSubmitted, setHasbeenSubmitted] = useState(false)

    const validateUserName = e => {
        setUserName(e.target.value)
        if (e.target.value === '') {
            setUserNameError('')
        } else if (e.target.value.length < 2) {
            setUserNameError('User name must be at least 2 characters long')
        } else {
            setUserNameError('')
        }
    }

    const validateFirstName = e => {
        setFirstName(e.target.value)
        if (e.target.value === '') {
            setFirstNameError('')
        } else if (e.target.value.length < 2) {
            setFirstNameError('First name must be at least 2 characters')
        } else {
            setFirstNameError('')
        }
    }

    const validateLastName = e => {
        setLastName(e.target.value)
        if (e.target.value === '') {
            setLastNameError('')
        } else if (e.target.value.length < 2) {
            setLastNameError('Last name must be at least 2 characters')
        } else {
            setLastNameError('')
        }
    }

    const validateEmail = e => {
        setEmail(e.target.value)
        if (e.target.value === '') {
            setEmailError('')
        } else if (e.target.value.length < 5) {
            setEmailError('Email must be at least 5 characters')
        } else {
            setEmailError('')
        }
    }

    const validatePassword = e => {
        setPassword(e.target.value)
        if (e.target.value === '') {
            setPasswordError('')
        } else if (e.target.value.length < 5) {
            setPasswordError('Password must be at least 5 characters')
        } else {
            setPasswordError('')
        }
    }

    const confirmPasswordMatch = e => {
        setConfirmPassword(e.target.value)
        if (e.target.value === password) {
            setConfirmPasswordError('')
        } else {
            setConfirmPasswordError('Passwords do not match!')
        }
    }
    // const createUser = (e) => {
    //     e.preventDefault();
    //     const newUser = { userName, firstName, lastName, email, password, confirmPassword };
    //     console.log('Welcome', newUser);
    // };

    // const formMessage = () => {
    //     if (hasBeenSubmitted) {
    //         return "Thank you for submitting the form!";
    //     } else {
    //         return "Welcome. please submit the form";
    //     }
    // }

    return (
        <div className='m-5'>
            <form className='align-items-center'>
                {/* <h2>{formMessage}</h2> */}
                <div className='mb-2'>
                    <label className='col-sm-2 col-form-label'>Username: </label>
                    <input type='text' value={userName} onChange={validateUserName} />
                    <p>{userNameError}</p>
                </div>
                <div className='mb-2'>
                    <label className='col-sm-2 col-form-label'> First Name: </label>
                    <input type='text' value={firstName} onChange={validateFirstName} />
                    <p>{firstNameError}</p>
                </div>
                <div className='mb-2'>
                    <label className='col-sm-2 col-form-label'>Last Name: </label>
                    <input type='text' value={lastName} onChange={validateLastName} />
                    <p>{lastNameError}</p>
                </div>
                <div className='mb-2'>
                    <label className='col-sm-2 col-form-label'>Email Address: </label>
                    <input type='text' value={email} onChange={validateEmail} />
                    <p>{emailError}</p>
                </div>
                <div className='mb-2'>
                    <label className='col-sm-2 col-form-label'>Password: </label>
                    <input type='password' value={password} onChange={validatePassword} />
                    <p>{passwordError}</p>
                </div>
                <div className='mb-2'>
                    <label className='col-sm-2 col-form-label'>Confirm Password: </label>
                    <input type='password' value={confirmPassword} onChange={confirmPasswordMatch} />
                    <p>{confirmPasswordError}</p>
                </div>
                <input type='submit' value='Create User' />
            </form>
        </div>
    );
};

export default UserForm