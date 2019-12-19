import React, {useState,useEffect} from 'react'
import {useStore} from './Store.js'
import Login from './Login'


const LoginContainer = () =>{
  const{
    state : {authentication : login},
    dispatch,
    }=useStore();
    const {history} = props;

    useEffect(()=>{
      loadWelcome(dispatch);
    },[]);

    useEffect(()=>{
      if(login.isDoneAuthenticate){
        history.push('/Logout')
      }
    },[])
}

