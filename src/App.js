import { useState } from 'react';
import './App.css';
import Alert from './components/Body/Alert';
import TextForm from './components/Body/TextForm';
import About from './components/Navbar/About';
import NavBar from './components/Navbar/NavBar';

function App() {

  const [darkMode, setdarkMode] = useState("light")
  const [alertText, setalertText] = useState(null)
  const toggleMode = () => {
    if(darkMode==="dark"){
      setalertText("Dark mode disabled!");
      document.body.style.backgroundColor = "#fff"
      setdarkMode("light");
    }else{
      setalertText("Dark mode enabled!");
      document.body.style.backgroundColor = "#484f4f"
      setdarkMode("dark");
    }
  }
  return (
    <>
    <div className="app-body">

      <NavBar title="TextUtills" link="About" mode={darkMode} toggleMode={toggleMode}/>
      <Alert alert={alertText}/>
      <div className="container">
        <TextForm heading ="Enter your text below" mode={darkMode}/>
      </div>

      <div className="container my-5">
        <About mode={darkMode}/>
      </div>
      
    </div>
    </>
  );
}

export default App;
