import React, {useState} from 'react'
import FormBtn from './FormBtn'

export default function TextForm(props) {

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
        <textarea className="form-control" placeholder={text} id="myTextBox" rows="8"></textarea>
      </div>
      <FormBtn text = {text} setText={setText}/>
    </>
  )
}
