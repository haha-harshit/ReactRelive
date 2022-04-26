import React from 'react'

export default function FormBtn(props) {

  const handleUPclick = ()=> {
    if(props.text === props.text.toUpperCase()){
      return;
    }else{
      console.log(props.text.toUpperCase());
      // props.setText(JSON.stringify(props.text).toUpperCase());
      props.setText(props.text.toUpperCase())
      console.log("Uppercase was clicked");
    }
  }

  const handleLOWclick = () => {
    if(props.text === props.text.toLowerCase()){
      return;
    }else{
      props.setText(props.text.toLowerCase())
      console.log("Lowercase was clicked");
    }
  }

  return (
    <>
        <div>
          <button className="btn btn-primary" onClick={handleUPclick}>
              Convert to Uppercase
          </button>
        </div>
        <br />
        <div>
          <button className="btn btn-primary" onClick={handleLOWclick}>
            Convert to Lowercase
          </button>
        </div>
    </>
  )
}

// FormBtn.propTypes = 
//     {
//         low: PropTypes.string.isRequired,
//         link: PropTypes.string.isRequired
//     }
