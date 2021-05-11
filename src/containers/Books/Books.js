import React, {Component} from 'react'
import "./Books.css"
import axios from "axios"
import BookDisplay from './BookDisplay.js'
import {Link} from "react-router-dom"
import HistoryIcon from '@material-ui/icons/History';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import {connect} from 'react-redux'
import Product from '../../components/Product/Product'
import {clearScanned, setItem, deleteItem} from '../../store/actions/index'
import PostAddIcon from '@material-ui/icons/PostAdd';
import MapIcon from '@material-ui/icons/Map';
import Spinner from '../../components/Spinner/Spinner'
import Main from "./Mains.js"
import {WrappedMap} from "./Mains.js"


//Class to display books contained in database





class Books extends Component{
    constructor(props){

  


        

        super(props);
      

        this.state={
            //Data will be stored in the results state
            results:[],
            selectedBook: null,
            loading: false,
            input: "",
            lat:1,
            long: 2,
            on: false,
            lat2: 1,
            long2: 2,
            d: null,
        }
        this.getLocation = this.getLocation.bind(this)
        

       /*
      
        this.getDistanceOneToOne = this.getDistanceOneToOne.bind(this)
        */
      
     
       
     



      

        



        const handleChange = (e) =>{
            e.preventDefault()
            this.setState({input: e.target.value})
    
        }
    
    


    }


    //On the inital Page load this will get book data from the database

    
    componentDidMount(){
        this.getLocation()
        this.setState({loading: true})
        setTimeout(() => {
            this.setState({loading: false})
        }, 2000)


        
        
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
            this.setState({loading: true})
            console.log(this.state.results)

            if(this.state.input.length > 0){
               this.setState({results:  fetchedResults.filter((i) => {
                    return i.name.match(input)})
                })
    
            }

          

        })





      

            
        
    





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

     
    
      /*


       async getDistanceOneToOne(lat1, lng1, lat2, lng2)
      {
         const Location1Str = lat1 + "," + lng1;
         const Location2Str = lat2 + "," + lng2;
  
         let ApiURL = "https://maps.googleapis.com/maps/api/distancematrix/json?";
  
         let params = `origins=${Location1Str}&destinations=${Location2Str}&key=${AIzaSyCBhwfufHb9hz9LrymTMK_Sy9BH9gCh2_c}`; // you need to get a key
         let finalApiURL = `${ApiURL}${encodeURI(params)}`;
  
         let fetchResult =  await fetch(finalApiURL); // call API
         let Result =  await fetchResult.json(); // extract json
  
         return console.log(Result.rows[0].elements[0].distance);
      }
      */      
     

    render(){


        





        



  

    

        //Map through each book and get its image, name and barcode
        return(


<div>
    {this.state.on ?  <div className="main">
            

            <div id="map-box">
            
                
            <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCBhwfufHb9hz9LrymTMK_Sy9BH9gCh2_c"} 
            loadingElement={<div style={{height: "100%"}}></div>}
            containerElement={<div style={{height: "100%"}}></div>}
            mapElement={<div style={{height: "100%"}}></div>}
            lat={this.state.lat}
            long={this.state.long}
            
            />
            </div>






         
            
        </div> : 

            
      
         
            <div className="themainbooks">


                
                
            


                <div className="all-book">

                 <h1>Books</h1>

                
                 </div>
               
                
                  
            <div className="books-sect">




           
              
                {this.state.results.map((result, i) => {
                  /*
                       {this.getDistanceOneToOne(this.state.lat2,this.state.long2,result.latitude,result.longitude)}
                       */
                   
                    
                    
               
                    

                    return(
                   
                        <div >

                            {this.state.loading ?  <Spinner /> :
                            
                 
                            <button className="bookbut" onClick={() => {
                                this.setState({lat: result.latitude})
                                this.setState({long: result.longitude})
                                setTimeout(() =>{

                                    this.setState({on: true})
       
     
                                   console.log(this.state.lat)
                                   console.log(this.state.long)
                            
                                  },100)
                               
                              }}>
                              


                                
                            

                              <BookDisplay
        barcode={result.barcode}


        
        image={result.image}
        name={result.name}
        d={this.state.d}
        latitude={result.latitude}
        longitude={result.longitude}
        
        

        
        /> 
                    
                    




                        
                    </button>
                  
                
                    
                        
                   


                            }
                            
                  
                    
                    </div>
                        
                    
                    )
                         
                })}
                


            </div>
        
            <nav className="openbookbox">
              <Link to="/main" className="openbook"><MapIcon className="themapbooks"/></Link>


              <Link to="/scan" className="openbook2"><PostAddIcon /></Link>
              
        
          </nav>
            </div>
    }
            </div>
        )



       
    }



 
 

}


const mapStateToProps = (state, ownProps) => {
    return {
      scannedItems: state.scanned.scannedItems,
      selectedItem: state.scanned.productScanned
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      clearScanned: () => { dispatch(clearScanned()) },
      setItem: (i) => { dispatch(setItem(i)) },
      deleteItem: (i) => { dispatch( deleteItem(i)) }
    }
  }





  

export default connect(mapStateToProps, mapDispatchToProps)(Books)
