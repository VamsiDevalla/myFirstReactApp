import React from 'react'
import './Person.css'

const person = (props) => {
    return(
        <div className="Person">
         <h1 onClick={props.click}>This is {props.name}</h1>
         <input onChange={props.changed} value={props.name}/>
         <p>{props.children}</p>
        </div>
    )
} 
 
export default person