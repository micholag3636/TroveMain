import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'



import Navigation from './components/Navigation/Navigation'
import Scan from './containers/Scan/Scan'
import History from './containers/History/History'
import Main from "./containers/Main/Main.js"
import './App.css';

class App extends Component {



  render(){
    let routes = (
      <Switch>
        <Route exact path='/history' component={History}/>
        <Route exact path='/scan' component={Scan}/>
        <Route exact path='/' component={Main}/>
      </Switch>
    )
    return (
    <BrowserRouter>
      <div className="bkg">
        <div className="container">

        
          {routes}

        </div>
      </div>
    </BrowserRouter>
  )};
}

export default App;
