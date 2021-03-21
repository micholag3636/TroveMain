import React, { Component, Fragment } from 'react'
import {Link} from "react-router-dom"
import './Product.css'
import axios from "axios"
class Product extends Component {
  render() {


   const postDataHandler = (e)=>{
      e.preventDefault()
      const Data = {
        name: this.props.item.product_name,
        image: this.props.item.product_image,
      
        barcode:this.props.item.barcode_number,
    
        description: this.props.item.description

      }

      axios.post("https://trove-p-default-rtdb.europe-west1.firebasedatabase.app/" + ".json", Data).then(response => {
        console.log(response)
      })




    }
    return (
      <Fragment>
        <div>

         

          <div className="product-img">
        
             
             <img src={this.props.item.product_image} />
       


          </div>
        <table className="table table-striped">
          <tbody>
            <tr>
              <td>Barcode Number</td>
              <td>{this.props.item.barcode_number}</td>
            </tr>
            <tr>
              <td>Product Name</td>
              <td>{this.props.item.product_name}</td>
            </tr>
          
            <tr>
              <td>Category</td>
              <td>{this.props.item.category}</td>
            </tr>
            <tr>
              <td>Description</td>
              <td>{this.props.item.description}</td>
            </tr>
          </tbody>
        </table> 



        <div className="product-nav">
        <button 
          onClick={this.props.click ? this.props.click : this.props.view}
         id="scan-again2"  className=" btn-secondary  btn-scan-again">{this.props.click ? 'Scan Again' : 'View History' }</button>

         <button  onClick={postDataHandler}id="scan-again2">Add To Libary</button>
         <Link   id="scan-item" to="/history"><h3>History</h3></Link>
         </div>
        </div>

      </Fragment>
    )
  }
}

export default Product

