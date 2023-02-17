import React from 'react'
import ReactDOM from 'react-dom'

function Footer(){
    return(    
        <footer>
           <ul>
                <li> <a href="#" ><img className="footer-icon" src="./images/twitter_icon.png"/></a></li>
                <li> <a href="https://www.facebook.com/stephanykleen" target="_blank" ><img className="footer-icon" src="./images/facebook_icon.png"/></a></li>
                <li> <a href="https://instagram.com/stephanykleen" target="_blank" ><img className="footer-icon" src="./images/instagram_icon.png"/></a></li>
                <li> <a href="https://github.com/shecodessk" target="_blank" ><img className="footer-icon" src="./images/github_icon.png"/></a></li>
            </ul> 
         </footer>     
    )
};

export default Footer