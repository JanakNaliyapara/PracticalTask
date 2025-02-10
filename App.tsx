import React from 'react'
import Router from './src/router'
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); 
LogBox.ignoreAllLogs();

const App = () =>{
   return(
          <>
         <Router/>
          </>
      )
}

export default App