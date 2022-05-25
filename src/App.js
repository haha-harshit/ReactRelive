import React from 'react'
import { useState } from 'react';
import './App.css';
import Alert from './components/Body/Alert';
import TextForm from './components/Body/TextForm';
import About from './components/Navbar/About';
import NavBar from './components/Navbar/NavBar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default function App() {

  const [darkMode, setdarkMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(darkMode==="dark"){
      showAlert("Dark mode disabled!", 'success');
      document.body.style.backgroundColor = "#fff"
      setdarkMode("light");
    }else{
      showAlert("Dark mode enabled!", 'success');
      document.body.style.backgroundColor = "#484f4f"
      setdarkMode("dark");
    }
  }
  return (
    <>
    <Router>
      <div className="app-body">
        <NavBar title="myText" mode={darkMode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        
        <Switch>
          <Route path="/about">
            <div className="container my-5">
              <About mode={darkMode}/>
            </div>
          </Route>

          <Route path="/">  
            <div className="container" style={{zIndex:0}}>
              <TextForm heading ="Enter your text below" mode={darkMode} alert={alert} showAlert={showAlert}/>
            </div>
          </Route>

        </Switch>
      </div>
    </Router>
    </>
  );
}
