import React, { Component, Fragment } from 'react'
import Quagga from 'quagga'
import {Link} from "react-router-dom"

import './Scanner.css'


// Quagga js api used to scan the book barcodes

class Scanner extends Component {


  constructor(props){
    super(props);
    this.state ={

      //State which controls the scanner based on if a camera is present
   
      nocamera: false
    }

    this.onDetect = this.onDetect.bind(this)
  }




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
    // console.log(res.codeResult.code)
    Quagga.stop()
    Quagga.offProcessed()
    this.props.onBarcodeDetect(res.codeResult.code)
  }

  render() {
    var w = window.innerWidth;
  var h = window.innerHeight;
  
    return (
     
     
      <Fragment>
        <div id="barcodeScan"> 

        <img src="https://i.postimg.cc/85fFDRhK/Screenshot-147-1-removebg-preview.png" className="onscanner"></img>
        
    
      </div>


     
    









      
           
        
      </Fragment>


      
    
    
    
     
  
     
    )
  }
}

export default Scanner