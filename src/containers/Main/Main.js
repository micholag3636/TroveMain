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

// Home page of App
class Map extends Component{


    

    constructor(props){

     

   




        super(props);

        this.state={
            //Data will be stored in the results state and selectedBook keeps track of each book on the map
            results:[],
            selectedBook: null,
            show: false

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

  
        <div className="mainfull">
            <GoogleMap className="googlemapisapi" defaultZoom={10} defaultCenter={{lat: 55.3617609, lng: -3.4433238}}
        
        >
             {this.state.results.map((result) => {return (
                <Marker className="imgob" key={result.barcode} position={{lat: result.latitude, lng: result.longitude}}
                
                onClick={() => {

                    this.setState({selectedBook: result})


                }}
             
                
                />

            )})}

            {this.state.selectedBook && (
                <InfoWindow    position={{lat: this.state.selectedBook.latitude, lng: this.state.selectedBook.longitude}}  onCloseClick={() => {
                    this.setState({selectedBook: null})
                }}>
                   
            <img className="mapimg" src={this.state.selectedBook.image} />

                </InfoWindow>

            )}
            
            
           
           
            </GoogleMap>
            </div>
         
    
    </div>
    










    {this.state.show &&
                      <div className="booksidl" >
                      <h2 id="booksidl">Books</h2>
                      </div>}



                <div className="books-sect2">
                   
             


                 

              


        
        
          

            {this.state.results.map((result) => {

return(
    //Displays books on home page
    
  

<div>
{this.state.show && 

    
    <div>



<div className="book4main">
<BookDisplay
key={result.barcode}


image={result.image}
name={result.name}



/>
</div>

</div>



  }

</div>


)
})}
</div>


<nav className="openbookbox">
              <Link to="/books" className="openbook"><LibraryBooksIcon /></Link>


              <Link to="/scan" className="openbook2"><PostAddIcon /></Link>
              
        
          </nav>

          


            </div>
    
        


           
           

    )


             }
            }

const WrappedMap = withScriptjs(withGoogleMap(Map))



function Main() {
    return (
        <div className="main">
            

            <div id="map-box">
            
                
            <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCBhwfufHb9hz9LrymTMK_Sy9BH9gCh2_c"} 
            loadingElement={<div style={{height: "100%"}}></div>}
            containerElement={<div style={{height: "100%"}}></div>}
            mapElement={<div style={{height: "100%"}}></div>}
            
            />
            </div>






         
            
        </div>
    
    )
}

export default Main
