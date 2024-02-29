import './App.css';
import React from 'react';
import {useState} from 'react';

const App = () => {
  const [firstname, setFirstname] = useState ("");
  const [lastname, setLastname] = useState ("");
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");
  const [confirm, setConfirm] = useState ("");
return(
  <>
  <div className="mx-auto" style= {{width: 400}}>
      <form onSubmit={() => {}}>
          <div className='mb-3'>
              <label className="form-label">First Name</label>
              <input type="text" className='form-control ' onChange={(e)=> setFirstname(e.target.value)}/>
          </div>
          <div id="lastnameHelpBlock" className="form-text">
          {firstname.length < 2 ? <p>First Name must be at least 2 characters</p> : null}
          </div>
          <div className='mb-3'>
              <label className="form-label">Last Name</label>
              <input type="text"className='form-control' onChange={(e)=> setLastname(e.target.value)}/> 
          </div>
          <div id="lastnameHelpBlock" className="form-text">
          {lastname.length < 2 ? <p>Last Name must be at least 2 characters</p> : null}
          </div>
          <div className='mb-3'>
              <label className="form-label">Email</label>
              <input type="text" className='form-control' onChange={(e)=> setEmail(e.target.value)}/>
          </div>
          <div id="emailHelpBlock" className="form-text">
          {email.length < 6 ? <p> Email must be at least 6 characters</p> : null}
          </div>
          <div className='mb-3'>
              <label className="form-label">Password</label>
              <input type="text" className='form-control' onChange={(e)=> setPassword(e.target.value)}/>
          </div>
          {password.length < 8 ? <p>Password must be at least 8 characters</p> : null}
          <div className='mb-3'>
              <label className="form-label">Confirm Password</label>
              <input type="text" className='form-control' onChange={(e)=> setConfirm(e.target.value)}/>
          </div>
          <div id="passwordHelpBlock" className="form-text">
          {confirm !== password ? <p>Passwords must match</p> : null}
          </div>
          </form>
  </div>
  </>
)
}

export default App;
