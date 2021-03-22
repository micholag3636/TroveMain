import React,{useState} from 'react'
import fire from "../../fire.js"
import { connect } from "react-redux"
import { toTrue } from "../../store/configStore.js"
import "./Signup.css"
import {Link} from "react-router-dom"

 
function Signup(props){


     

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [fname,setFname] = useState("")
    const [lname,setLname] = useState("")
    console.log(email)

    

        function signup(e){
            e.preventDefault();
            fire.auth().createUserWithEmailAndPassword(email,password)
            .then(response => props.toTrue())
            .catch((error) => {
                console.log(error)
            })
          
     
         
        }
        
   

    

    


   

 
    



return (
    <div className="login">
        <div className="login__logo">



            <form onSubmit={signup}>
            <div id="formbox">

                <h1 id="signup">Sign Up</h1>
                <h5 id="auser">Existing User? <Link to="/login"id="singl">Sign In</Link></h5>
                <div id="name">
           
                <input value={fname} onChange={(e) => {setFname(e.target.value)}}   placeholder="First name"type="text" id="hname" name="fname"/>

<input value={lname}  onChange={(e) => {setLname(e.target.value)}}    placeholder="Last name" type="text" id="hname" name="lname"/>
</div>

<input  value={email} onChange={(e) => {setEmail(e.target.value)}}  placeholder="Email"type="text" id="fname" name="fname"/>


<input  onChange={(e) => {setPassword(e.target.value)}}  value={password} placeholder="Password" type="text" id="fname" name="fname"/>


<button id="buttonsup" type="submit">Sign Up</button>

</div>

</form>




          

  
        </div>
       
        
    </div>
)


}

const mapDispatchToProps = (dispatch) => {
return {

  toTrue: () => {dispatch({type: "toTrue"})}
 

 
 
}
}





export default connect(null, mapDispatchToProps)(Signup)
