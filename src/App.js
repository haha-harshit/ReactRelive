import { useState } from 'react';
import './App.css';
import TextForm from './components/Body/TextForm';
import About from './components/Navbar/About';
import NavBar from './components/Navbar/NavBar';

function App() {


  let [darkMode, setdarkMode] = useState("light")
  const toggleMode = () => {
    if(darkMode==="dark"){
      document.body.style.backgroundColor = "white"
      setdarkMode("light");
    }else{
      document.body.style.backgroundColor = "grey"
      setdarkMode("dark");

    }
  }
  return (
    <>
    <div className="app-body">

      <NavBar title="TextUtills" link="About" mode={darkMode} toggleMode={toggleMode}/>

      <div className="container">
        <TextForm heading ="Enter your text below" mode={darkMode}/>
      </div>

      <div className="container my-5">
        <About/>
      </div>
      
    </div>
    </>
  );
}

export default App;
