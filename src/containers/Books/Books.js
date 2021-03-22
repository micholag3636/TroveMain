import React, {Component} from 'react'
import "./Books.css"
import axios from "axios"
import BookDisplay from './BookDisplay.js'

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
        )



       
    }




}

export default Books
