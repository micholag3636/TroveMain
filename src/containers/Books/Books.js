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
import PostAddIcon from '@material-ui/icons/PostAdd';
import MapIcon from '@material-ui/icons/Map';


//Class to display books contained in database
class Books extends Component{
    constructor(props){

  


        

        super(props);
      

        this.state={
            //Data will be stored in the results state
            results:[],
            selectedBook: null,
            loading: false,
            input: ""
        }



      

        



        const handleChange = (e) =>{
            e.preventDefault()
            this.setState({input: e.target.value})
    
        }
    
    


    }


    //On the inital Page load this will get book data from the database

    
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
            this.setState({loading: true})
            console.log(this.state.results)

            if(this.state.input.length > 0){
               this.setState({results:  fetchedResults.filter((i) => {
                    return i.name.match(input)})
                })
    
            }

          

        })





      

            
        
    





    }

    
 


    

  



  
    
    

    render(){

    

        //Map through each book and get its image, name and barcode
        return(
            
      
         
            <div className="themainbooks">
                
            


                <div className="all-book">

                 <h1>Books</h1>

                
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
                    
                        
                   


        
                    
                    </div>)
                })}


            </div>
        
            <nav className="openbookbox">
              <Link to="/main" className="openbook"><MapIcon className="themapbooks"/></Link>


              <Link to="/scan" className="openbook2"><PostAddIcon /></Link>
              
        
          </nav>
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
