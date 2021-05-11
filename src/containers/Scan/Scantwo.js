import React, { Component, Fragment } from 'react'
import {connect} from 'react-redux'
import {processBarcode, startScanning} from '../../store/actions/index'
import Spinner from '../../components/Spinner/Spinner'
import Scanner from '../../components/Scanner/Scanner'
import Product from '../../components/Product/Product'
import Popup from "../../components/Product/Popup.js"
import './Scan.css'
import thunk from "redux-thunk"
import {Link} from "react-router-dom"
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HomeIcon from '@material-ui/icons/Home';
import HistoryIcon from '@material-ui/icons/History';
import MapIcon from '@material-ui/icons/Map';
import Scan from "./Scan.js"


// Component which controls then barcode scanner
class Scantwo extends Component {

  constructor(props){
    super(props);
    this._onBarcodeDetect = this._onBarcodeDetect.bind(this)
   
  

   
  }

  _onBarcodeDetect(barcode){
    this.props.process(barcode)
  }


  componentDidMount(){
  


  }
  




  
 
  render() {

    
    
    let componentRendered = 
      <Fragment>
        <div className='divMargin'>
          <button 
            type="button" 
            id="scanbutton"
            onClick={this.props.startScanning}
            className="btn btn-primary btn-md btn-block btn-scan">{'Scan'}</button>
        </div>
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
      componentRendered = <div className="scannerCam">
          <Scanner onBarcodeDetect={this._onBarcodeDetect} 
          noCamera={()=>console.log('there was no camera')} />
      </div>
    }
    if(this.props.spinner){
      componentRendered = <Spinner />
    }
    if(this.props.productScanned != null){
      if(this.props.scan) {
        componentRendered = <div className="scannerCam">
            <Scanner 
              onBarcodeDetect={this._onBarcodeDetect} 
              />
          </div>
      } else {
        componentRendered =<Scanner
        item={this.props.productScanned}
        click={this.props.startScanning}/>
      }
    }


    return (
      <div>
     
     
       
      <Fragment>

        <div className="scannerContainer"> 
          {componentRendered}
        
        </div>
      </Fragment>
      </div>


      
   
      
    
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    productScanned: state.scanned.productScanned,
    spinner: state.scanned.spinner,
    scan: state.scanned.startScanning,
    invalid: state.scanned.invalidBarcode,
    noApi: state.scanned.noApi
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    process: (barcode) => { dispatch(processBarcode(barcode)) },
    startScanning: () => {dispatch(startScanning())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scantwo)