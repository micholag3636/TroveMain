
import React,{useState} from 'react'
import fire from "../../fire.js"
import { connect } from "react-redux"
import { toTrue } from "../../store/configStore.js"
import "./Login.css"
import {Link} from "react-router-dom"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
 

 


function Login(props) {


    
    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => {
                props.toTrue()
            }

        }
    }


    const [email,setEmail] = useState("")
        const [password,setPassword] = useState("")

        function login(e){
            e.preventDefault();
            fire.auth().signInWithEmailAndPassword(email,password)
            .then(response => props.toTrue())
            .catch((error) => {
                console.log(error)
            })

           
            

        }




    return (
        <div>
              <div className="login">
            <div className="login__logo">

             

                <form onSubmit={login}>
                <div id="formbo">

                  
  <input value={email}  onChange={(e) => {setEmail(e.target.value)}} placeholder="Email"type="text" id="lname" name="fname"/>

  
  <input value={password}  onChange={(e) => {setPassword(e.target.value)}} placeholder="Password" type="text" id="lname" name="fname"/>
  

  <button type="submit" id="lbut"> Log In</button> 
  <StyledFirebaseAuth
  className="authother2"

uiConfig={uiConfig}
firebaseAuth={firebase.auth()}
/>


  </div>
 <h5 id="signupfor"><Link id="links" to="/">Sign Up For Trove</Link></h5> 
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