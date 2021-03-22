import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'



import Navigation from './components/Navigation/Navigation'
import Scan from './containers/Scan/Scan'
import History from './containers/History/History'
import Main from "./containers/Main/Main.js"
import Books from "./containers/Books/Books.js"
import Signup from "./containers/Authentication/Signup.js"
import Login from "./containers/Authentication/Login.js"
import './App.css';
import { connect } from "react-redux"

class App extends Component {



  render(){
    let routes = (
      <Switch>
        <Route exact path='/history' component={History}/>
        <Route exact path='/scan' component={Scan}/>
        <Route exact path='/' component={Main}/>
        <Route exact path='/books' component={Books}/>

      </Switch>
    )
    const user = this.props.change
    return (
      <div>
    <BrowserRouter>
      <div className="bkg">
        <div className="container">

        {!user ? (
          <div>
<Route exact path="/">
  <Signup />
  </Route> 
  <Route exact path='/login' component={Login}/>

  </div>
  ) : (
    <div>


        
          {routes}
          </div>
  )}
        

        </div>
      </div>
    </BrowserRouter>
    </div>
  )};
}

const mapStateToProps = (state) => {
  return {
    change: state.change
  }
}


export default connect(mapStateToProps)(App)
