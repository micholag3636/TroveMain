import React, { Component, Fragment } from 'react'
import Quagga from 'quagga'
import MapIcon from '@material-ui/icons/Map';
import {connect} from 'react-redux'
import {clearScanned, setItem, deleteItem} from '../../store/actions/index'
import {Link} from "react-router-dom"
import './Scanner.css'


// Quagga js api used to scan the book barcodes

class Scanner extends Component {
 


  constructor(props){
    super(props);
    this.state ={
      lat: 1,
      long: 2,

      //State which controls the scanner based on if a camera is present
   
      nocamera: false
    }

    this.onDetect = this.onDetect.bind(this)
  }



/*

  const Data = {
    name: props.item.product_name,
    image: props.item.product_image,
  
    barcode: props.item.barcode_number,

    description: props.item.description,
    latitude: lat,
    longitude: long
   



  }
  */


  componentDidMount(){
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector("#barcodeScan"),
        constraints: {
          height: "490",
          width: "790"
        
      
         
        
        
        },
        numberOfWorkers: navigator.hardwareConcurrency,
        target: document.querySelector('#barcodeScan')
      },
      locate: true,
      decoder: {

        //Controls type of barcode being scanned
        readers: ["code_128_reader", "ean_reader", "ean_5_reader"]
      }
    }, function (err) {
      if (err) {
        return 
      }
      Quagga.start()
    })
    Quagga.onDetected(this.onDetect)
   
    
  }

  onDetect(res){
    console.log(res.codeResult.code)






       
          
      /*

  const Data = {
    name: scannedItem.product_name,
    image: scannedItem.product_image,
  
    barcode: scannedItem.barcode_number,

    description: scannedItem.description
   


  }

  */

 
  


 


  




 
 /*
  <tr key={i}>
        <th scope="row">{i+1}</th>
        <td>{scannedItem.barcode_number}</td>
        <td>{scannedItem.product_name}</td>
        <td>{scannedItem.manufacturer}</td>
        
        <td><button 
              onClick={()=>this.props.deleteItem(i)}
              type="button" 
              className="btn btn-sm btn-danger">Remove</button></td>
      </tr>
      */

  Quagga.stop()


   
  
       
  
  Quagga.offProcessed()






  

      

  this.props.onBarcodeDetect(res.codeResult.code)






      
        

        
        

  

  }

  render() {

  
    return (
      <div className="scansbox">
     
     <Fragment>
      <div id="barcodeScan"> 

<img src="https://i.postimg.cc/85fFDRhK/Screenshot-147-1-removebg-preview.png" className="onscanner"></img>





</div>
<nav id="addedna">
    <Link  id="scansmap" className="openbookofscan" to="/"><MapIcon className="mapicon" />Map</Link>
 
  
   

    </nav>




   
        
    
     
    









      
           
        
      </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Scanner)