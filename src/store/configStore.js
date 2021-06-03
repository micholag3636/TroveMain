
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import scannedItems from './reducers/scannedItems'






// Initial value of redux state
const isLoggedIn = false



function saveToLocalStorage(state){
  try{
    const serializedState = JSON.stringify(state)
    localStorage.setItem("state", serializedState)
  } catch(e){
    console.log(e)
  }



}

function loadFromLocalStorage(){
  try{
    const serializedState = localStorage.getItem("state")
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch(e){
    console.log(e)
    return undefined
  }





}




// Redux to true action
export const toTrue = () =>{
  return{
    type:"toTrue"

  }

}


// Redux to false action
export const toFalse = () =>{
  return{
    type:"toFalse"

  }

}




// Reducer which sets redux state value to true when user signs up for the app

const loc = false
const change = (state = isLoggedIn, action) => {

  switch(action.type){

    case "toTrue": 
    return state = true


    case "toFalse":
      return state = false
      

      default: 
      return state = state




  }



}

 

export const toLocation = () =>{
  return{
    type:"toLocation"

  }

}



const changeloc = (state = loc,action) => {

  switch(action.type){

    case "toLocation": 
    return state = true
      

      default: 
      return state = state




  }



}













const rootReducer = combineReducers({
  scanned: scannedItems,
  change: change,
  changeloc: changeloc
 
})

const persistedState = loadFromLocalStorage()


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose



const store = createStore(rootReducer,persistedState,composeEnhancers(applyMiddleware(thunk)))


store.subscribe(() => saveToLocalStorage(store.getState()))

export default store
