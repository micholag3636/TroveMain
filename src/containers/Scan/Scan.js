import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {processBarcode, startScanning} from '../../store/actions/index'
import Spinner from '../../components/Spinner/Spinner'
import Scanner from '../../components/Scanner/Scanner.js'
import Product from '../../components/Product/Product'
import Popup from "../../components/Product/Popup.js"
import './Scan.css'
import thunk from "redux-thunk"
import {Link} from "react-router-dom"
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import MapIcon from '@material-ui/icons/Map';
import Scantwo from "./Scantwo.js"
import axios from "axios"


// Component which controls then barcode scanner
class Scan extends Component {

  constructor(props){
    super(props);
    this._onBarcodeDetect = this._onBarcodeDetect.bind(this)
    this.getLocation = this.getLocation.bind(this)
    this.err = this.err.bind(this)

    
   


    this.state ={
      lat: 1,
      long: 2,
      s: <Spinner />,
      loc: <div className="scannerCam">
    <Scanner item={this.props.productScanned}
      click={this.props.startScanning}
      onBarcodeDetect={this._onBarcodeDetect} 
noCamera={()=>console.log('there was no camera')}
/>


  </div>,
  er:<div className="geoerror">
  <img src="https://i.imgur.com/0YiA354.png"/>

  
</div>

    }

   
   
  

   
  }

  _onBarcodeDetect(barcode){
    this.props.process(barcode)
  }



  

 

  
  componentDidMount(){
    this.getLocation()
   
 

  
      
    
  
    }
  
  
  

    
   
 
   err() {
    this.setState({s:<Scanner />})
   


  }


  getLocation(){


    const getCoordinates = (position) => {
      this.setState({lat: position.coords.latitude})
      this.setState({long: position.coords.longitude})
   
     
      console.log(this.state.lat)
      console.log(this.state.long)
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






  






 
  render() {





   

    


    
    let componentRendered = 
    
      <Fragment>
      
        
        
       
      </Fragment>

    if(this.props.invalid){
      componentRendered =
      <Fragment>
        <div className='divMargin'>
          <div className='invalid'>
            <h1>Failed To Scan!</h1>
          </div>
          <button 
            type="button" 
            onClick={this.props.startScanning}
            className="btn btn-primary btn-md btn-block btn-scan">
              {'Try Again'}</button>
        </div>
      </Fragment>
    } else if(this.props.noApi){
      componentRendered =
      <Fragment>
        <div className='divMargin'>
          <div className='invalid'>
            <h1>You need an API key to run this App.</h1>
          </div>
          <button 
            type="button" 
            onClick={this.props.startScanning}
            className="btn btn-primary btn-md btn-block btn-scan">
              {'Try Again'}</button>
        </div>
      </Fragment>
    }


    if(this.props.scan){


        componentRendered = this.state.loc

        
       
          
    if(this.props.spinner){


      componentRendered = this.state.s
      setTimeout(() =>{
       
     
        this.setState({s: <div className="scannerCam">
          <Scanner item={this.props.productScanned}
                              click={this.props.startScanning}
                              onBarcodeDetect={this._onBarcodeDetect} 
          noCamera={()=>console.log('there was no camera')} />
      </div>});


      },4000)
  
     
        
    


   
    }
  }
  

    if(this.props.productScanned != null){
      if(this.props.scan) {
        componentRendered = componentRendered = <div className="scannerCam">
        <Scanner 
          onBarcodeDetect={this._onBarcodeDetect} 
          />
      </div>
  
                  
       
      } else {

        componentRendered =
        setTimeout(() => {console.log(this.props.thisItem)



          



{this.props.thisItem.map((scannedItem, i) => {

  const Data = {
   name: scannedItem.product_name,
   image: scannedItem.product_image,
 
   barcode: scannedItem.barcode_number,
 
   description: scannedItem.description,
   latitude: this.state.lat,
   longitude: this.state.long
  }
 
 
 
 
  
 axios.post("https://trove-p-default-rtdb.europe-west1.firebasedatabase.app/" + ".json", Data).then(response => {
   console.log(response)
 })
 
 
 
 
 
 
 
  
 
 })
 
 

     
    
    }
  

  
  
    
        
        
        
        
        
        
        
        
        },2000)
       
        this.props.startScanning()
       
 
      
  
      
      }
    
console.log("Done")


      





   
    
  
    
    
}
          
  
    return (
      <div>
     
     
       
      <Fragment>

        <div className="scannerContainer"> 
          { this.state.lat === 1? setTimeout(() => {this.state.er},500): componentRendered

          
          }
          

        
        </div>
      </Fragment>
      </div>
    
    );
  
  }
  
  
  


}





const mapStateToProps = (state, ownProps) => {
  return {
    productScanned: state.scanned.productScanned,
    spinner: state.scanned.spinner,
    scan: state.scanned.startScanning,
    invalid: state.scanned.invalidBarcode,
    noApi: state.scanned.noApi,
    scannedItems: state.scanned.scannedItems,
    selectedItem: state.scanned.productScanned,
       thisItem: state.scanned.thisItem
  }


}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    process: (barcode) => { dispatch(processBarcode(barcode)) },
    startScanning: () => {dispatch(startScanning())}

}
}
  
    




export default connect(mapStateToProps, mapDispatchToProps)(Scan)