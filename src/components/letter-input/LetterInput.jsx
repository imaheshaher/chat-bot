import React from 'react'
import './letter-input.css'
const LetterInput = () => {
  return (
    <div className='letter-input'>
      <div className='letter-text'>Write Your Lovely Letter</div>
      <div className='input-area'>
        <textarea className='text-area'/>
      </div>
      <div className='send-letter'>
        <button className='send-letter-btn'>Send Letter</button>
      </div>
    </div>
  )
}

export default LetterInput