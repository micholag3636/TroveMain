import React, { Component, Fragment, useEffect} from 'react'
import {useState} from "react"
import {Link} from "react-router-dom"
import './Product.css'
import axios from "axios"
import HistoryIcon from '@material-ui/icons/History';


// Component stores the book data after a user has scanned a book and pushes the books data to the users screen
function Product(props) {
  const [lat,setLat] = useState(1)
  const [long,setLong] = useState(2)






  

  
// Function which gets the users location to be displayed on the map
  const getLocation = () => {
    


    if (navigator.geolocation) {

      
 

      navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError)
    } else {
       alert("Geolocation is not supported by this browser.");
    }

  
          





  }


  // Sets the state to the users longitude and latitude
 const getCoordinates = (position) => {
   setLat(position.coords.latitude)
   setLong(position.coords.longitude)

  
   console.log(lat)
   console.log(long)

    


  


}

// Error handling if geolocation is not available for user

 const handleLocationError = (error) =>{

  switch(error.code){
    case error.PERMISSION_DENIED:
      alert("User denided the request for Geolocation")
      break;
      case error.POSITION.UNAVAILABLE:
        alert("Location information is unavailable")
        break;
        case error.TIMEOUT:
          alert("The request to get user location timed out")
          break;
          case error.UNKNOWN_ERROR:
            alert("An unknown error occured")
            break;
            default:
              alert("An unknown error occured")






  }

 }
  









  




    


 

 
  





   const postDataHandler = (e)=>{
     getLocation()
    e.preventDefault()
  
   


    


    

    

    




// Controls what data will be added to the database
      const Data = {
        name: props.item.product_name,
        image: props.item.product_image,
      
        barcode: props.item.barcode_number,
    
        description: props.item.description,
        latitude: lat,
        longitude: long
       



      }
    
// Posts data to firebase database
      axios.post("https://trove-p-default-rtdb.europe-west1.firebasedatabase.app/" + ".json", Data).then(response => {
        console.log(response)
    })

    }

 

    useEffect(() => {
      getLocation()

    },[])
        

    
    
    




    
    return (

      // All book data which will be displayed to the userr
      <Fragment>
        <div>

         

          <div className="product-img">
        
             
             <img src={props.item.product_image} />

             <div>





      <button id="buttonaddednav" className="fixp" onClick={postDataHandler
      }>  <Link id="addlink" to="/added" >Add To Library</Link> </button>
        


     



        </div>
       


          </div>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Barcode Number</td>
              <td>{props.item.barcode_number}</td>
            </tr>
            <tr>
              <td>Book Name</td>
              <td>{props.item.product_name}</td>
            </tr>
          
            <tr>
              <td>Category</td>
              <td>{props.item.category}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td id="descriptionbook">{props.item.description}</td>
            </tr>
          </tbody>
        </table> 

     




        <div className="product-nav">
        <button className="fixp"
          onClick={props.click ? props.click : props.view}
         id="scan-item"  >{props.click ? 'Scan Again' : 'View History' }</button>

      <button className="fixp" onClick={postDataHandler}id="scan-item">  <Link id="addlink" to="/added" >Add To Library</Link> </button>
         <Link className="fixp" id="scan-item" to="/history"><h3><HistoryIcon /></h3></Link>


     
         </div>
        </div>

      </Fragment>
    )
}
  

export default Product

