import React, {useState,useEffect} from 'react'
import {useStore} from './Store.js'
import Login from './login'


const LoginContainer = () =>{
  const{
    state : {authentication : login},
    dispatch,
    }=useStore();
    const {history} = props;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    useEffect(()=>{
      loadWelcome(dispatch);
    },[]);

    useEffect(()=>{
      if(login.isDoneAuthenticate){
        history.push('/Logout')
      }
    },[]);

    const handleEvent = () =>{
      loadWelcome(dispatch);
    }

    const handleChange = ()=>{
      setUsername(username);
      setPassword(password);
      loadWelcome(dispatch);
    }
}

export default LoginContainer

