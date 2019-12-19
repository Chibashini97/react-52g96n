import React, { Component } from 'react';
import styles from './style.css';


const LoginDisplay =({
  name,password,nameError,passwordError,isDoneAuthenticate
}) =>{

    return(
      <div>
      <form onSubmit={this.handleSubmit}>
      <div className="Decor">
          <div className="Log">LOGIN</div>
          <b>UserName:</b><br /><input type="text" name="name" onChange={this.handleChange} value={this.state.name}/>
          <div style={{color:'red'}}> {this.state.nameError} </div>
          <br/>
          <b>Password:</b><br /><input type="password" name="password"  onChange={this.handleChange} value={this.state.password}/>
          <div style={{color:'red'}}> {this.state.passwordError} </div>
          <br />
          <input type="submit" name="submit"/>
      </div>
      </form>
      </div>
      
    )

  }

export default LoginDisplay