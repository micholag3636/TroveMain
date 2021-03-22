import React from 'react'
import "./Main.css"
import {Link} from "react-router-dom"
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"


function Map(){
    return(
        <GoogleMap defaultZoom={10} defaultCenter={{lat: 34.597042, lng: -13.061010}}
        
        />

    )



}

const WrappedMap = withScriptjs(withGoogleMap(Map))



function Main() {
    return (
        <div className="main">

            <div id="map-box">
            <WrappedMap googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCBhwfufHb9hz9LrymTMK_Sy9BH9gCh2_c"} 
            loadingElement={<div style={{height: "100%"}}></div>}
            containerElement={<div style={{height: "100%"}}></div>}
            mapElement={<div style={{height: "100%"}}></div>}
            
            />
            </div>








            <nav className="nav-bot">
            <Link  id="scan-item" to="/scan"><h3>Scan</h3></Link>
            <Link  id="scan-item" to="/history"><h3>History</h3></Link>
            <Link  id="scan-item" to="/books"><h3>Books</h3></Link>

            </nav>
            
        </div>
    )
}

export default Main
