import React, {useState, useEffect, Component} from 'react'
import "./Main.css"
import {Link} from "react-router-dom"
import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow} from "react-google-maps"
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HistoryIcon from '@material-ui/icons/History';
import AddIcon from '@material-ui/icons/Add';
import axios from "axios";
import BookDisplay from '../../containers/Books/BookDisplay.js'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import MenuIcon from '@material-ui/icons/Menu';
import PostAddIcon from '@material-ui/icons/PostAdd';
import {WrappedMap2} from "./Maintwo.js"

// Home page of App
class Map extends Component{


    

    constructor(props){

     

   




        super(props);

        this.state={
            //Data will be stored in the results state and selectedBook keeps track of each book on the map
            results:[],
            selectedBook: null,
            show: false,
            zoom: 6,
            lat: 55.3617609,
            long: -3.4433238,
            on: false,


        }
    
      


    //On the initial page load this will get book data from the firebase database
    this.toggleDiv = this.toggleDiv.bind(this)
    

    

}









  
    componentDidMount(){
        axios.get("https://trove-p-default-rtdb.europe-west1.firebasedatabase.app/" + ".json")
        .then(response => {
            console.log(response.data)
            const fetchedResults = [];
            for(let barcode in response.data){
                fetchedResults.unshift(
                    {
                        ...response.data[barcode],
                        id:barcode
                    }

                )
            }
            this.setState({results: fetchedResults})
            console.log(this.state.results)

        })
    }




    
    


    
  toggleDiv = () => {
        const {show} = this.state;
        this.setState({show: !show})
    }





 

    render(){
    return(

        <div>


        <div>




        <div>

  
        <div className="mainfull">
            <GoogleMap className="googlemapisapi" defaultZoom={this.state.zoom} defaultCenter={{lat:this.state.lat, lng: this.state.long}}
        
        >
             {this.state.results.map((result) => {return (
                <Marker className="imgob" key={result.key} position={{lat: result.latitude, lng: result.longitude}}
                
                onClick={() => {
                 

                    this.setState({selectedBook: result})
                    this.setState({lat: result.latitude})
                    this.setState({long: result.longitude})
                    this.setState({zoom: 18})
                 


                }}
             
                
                />

            )})}

            {this.state.selectedBook && (
                <InfoWindow  className="mapimgmap"  position={{lat: this.state.selectedBook.latitude, lng: this.state.selectedBook.longitude}}  onCloseClick={() => {
                    this.setState({selectedBook: null})
                }}>
                  
                   
                  <img className="mapimg" src={this.state.selectedBook.image} />
            

                </InfoWindow>

            )}
            
            
           
           
            </GoogleMap>
            </div>
         
    
    </div>






          


            </div>














          













       </div>


























        


           
       

 )
 

}}
            

















const WrappedMap = withScriptjs(withGoogleMap(Map))



class Main extends Component{
    constructor(props){
        super(props)


        this.getLocation = this.getLocation.bind(this)
        this.getDistanceFromLatLonInKm = this.getDistanceFromLatLonInKm.bind(this)
        this.deg2rad = this.deg2rad.bind(this)
        this.onChange = this. onChange.bind(this)
        this.doLat = this.doLat.bind(this)
        this.updateSearch = this.updateSearch.bind(this)
       
        this.state = {
            results: [],
            lat: null,
            long: null,
            on: false,
            lat1: 1,
            long1: 1,
            dist: null,
            size: "35vh",
            search: ""
        }
    }



    doLat(result){
    this.setState({lat: result.latitude})
    }
           


   getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return console.log(d);
  }
 deg2rad(deg) {
    return deg * (Math.PI/180)
  }
  
    
  onChange(d){
    this.setState({dist: d})
}

  
    getLocation(){


        const getCoordinates = (position) => {
          this.setState({lat1: position.coords.latitude})
          this.setState({long1: position.coords.longitude})
       
         
          console.log(this.state.lat1)
          console.log(this.state.long1)
        }


        
           
       
      
    
    
     
    
        const handleLocationError = (error) =>{
    
          switch(error.code){
            case error.PERMISSION_DENIED:
              console.log("Not on")
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



    

    componentDidMount(){
        this.getLocation()
        axios.get("https://trove-p-default-rtdb.europe-west1.firebasedatabase.app/" + ".json")
        .then(response => {
            console.log(response.data)
            const fetchedResults = [];
            for(let barcode in response.data){
                fetchedResults.unshift(
                    {
                        ...response.data[barcode],
                        id:barcode
                    }

                )
            }
            this.setState({results: fetchedResults})
            console.log(this.state.results)

        })
    }






    updateSearch(event){
        this.setState({search: event.target.value.substr(0,30)})
      }
  

    render (){

 
           
let filteredBooks = this.state.results.filter(
    (result) => {
      return result.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
    }
  
  
  )
  
          
    
   
  

        return (


        <div className="main">

{this.state.size === "35vh" ?
<div className="searchboxbox">
             <div className="searchbox">
             <i className="searchicon" class="fas fa-search"></i>
               
                 <input type="text"
               
                 placeholder="Search"
                 value={this.state.search}
                 onChange={this.updateSearch.bind(this)}
               />  
                
                 </div>
                 </div>

                 : console.log("Not Activated")}

            

<nav className="openbookbox">




              <button id="openbookbutid" className="butnav"  onClick={() => {this.state.size === "0vh" ? this.setState({size: "35vh"}) : this.setState({size: "0vh"})}} className="openbook"><LibraryBooksIcon /></button>


              <Link to="/scan" className="openbook2"><PostAddIcon /></Link>
              
        
          </nav>



{this.state.on ?  <div className="main">
            

            <div style={{height: this.state.size}} id="map-box1">
            
                
            <WrappedMap2 googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCBhwfufHb9hz9LrymTMK_Sy9BH9gCh2_c"} 
            loadingElement={<div style={{height: "100%"}}></div>}
            containerElement={<div style={{height: "100%"}}></div>}
            mapElement={<div style={{height: "100%"}}></div>}
            lat={this.state.lat}
            long={this.state.long}
            
            />
            </div>






         
            
        </div> : 


            

            <div style={{height: this.state.size}} id="map-box">
                

            
                
            <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCBhwfufHb9hz9LrymTMK_Sy9BH9gCh2_c"} 
            loadingElement={<div style={{height: "100%"}}></div>}
            containerElement={<div style={{height: "100%"}}></div>}
            mapElement={<div style={{height: "100%"}}></div>}
            
            />
            </div>

        }
            



            
            <div>



                
    
            <div className="booksidl" >
<h2 id="booksidl">Nearby Books</h2>
</div>






<div className="books-sect2">













{filteredBooks.map((result) => {

   


const deg2rad = (deg) => {
    return deg * (Math.PI/180)
  }
  


const getDistanceFromLatLonInKm2 = (lat1, lon1, lat2, lon2) => {
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
    return (


        <div key={result.key} >
        
        
        
        <div  key={result.key} >
        
        
        
        <div className="book4main">
        
        
        
        {d > 20 ? console.log("no") : 
        
        <button className="bookbut"
        
        onClick={() => {
            this.setState({lat: result.latitude})
            this.setState({long: result.longitude})
            this.setState({size: "35vh"})
            setTimeout(() =>{
        
                this.setState((prevState) => ({on: !prevState.on}))
                this.setState((prevState) => ({on: true}))
        
        
               console.log(this.state.lat)
               console.log(this.state.long)
        
              },100)
           
        }}>
                
        
        
        
        
        <BookDisplay
        key={result.key}
        
        
        image={result.image}
        name={result.name}
        
        
        
        />
        </button>
        }
        
        
        </div>
        
        
        
        
        </div>
        
        
        
        
        
        
        
        </div>
        )
        


  }
  return(

  getDistanceFromLatLonInKm2(this.state.lat1,this.state.long1,result.latitude,result.longitude)

  )




    }
    

    )
    
    }





</div>






</div>






    


    
         
            

            

        </div>
    
    )
}
}

export default Main

