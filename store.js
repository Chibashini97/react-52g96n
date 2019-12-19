import React,{createContext,useMemo,useReducer} from 'react'


const StoreContext = createContext();

function useStore(){
  const store = React.useContext(StoreContext);
  if(!store){
    throw new error('error');
  }
  return store;
}

function StoreProvider(props){
  const [state, dispatch] = useReducer(reducer, globalState);
  const value = useMemo(() => ({state,dispatch}),[state]);
  return <StoreContext.Provider value={value}/>
}


export {StoreProvider,useStore}