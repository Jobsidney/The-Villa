import React from 'react'

function Button({word,classN,link}) {
  return (
    <button type="button" className={classN}>
        <a href={link}>{word}</a>
    </button>
    
  )
}

export default Button