import React, { Component, Fragment, useEffect } from 'react'
import Product from '../../components/Product/Product'
import {clearScanned, setItem, deleteItem} from '../../store/actions/index'
import fire from "../../fire.js"
import firebase from "firebase"
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';

import {connect} from 'react-redux'
import {Link} from "react-router-dom"

import './History.css'

//Component keeps track of user book scanning history in a session

class History extends Component {

  clickHandler = () => {
    console.log('asdf')
  }

  componentDidMount(){
    // clear the scannedItems of the state
    this.props.clearScanned()

   
  }



  
  


  render() {
    let scannedItems = 
          <div className="emptyHistory">
            <h1>You don't have scanned items on file.</h1>
          </div>

// render the table with all the scanned items info IF there is
if (this.props.scannedItems.length >= 1){

  scannedItems = 
  <div className='divHistory'>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">Barcode</th>
                <th scope="col">Book Name</th>
            
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>

              {this.props.scannedItems.map((scannedItem, i) => {
                return (
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
                  )}
                  )}










            </tbody>
          </table>
        </div>

    }
    
  
    
  // render selected item    
  if(this.props.selectedItem){
    scannedItems = 
    <div className='scannerContainer'>
      <Product 
        item={this.props.selectedItem}
        view={this.props.clearScanned}/>
      
    </div>
  }




    return (<div> 
    
      <Fragment>
        {scannedItems}
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

export default connect(mapStateToProps, mapDispatchToProps)(History)