import React from 'react'

export default function About(props) {

    // style state
    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // flag state for button- dark/light mode 
    // const [isDark, setisDark] = useState(false);

    // text state for dark/light mode
    // const [btnText, setbtnText] = useState("Enable Dark Mode");

    // const darkModeOnClick = () => {
    //     if(isDark){
    //         setbtnText("Enable Dark Mode");
    //         setmyStyle({color: 'black', backgroundColor: 'white'})
    //         setisDark(false);
    //     }else{
    //         setbtnText("Enable Light Mode");
    //         setmyStyle({color: 'white', backgroundColor: 'black'})
    //         setisDark(true);
    //     }
    // }

    let colour = props.mode==='dark'?'white':'black';
    let bgColor = props.mode==='dark'?'rgb(52, 53, 53)':'white'

    return (  
        <>
            <div className="container" style={{color: colour}}>
            <h1 className='my-4'>About Us</h1>
            <div  className="accordion" id="accordionExample">
                <div  className="accordion-item">
                    <h2  className="accordion-header" id="headingOne">
                        <button  className="accordion-button" style={{color: colour, backgroundColor: bgColor}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne"  className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div  className="accordion-body" style={{color: colour, backgroundColor: bgColor}}>
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div  className="accordion-item">
                    <h2  className="accordion-header" id="headingTwo">
                        <button  className="accordion-button collapsed" style={{color: colour, backgroundColor: bgColor}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo"  className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div  className="accordion-body" style={{color: colour, backgroundColor: bgColor}}>
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div  className="accordion-item">
                    <h2  className="accordion-header" id="headingThree">
                        <button  className="accordion-button collapsed" style={{color: colour, backgroundColor: bgColor}} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree"  className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div  className="accordion-body" style={{color: colour, backgroundColor: bgColor}}>
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            </div>
{/* 
            <span className='material-icons-outlined'>dark_mode</span> */}

            {/* <button id='darkMode' type="button" className="btn btn-primary my-2 mx-2" onClick={darkModeOnClick}>{btnText}</button> */}

            {/* <img src="dark-moon.png" alt="" />  */}

        </>
  )
}
