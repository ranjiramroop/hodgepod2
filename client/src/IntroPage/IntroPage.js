import React from "react";
import "./IntroPage.css";


function Intro() {
    return(
        <div style={{backgroundColor: "#29323C", display: "flex", height: "100vh", width: "100%"}}>
            
            <div className="container" >
            
           

            <div className="row">
                <div className="col-sm-12">
                <h2 className="introH2">welcome to hodgepod, the leading curation content platform.</h2>
                </div>
            </div>
            
            <div className="row">
              
              <div className="col-sm-12">
              <img className="introLogo" src="https://i.imgur.com/Ff46e32.png" title="logo" />
              </div>
              
            </div>
        
             <div className="row">
            
              <div className="col-sm-12">
               <h4 className="loginLink"> login </h4>
               <h4 className="signupLink"> signup</h4>
              </div>
             </div>
             
         
         </div>
         
        </div>
    )
}


export default Intro;