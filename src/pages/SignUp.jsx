import React from 'react'
import { useState } from 'react'
import { Button } from 'primereact/button';
import '../../src/components/css/Login.css'
import register from '../assets/register.svg'
export const SignUp = () => {
    const [form, setform]=useState({
        emp_email:'',
        emp_name: '',
        password:'',

    })
    const submitHandler=(e)=>
    {
        e.preventDefault();
        setform({
            emp_email:'',
            emp_name: '',
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


    <div className="container container-left">
    <div className="forms-container">
      <div className="signup">
      <form  onSubmit={submitHandler} class="sign-up-form">
          <h2 class="title">Sign Up</h2>
          <div class="input-field">
            <i class="fas fa-user"></i>
            <input type="text" value={form.emp_name} id="emp_name" placeholder="Username" onChange={(e)=>changeHandler(e)} />
          </div>
          <div class="input-field">
            <i class="fas fa-envelope"></i>
            <input type="email" value={form.emp_email} id="emp_email" placeholder="Email" onChange={(e)=>changeHandler(e)}/>
          </div>
          <div class="input-field">
            <i class="fas fa-lock"></i>
            <input type="password" value={form.password} id="password" placeholder="Password" onChange={(e)=>changeHandler(e)}/>
          </div>
          <Button type="submit" label="Submit" class="btn solid"/>
        </form>
     <p className="sign-up">Already have an account ?<a href="/">Sign In</a>
     </p>
      </div>
    </div>
    <div className="panels-container">

      <div className="panel right-panel">
          <div className="content">
              <h3>One of us?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
              <button className="btn transparent" id="sign-in-btn">Sign In</button>
          </div>
          <img src={register} className="image" alt=""></img>
      </div>
    </div>
  </div>

  )
}
