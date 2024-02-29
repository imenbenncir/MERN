import React from 'react'

function UserForm (props) {
    const{ firstName, lastname, email, password,confirm } = props
return (
        <div className='card'>
            <div className='card-body'>
            <p>First Name: {firstName}</p>
            <p>last Name: {lastname} </p>
            <p> Email: {email} </p>
            <p> password: {password} </p>
            <p>confirm {confirm} </p>
            </div>
        </div>
        )
}
export  default UserForm
