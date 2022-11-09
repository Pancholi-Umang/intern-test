import React from 'react'
import Figma from './Figma'
import './Second.css'

function Second() {
  return (
    <div className='mainpagediv'>
      {/* <Figma /> */}
        <div className="whiteElem">
            <div className="upper">
                <input type="text" className='inpt' placeholder='Article name or Keywords' />
                <button className='btnr'>Search</button>
            </div>
            <div className="lower">
                <div class="loader"></div>
            </div>
        </div>
    </div>
  )
}

export default Second