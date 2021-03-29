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


//Class to display books contained in database
class Books extends Component{
    constructor(props){
        super(props);

        this.state={
            //Data will be stored in the results state
            results:[],
            selectedBook: null
        }
    }


    //On the inital Page load thid will get book data from the database

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

    
    

    render(){

        //Map through each book and get its image, name and barcode
        return(
            <div className="themainbooks">
                <div className="all-book">

                 <h1>All Books</h1>


                  </div>
                  
            <div className="books-sect">
                
              
                {this.state.results.map((result, i) => {

                    return(
                        <div>
                 
                    <BookDisplay
                    barcode={result.barcode}
         
                    
                    image={result.image}
                    name={result.name}
                    

                    
                    />


                  
                    </div>
                    
                    )
                })}


            </div>
            <div className="books-nav">
       
            <Link className="special" id="scan-item" to="/main"><h3><HomeIcon /></h3></Link>
        
            </div>
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
