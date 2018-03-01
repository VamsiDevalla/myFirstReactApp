import React from 'react'

const person = (props) => {
    return(
        <div>
         <h1 onClick={props.click}>This is {props.name}</h1>
         <input onChange={props.changed} value={props.name}/>
         <p>{props.children}</p>
        </div>
    )
} 

export default person