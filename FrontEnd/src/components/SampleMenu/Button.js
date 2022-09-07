import React from 'react'
import {Link} from 'react-router-dom'

function Button({word,classN,link}) {
  return (
        <button type="button" className={classN}>
          <Link to="">{word}</Link>
        </button>

    
  )
}

export default Button