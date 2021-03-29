import React from 'react'
import "./Books.css"
import {Link} from "react-router-dom"

function BookDisplay(props) {

    //What the user will see when they go to the books page of the application
    return (
    
        <div className="books-box">
      
      
           <div className="image-box">
            <img src={props.image} />
            </div>
           
           
      
        </div>
    )
}

export default BookDisplay
