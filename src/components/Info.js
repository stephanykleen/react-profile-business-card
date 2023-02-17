import React from 'react'
import ReactDOM from 'react-dom'

function Info(){
    return(    
        <header>
            <img src="./images/profile.png" width="317px"/>
            <h1 className="headline-name">Stephany Kleen</h1>
            <h3 className="headline-role">Frontend Developer</h3>
            <a className="headline-link" href="https://fascinating-choux-34469c.netlify.app/">my portfolio</a>
            <div>
                <a href="mailto:stephanykleen@gmail.com" target="_blank" ><button className="email-button" type="button"><img src="./images/mail-icon.png" className="icon"/>Email</button></a>
                <a href="https://www.linkedin.com/in/stephanykleen/" target="_blank" ><button className="linkedin-button" type="button"><img src="./images/linkedin-icon.png" className="icon"/>LinkedIn</button></a>
             </div>
        </header>
    )
};

export default Info