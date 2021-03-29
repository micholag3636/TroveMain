import {APIKEY, URL_PATH, URL_EXTENSION} from '../../assets/config'

// Redux actions
export const startScanning = () => {
  return {
    type: "START_SCANNING"
  }
}

export const clearScanned = () => {
  return {
    type: 'CLEAR_SCANNED'
  }
}

export const setItem = (i) => {
  return {
    type: 'SET_ITEM',
    payload: i
  }
}

export const deleteItem = (i) => {
  return {
    type: 'DELETE_ITEM',
    payload: i
  }
}

export const processBarcode = (barcode) => {
  return async dispatch => {
    dispatch(spinnerOn())
    
    let url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + barcode;
    
    let req = new Request(url)
    
    let product = null
    await fetch(req)
    .catch(err => console.log('error', err))
  
    .then(res => {
      console.log(res)
      if(res.status !== 200){
        return {
          resStatus: res.status
        }
      } else if(res.status === 200) {
        return res.json()
      }
    })
    .then(res => {
       {
        product = {
          barcode_number: res.items[0].id,
          product_name: res.items[0].volumeInfo.title,
          product_image: res.items[0].volumeInfo.imageLinks.smallThumbnail,
          category: res.items[0].volumeInfo.categories[0],
          description: res.items[0].volumeInfo.description,
        }
        dispatch(productDetected(product))
      

      } 
      
    })
  }
  }

export const spinnerOn = () => {
  return {
    type: 'SPINNER_ON'
  }
}
  
  
export const productDetected = (product) => {
  return {
    type: 'PRODUCT_DETECTED',
    payload: product
  }
}

export const invalidBarcode = (err) => {
  let errText = err === 'noAPI' ? 'NO_API_KEY' : 'INVALID_BARCODE'
  return {
    type: errText,
  }
}