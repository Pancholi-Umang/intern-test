import React from 'react'
import './First.css'

function First() {
  return (
    <div className='mainpagediv'>
        <div className="whiteElem">
            <div className="upper">
                <input type="text" className='inpt' placeholder='Article name or Keywords' />
                <button className='btnr'>Search</button>
            </div>
            <div className="lower">
            </div>
        </div>
    </div>
  )
}

export default First