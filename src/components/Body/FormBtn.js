import React from 'react'

export default function FormBtn(props) {

  const handleRemoveWhite= ()=>{
    console.log(props.text);
    let newText = props.text.split(/[ ]+/);
    props.setText(newText.join(' '));
  }

  const handleUPclick = ()=> {
    if(props.text === props.text.toUpperCase()){
      return;
    }else{
      // console.log(props.mode);
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

  const handleCopyText = () => {
    var text = document.getElementById("myTextBox");
    navigator.clipboard.writeText(text.value);
  }

  const handleClearclick = () => {
    props.setText('');
  }

  let btnState;
  // const [btnState, setbtnState] = useState("btn-primary")
  if(props.mode === "dark"){
    btnState = "btn-primary";
  }
  else{
    btnState = "btn-outline-primary"
  }

  return (
    <>
        <span>
          <button className={`btn ${btnState}`} onClick={handleUPclick}>
              Convert to Uppercase
          </button>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          <button className={`btn ${btnState}`} onClick={handleLOWclick}>
            Convert to Lowercase
          </button>
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          <button className={`btn ${btnState}`} onClick={handleRemoveWhite}>
            Remove Whitespace
          </button>
        </span>

        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>
          <button className={`btn ${btnState}`} onClick={handleCopyText}>
            Copy Text
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