import React,{createContext} from 'react'


const StoreContext = createContext();

function useStore(){
  const store = React.useContext(StoreContext);
  if(!store){
    throw new error('error');
  }
  return store;
}


export {useStore}