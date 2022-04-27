import React, {useState} from 'react'
import FormBtn from './FormBtn'

export default function TextForm(props) {

  const handleOnChange = (event) => {
    console.log("On Change");    
    setText(event.target.value);
  }
  // const handleUPClick = () => {
  //   let newText = text.toUpperCase();
  //   setText(newText);
  // }
  const [text, setText] = useState("Write or Paste text here...");
  // text = "change text using this way" ---> wrong way to change text
  // setText("change this way") ---> right way to change text 
  return (
    <>
      <br />
      <div className="mb-3">
        <br />
        <h2>{props.heading}</h2>
        <label htmlFor="myTextBox" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myTextBox" rows="8"></textarea>
      </div>
      {/* <button className="btn btn-primary" onClick={handleUPClick}>HI</button> */}
      <FormBtn text = {text} setText={setText}/>
    </>
  )
}
