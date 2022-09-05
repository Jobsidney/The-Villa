import React from 'react'

function Button({word,classN}) {
  return (
    <button type="button" className={classN}>
        <a href="./assets/html/main_menu.html">{word}</a>
    </button>
    
  )
}

export default Button