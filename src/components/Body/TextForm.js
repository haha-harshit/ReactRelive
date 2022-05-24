import React, {useState} from 'react'
import FormBtn from './FormBtn'

export default function TextForm(props) {

  let readTime = 0;
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }
  const [text, setText] = useState("");

  if(text.trim().split(" ").length ===0){
    readTime = 0;
  }else{
    readTime = 0.008 * text.trim().split(" ").length;
  }

  let w_count = 0;
  if(text.trim().split(" ").length === 0){
    w_count = 0;
  }else{
    w_count = text.trim().split(" ").length
  }

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
        <p>Word count: {w_count}, Characters: {text.length}</p>
        <p>{readTime} Minutes read</p>
        <p><span>Text Preview: </span>{text.length>0?text:"Enter text to preview!"}</p>
      </div>
    </>
  )
}
