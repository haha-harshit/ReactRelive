
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
    <div className="inp-form">
      <NavBar title="TEXTit" link="link1"/>
      <div className="container">
        <TextForm text ="Enter your text here..."/>
      </div>
    </div>
    </>
  );
}

export default App;
