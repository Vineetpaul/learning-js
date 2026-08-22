// import React from 'react'
// import { useState } from 'react'

// const Counter = () => {
//     const [count, setCount] = useState(0)
//     function incCounter() {
//         setCount(count + 1)
//     }
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={incCounter}>Click</button>

//         </div>
//     )
// }

// export default Counter

import { useState } from 'react'
const Counter = () => {
    // const [count, setCount] = useState(0)
    // const [user, setUser] = useState({
    //     name:"Vineet",
    //     age:21,
    // })
    // function handleClick() {
    //     setCount(count + 1)

    // }
    // function chnageState(){
    //     setUser({
    //         ...user,
    //         age:22,
    //     })
    // }

    // Event handling in React

    const [name, setName] = useState("")

    function handleChange(event){
        // setName(setTimeout(()=>{
        //     // console.log(event.target)
        //     console.log(event.target.value)
        // },500))
        setName(event.target.value)
        console.log(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log("Form is submited")
    }

   



    return (
        <div>
            {/* <h1>{count}</h1>
            <button onClick={() => {
                handleClick();
            }}>CLick</button>

             <button onClick={chnageState}>CLick</button>
             <h1>{user.name}</h1>
             <h1>{user.age}</h1> */}

             {/* event handling in react */}

            
             <form onSubmit={handleSubmit}>
                 <input value={name} onChange={handleChange} placeholder='Enter name'></input>
                 <button onChange={handleChange}>Submit</button>

             </form>
             

        </div>
    )
}
export default Counter