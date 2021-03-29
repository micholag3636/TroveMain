import React from 'react'
import "./Product.css"
import {Link} from "react-router-dom"
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import HistoryIcon from '@material-ui/icons/History';
import AddIcon from '@material-ui/icons/Add';
import HomeIcon from '@material-ui/icons/Home';



function added() {
    return (
        <div>
            <div className="shelfpage">
            <h1>Your Book Has Succesfully Been Added To The Library</h1>
            <img className="imgshelf" src="https://i.imgur.com/EjwBLh5.png" />
            </div>

           






            <nav id="addednav" className="nav-bot">
            <Link  id="scan-item" to="/main"><h3><HomeIcon /></h3></Link>
            <Link   id="scan-item" to="/history"><h3><HistoryIcon /></h3></Link>
            <Link  id="scan-item" to="/books"><h3><LibraryBooksIcon /></h3></Link>

            </nav>
           
            
        </div>
    )
}

export default added
