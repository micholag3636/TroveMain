
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import scannedItems from './reducers/scannedItems'


const isLoggedIn = false



export const toTrue = () =>{
  return{
    type:"toTrue"

  }

}

export const toFalse = () =>{
  return{
    type:"toFalse"

  }

}

const change = (state = isLoggedIn,action) => {

  switch(action.type){

    case "toTrue": 
    return state = true


    case "toFalse":
      return state = false
      

      default: 
      return state = state




  }



}

 












const rootReducer = combineReducers({
  scanned: scannedItems,
  change: change
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
