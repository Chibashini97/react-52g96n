import React, { Component } from 'react';
import styles from './style.css';
import LoginContainer from './LoginContainer';


const LoginDisplay =({
  isDoneAuthenticate,handleChangeEvent,changeEvent
}) =>{

    return(
      <div>
      <form>
      <div className="Decor">
          <div className="Log">LOGIN</div>
          <b>UserName:</b><br /><input type="text" name="name" onChange={e => handleChange(e.target.value)} />
          
          <br/>
          <b>Password:</b><br /><input type="password" name="password"  onChange={e => handleChange(e.target.value)}/>
         
          <br />
          <button  onClick={handleChangeEvent}>Submit</button>
      </div>
      </form>
      </div>
      
    )

  }

export default LoginDisplay