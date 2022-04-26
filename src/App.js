
import './App.css';
import TextForm from './components/Body/TextForm';
import NavBar from './components/Navbar/NavBar';
// const obj ={
//   hi: "link1",
//   ho: "link2"
// }

function App() {
  return (
    <>
    <div className="app-body">
      {/* NAVBAR COMPONENT */}
      <NavBar link="link1"/>
        
      <div className="container">
        {/* TEXT-FORM COMPONENT */}
        <TextForm heading ="Enter your text below"/>
        </div>
    </div>
    </>
  );
}

export default App;
