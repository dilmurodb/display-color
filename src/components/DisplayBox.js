import React from 'react'
import '../App.css';

const DisplayBox = ({ color }) => {
  return (
    <div className="display-box" style={{'background-color': color}}><p>{color ? color : 'Empty Value'}</p></div>
  )
}

export default DisplayBox