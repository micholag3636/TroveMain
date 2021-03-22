import React, {Component} from 'react'
import "./Books.css"
import axios from "axios"
import BookDisplay from './BookDisplay.js'
import {Link} from "react-router-dom"

class Books extends Component{
    constructor(props){
        super(props);

        this.state={
            results:[]
        }
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
            this.setState({results:fetchedResults})
            console.log(this.state.results)

        })
    }

    render(){
        return(
            <div>
                <div className="all-books">
                  <h1>All Books</h1>
                  </div>
            <div className="books-sect">
              
                {this.state.results.map((result) => {

                    return(
                 
                    <BookDisplay
                    barcode={result.barcode}
         
                    
                    image={result.image}
                    name={result.name}
                    

                    
                    />
                    
                    )
                })}


            </div>
            <Link  id="scan-item" to="/scan"><h3>Scan</h3></Link>
            </div>
        )



       
    }




}

export default Books
