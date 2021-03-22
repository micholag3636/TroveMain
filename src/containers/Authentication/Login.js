
import React,{useState} from 'react'
import fire from "../../fire.js"
import { connect } from "react-redux"
import { toTrue } from "../../store/configStore.js"
import "./Login.css"
import {Link} from "react-router-dom"

 


function Login(props) {


    const [email,setEmail] = useState("")
        const [password,setPassword] = useState("")

        function login(e){
            e.preventDefault();
            fire.auth().signInWithEmailAndPassword(email,password)
            .then(response => props.toTrue())

           
            

        }




    return (
        <div>
              <div className="login">
            <div className="login__logo">

                <img id="llogoimg" src="https://w7.pngwing.com/pngs/184/147/png-transparent-facebook-computer-icons-social-media-social-networking-service-scalable-graphics-facebook-f-logo-white-background-facebook-lite-logo-angle-text-website-thumbnail.png"  />



                <form onSubmit={login}>
                <div id="formbo">

                  
  <input value={email}  onChange={(e) => {setEmail(e.target.value)}} placeholder="Email"type="text" id="lname" name="fname"/>

  
  <input value={password}  onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" type="text" id="lname" name="fname"/>
  

  <button type="submit" id="lbut"> Log In</button> 


  </div>
 <h5 id="signupfor"><Link id="links" href="/">Sign Up For Facebook</Link></h5> 
   </form>
   



              

      
            </div>
           
            
        </div>
           
            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
  
      toTrue: () => {dispatch({type: "toTrue"})}
     
  
     
     
    }
  }





  export default connect(null, mapDispatchToProps)(Login)