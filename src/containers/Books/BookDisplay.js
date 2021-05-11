import React from 'react'
import "./Books.css"
import {Link} from "react-router-dom"




class BookDisplay extends React.Component {
    constructor(props) {
      super(props);
      this.state = {lat2:1,
        long2: 2,
    
    
    
    
    
    };


    this.getLocation = this.getLocation.bind(this)
        this.getDist = this.getDist.bind(this)
       
    }



    


  
    getLocation(){


        const getCoordinates = (position) => {
          this.setState({lat2: position.coords.latitude})
          this.setState({long2: position.coords.longitude})
       
         
          console.log(this.state.lat2)
          console.log(this.state.long2)
        }
       
           
       
      
    
    
     
    
        const handleLocationError = (error) =>{
    
          switch(error.code){
            case error.PERMISSION_DENIED:
              alert("Please Turn On GeoLocation To Use This App")
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
        
      
    
    
        if (navigator.geolocation) {
    
    
    
    
          
     
    
          navigator.geolocation.getCurrentPosition(getCoordinates, handleLocationError)
        } else {
           alert("Geolocation is not supported by this browser.");
        }
    
        
    
    
    
      }

     
    




   getDist(lat1,lon1,lat2,lon2,barcode,imae,name) {
    function deg2rad(deg) {
        return deg * (Math.PI/180)
      }




        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
      
       
        
        return console.log(d)
        
        
        
      }
      ComponentDidMount(){

        this.getDist(this.state.lat2,this.state.long2,this.props.latitude,this.props.longitude)
     
      }
      
    
    render() {



      return ( 


    
        
          
          
          
          
          <div className="books-box">
            
     



     <div className="image-box">
 <img  id="displaybookofbooks" src={this.props.image} />  
      </div>
    
     
    
  </div>)
    }
  }

  export default BookDisplay