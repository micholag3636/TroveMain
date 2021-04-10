import React from 'react'
import "./Product.css"
import {Link} from "react-router-dom"
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HistoryIcon from '@material-ui/icons/History';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';
import MapIcon from '@material-ui/icons/Map';



function added() {
    return (
        <div className="addedbook">
            <div className="shelfpage">
            <h1>Your Book Has Succesfully Been Added To The Library</h1>
            <img className="imgshelf" src="https://i.imgur.com/EjwBLh5.png" />
            </div>

           






            <nav id="addednav">
            <Link  className="openbookofscan" to="/main"><MapIcon className="mapicon" /> Map</Link>
            <Link   id="openbookofscan2" className="openbookofscan" to="/scan"><AddIcon  /> </Link>
          
           

            </nav>
           
           
            
        </div>
    )
}

export default added
