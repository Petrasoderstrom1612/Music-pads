import React from 'react'

const Button = (props) => {
    console.log("props",props)
  return (
    <button 
    onClick={() => props.switcher(props.id)} //you need the id in callback function so that it does not trigger immediatelly and it needs to be there as argument from prop
    style={{backgroundColor: props.color}} //props color
    className={props.on ? "on" : undefined} //props on
    ></button>
  )
}

export default Button
