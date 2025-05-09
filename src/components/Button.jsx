import React from 'react'

const Button = (props) => {
    console.log("props",props)
  return (
    <button 
    onClick={() => props.switcher(props.id)}
    style={{backgroundColor: props.color}}
    className={props.on ? "on" : undefined}
    ></button>
  )
}

export default Button
