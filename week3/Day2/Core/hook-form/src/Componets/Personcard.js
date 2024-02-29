import React from 'react'
import {useState} from 'react';
const Personcard = () => {
    const [firstname, setFirstname] = useState ("");
    const [lastname, setLastname] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [confirm, setConfirm] = useState ("");
return(
    <>
    <div className="mx-auto" style= {{width: 400}}>
        <form action="">
            <div className='mb-3'>
                <label className="form-label">First Name</label>
                <input type="text" className='form-control'onChange={(e)=> setFirstname(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label className="form-label">Last Name</label>
                <input type="text"className='form-control' onChange={(e)=> setLastname(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label className="form-label">Email</label>
                <input type="text" className='form-control' onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label className="form-label">Password</label>
                <input type="text" className='form-control' onChange={(e)=> setPassword(e.target.value)}/>
            </div>
            <div className='mb-3'>
                <label className="form-label">Confirm Password</label>
                <input type="text" className='form-control' onChange={(e)=> setConfirm(e.target.value)}/>
            </div>
            </form>
    </div>
        <div className='card'>
            <div className='card-body'>
            <p>First Name: {firstname}</p>
            <p>last Name: {lastname} </p>
            <p> Email: {email} </p>
            <p> password: {password} </p>
            <p>confirm {confirm} </p>
            </div>
        </div>
    </>


)
}
export  default Personcard
