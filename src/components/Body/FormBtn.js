import React from 'react'

export default function FormBtn(props) {

  const handleRemoveWhite= ()=>{
    console.log(props.text);
    props.setText(props.text.split(' ').join(''));

  }

  const handleUPclick = ()=> {
    if(props.text === props.text.toUpperCase()){
      return;
    }else{
      props.setText(props.text.toUpperCase())
    }
  }

  const handleLOWclick = () => {
    if(props.text === props.text.toLowerCase()){
      return;
    }else{
      props.setText(props.text.toLowerCase())
    }
  }

  const handleClearclick = () => {
    props.setText('');
  }

  return (
    <>
        <span>
          <button className="btn btn-primary" onClick={handleUPclick}>
              Convert to Uppercase
          </button>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          <button className="btn btn-primary" onClick={handleLOWclick}>
            Convert to Lowercase
          </button>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          <button className="btn btn-primary" onClick={handleRemoveWhite}>
            Remove Whitespace
          </button>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          <button className="btn btn-danger" onClick={handleClearclick}>
            Clear
          </button>
        </span>
    </>
  )
}