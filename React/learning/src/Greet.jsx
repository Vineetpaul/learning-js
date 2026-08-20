import React from 'react'

const Greet = ({ user, onClick}) => {
    const { name, age } = user
    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>age: {age}</h1>
            <button onClick={onClick}>Click Me</button>
        </div>
    )
}

export default Greet
