import React from 'react'
import FormBtn from './FormBtn'

export default function TextForm(props) {
  return (
    <>
      <br />
      <div className="mb-3">
        <br />
        <h2>{props.text}</h2>
        <label htmlFor="myTextBox" className="form-label"></label>
        <textarea className="form-control" id="myTextBox" rows="8"></textarea>
      </div>
      <FormBtn/>
    </>
  )
}
