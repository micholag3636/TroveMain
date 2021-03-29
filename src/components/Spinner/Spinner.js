import React from 'react'
import './Spinner.css'

//Controls spinner animation when user scans a book


export default () => {
  return (
    <div className='spinnerContainer'>

    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
