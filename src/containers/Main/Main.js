import React from 'react'
import "./Main.css"
import {Link} from "react-router-dom"

function Main() {
    return (
        <div className="main">




            <nav className="nav-bot">
            <Link  id="scan-item" to="/scan"><h3>Scan</h3></Link>
            <Link  id="scan-item" to="/history"><h3>History</h3></Link>
            <Link  id="scan-item" to="/books"><h3>Books</h3></Link>

            </nav>
            
        </div>
    )
}

export default Main
