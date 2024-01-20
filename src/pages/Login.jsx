import React, { useState } from 'react'
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import '../../src/components/css/Login.css'
import login from '../assets/log.svg'
import '../../src/components/css/Login.css'
export const Login = () => {
    const [form, setform]=useState({
        emp_name:'',
        password:''
    })
    const submitHandler=(e)=>
    {
        e.preventDefault();
        setform({
            emp_name:'',
            password:'',

        })
        
    }
    const changeHandler=(e)=>
    {
        setform((prevState)=>
        ({
            ...prevState,
            [e.target.id]: e.target.value,
          }));
    }
  return (
    <>
    <div className="container">
    <div className="forms-container">
      <div className="signin-signup">
      <div>
    <form onSubmit={submitHandler} className="flex flex-col gap-2 sign-in-form">
            <h2 class="title">Sign In</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" value={form?.emp_name} id="emp_name" placeholder="Username" onChange={(e)=>changeHandler(e)}/>
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" value={form?.password} id="password" placeholder="Password" onChange={(e)=>changeHandler(e)}/>
            </div>
    
    <Button type="submit" label="Submit" class="btn solid"/>

    </form>
    </div>

     <p className="sign-up">Create a new account. <a href="/">sign up</a>
     </p>
      </div>
    </div>
    <div className="panels-container">

      <div className="panel left-panel">
          <div className="content">
              <h3>New here?</h3>
              <p className="para" style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
              <button className="btn transparent" id="sign-up-btn">Sign Up</button>
          </div>
          <img src={login} className="image" alt=""></img>
      </div>

     
    </div>
  </div>
   
  </>
  )
}
