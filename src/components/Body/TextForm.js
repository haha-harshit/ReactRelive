import React, {useState} from 'react'
import FormBtn from './FormBtn'

export default function TextForm(props) {

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState("");

  let colour = props.mode==='dark'?'white':'black';

  // text = "change text using this way" ---> wrong way to change text
  // setText("change this way") ---> right way to change text 
  return (
    <>
      <div className="container my-5" style={{color: colour}}>
        <h2>{props.heading}</h2>
        <label htmlFor="myTextBox" className="form-label"></label>
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'rgb(52, 53, 53)':'white', color: colour}} placeholder="Write or Paste text here..." value={text} onChange={handleOnChange} id="myTextBox" rows="8"></textarea>
        <br />

        <FormBtn text = {text} setText={setText} mode={props.mode} alert={props.alert} showAlert={props.showAlert}/>
      </div>

      <div className="container" style={{color: colour}}>
        <h3>Text Summary: </h3>
        <p>Word count: {text.split(/\s+/).filter((element) => {return element.length!==0}).length}, Characters: {text.length}</p>
        <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minutes read</p>
        <p><span>Text Preview: </span>{text.length>0?text:"Enter text to preview!"}</p>
      </div>
    </>
  )
}
