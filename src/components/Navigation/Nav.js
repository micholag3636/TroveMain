import React from 'react'
import {Link} from "react-router-dom"
import "./Navigation.css"

// This is the Navigation Bar for wider screens

function Nav() {
    return (
        <div className="Nav">
              <Link  id="scan-itemnav" to="/main"><h3>Home</h3></Link>
             <Link  id="scan-itemnav" to="/scan"><h3>Scan</h3></Link>
            <Link  id="scan-itemnav" to="/history"><h3>History</h3></Link>
            <Link  id="scan-itemnav" to="/books"><h3>Books</h3></Link>
          
            
        </div>
    )
}

export default Nav
