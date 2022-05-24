import React from 'react'

export default function Alert (props) {
  // const [showAlert, setshowAlert] = useState(null);
  // console.log(props.alert);
  
  // const style = {
  //   position: sticky
  // }

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" style={{position: 'fixed', width:'100%' ,zIndex:1}}>
      {props.alert.msg}
    </div>
  )
}
