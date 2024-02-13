import React, { useEffect, useState } from 'react'
import { auth, provider } from './Auth'
import { signInWithPopup } from "firebase/auth";
import Admin from './Admin';
import { useNavigate } from 'react-router-dom';

function Sign() {
    const [value, setValue] = useState('')
    const navigate = useNavigate();
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("email", data.user.email)
            navigate('/admin');
            alert('Login Successfully')


        })
    }

    useEffect(() => {
        setValue(localStorage.getItem('email'))
    })

    return (
        <div>
            <button onClick={handleClick} className='items-center flex mx-auto p-2 my-10 border-2 border-gray-500 rounded-full shadow-lg'>
                <img className='w-5 h-5' src='google.png' alt='signinlogo' />
                <h4 className='font-semibold mx-1'>SignIn With Google</h4>
            </button>
        </div>
    )
}

export default Sign
