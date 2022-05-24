import { useState } from 'react';
import './App.css';
import Alert from './components/Body/Alert';
import TextForm from './components/Body/TextForm';
import About from './components/Navbar/About';
import NavBar from './components/Navbar/NavBar';

function App() {

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
      <div className="app-body">
      <NavBar title="myText" link="About" mode={darkMode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container" style={{zIndex:0}}>
        <TextForm heading ="Enter your text below" mode={darkMode} alert={alert} showAlert={showAlert}/>
      </div>

      <div className="container my-5">
        <About mode={darkMode}/>
      </div>
      
    </div>
    </>
  );
}

export default App;
