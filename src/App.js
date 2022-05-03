
import './App.css';
import TextForm from './components/Body/TextForm';
import About from './components/Navbar/About';
import NavBar from './components/Navbar/NavBar';

function App() {
  return (
    <>
    <div className="app-body">

      <NavBar title="TextUtills" link="About"/>

      {/* <div className="container">
        <TextForm heading ="Enter your text below"/>
      </div> */}

      <div className="container">
      <button type="button" className="btn btn-primary">Enable Dark Mode</button>
      </div>

      <div className="container my-5">
        <About/>
      </div>
      
    </div>
    </>
  );
}

export default App;
