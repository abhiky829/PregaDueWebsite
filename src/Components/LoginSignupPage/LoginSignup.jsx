import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom'
import './LoginSignup.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { RiLockPasswordFill } from "react-icons/ri";
import { TfiEmail } from "react-icons/tfi";
import { BsFillPersonFill } from "react-icons/bs";




function LoginSignup(){
    // userStateVariable to add personality to signup page
    const [action,setAction] = useState("Sign Up");
    return(
        
            <div className='container'>
                <div className='header'>
                    <div className='text'>{action}</div>
                    <div className='underline'></div>
                </div>
            <div className='inputs'>
                {action==="Login"?<div></div>:
                <div className='input'>
                <div className='icon'><BsFillPersonFill/></div>
                <input type='text'placeholder='Name'></input>
                </div>
                }
                
                <div className='input'>
                <div className='icon'><TfiEmail/></div>
                <input type='email'placeholder='Email Id'></input>
                </div>
                <div className='input'>
                <div className='icon'><RiLockPasswordFill/></div>
                <input type='password' placeholder='Password'></input>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className='forgot-password'>Lost password? <span>Click Here!</span></div>}
            
            <div className='submit-container'>
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}} >Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}} >Login</div>
            </div>
            </div>
            
    )
}

export default LoginSignup;