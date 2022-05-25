import React from 'react'
import {
    Link
  } from "react-router-dom";

import PropTypes from 'prop-types'

export default function NavBar(props) {
    let darkClass;
    let switchText = document.getElementsByClassName("form-check-label");
    if(props.mode === "dark"){
        darkClass = "navbar-dark bg-dark"
        switchText.innerHTML = "Day Mode"
    }else{
        darkClass = "";
        switchText.innerHTML = "Night Mode"
    }
  return (
      <>
        <nav className={`navbar navbar-expand-lg + ${darkClass}`} style={{backgroundColor:"#a2b9bc", position: "sticky", top: 0, width: '100%', zIndex:2}}>
        <div className="container-fluid">
        <Link className="navbar-brand" To="#">
            <b>{props.title}</b>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link active" aria-current="page" To="#">Home</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" To="/about">About</Link>
            </li>
            </ul>
            <form className="d-flex">
            <div className={`form-check form-switch + text-${props.mode==='dark'?'light':'dark'}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}></input>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{`Dark Mode`}</label>
            </div>

            {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button> */}
            </form>
        </div>
        </div>
        </nav>  
      </>
  )
}


// Act as an type-string?, int?, obj? check for props sent to the function
NavBar.propTypes = 
    {
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    }

    // when no Props are sent to function--- we can set some default props
NavBar.defaultProps = 
{
    title: "Set Title Here...",
    link: "Set Link Here..."
}   