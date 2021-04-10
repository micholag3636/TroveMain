import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'


import Nav from "./components/Navigation/Nav.js"

import Scan from './containers/Scan/Scan'
import History from './containers/History/History'
import Main from "./containers/Main/Main.js"
import Books from "./containers/Books/Books.js"
import Signup from "./containers/Authentication/Signup.js"
import Login from "./containers/Authentication/Login.js"
import './App.css';
import { connect } from "react-redux"
import added from "./components/Product/added.js"

class App extends Component {




  
  constructor(props){
    super(props);

    this.state={
        //Data will be stored in the results state and selectedBook keeps track of each book on the map
       
        toggle: false

    }
}



  render(){
    // Routes to all the pages on the App
    let routes = (
      <Switch>
             <Route exact path='/added' component={added}/>
        <Route exact path='/history' component={History}/>
        <Route exact path='/scan'  component={Scan}/>
        <Route exact path='/books'  component={Books}/>
        <Route exact path='/' component={Main}/>
        <Route  exact path='/main' component={Main}/>
        
        

      </Switch>
    )
    const user = this.props.change
    return (
      // Condition which tracks if user is logged In
      <div className="apswidth">
    <BrowserRouter>
      <div className="bkg">
        <div className="l">

        {!user ? (
          <div>
<Route exact path="/">
  <Signup />

  </Route> 
  <Route exact path='/main' component={Login}/>

 

  </div>
  ) : (
    <div>
      <Nav/>


        
          {routes}
          </div>
  )}
        

        </div>
      </div>
    </BrowserRouter>
    </div>
  )};
}
//Getting redux state
const mapStateToProps = (state) => {
  return {
    change: state.change
  }
}


export default connect(mapStateToProps)(App)
