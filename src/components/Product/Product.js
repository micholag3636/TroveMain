import React, { Component, Fragment } from 'react'
import './Product.css'
class Product extends Component {
  render() {
    return (
      <Fragment>
        <div>

          <div className="product-nav">
        <button 
          onClick={this.props.click ? this.props.click : this.props.view}
         id="scan-again2"  className=" btn-secondary  btn-scan-again">{this.props.click ? 'Scan Again' : 'View History' }</button>

         <button id="scan-again2">Add To Libary</button>
         </div>

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
        </div>
      </Fragment>
    )
  }
}

export default Product

