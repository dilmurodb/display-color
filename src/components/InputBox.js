import React from 'react'

const InputBox = ({ color, setColor }) => {
  return (
    <div className="input-box">
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="Add color name" />
    </div>
  )
}

export default InputBox