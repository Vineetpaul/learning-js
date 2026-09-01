import { useEffect, useRef, useState } from 'react'

const Refhook = () => {

    const [count, setCount] = useState(0)
    const inputRef = useRef(null);
    const timeInterval = useRef(null)


    const handleInput = () =>{
        inputRef.current.focus()
    };

    const handleCount = () =>{
        setCount(count + 1);
    }

    const startTimer = () => {
      if (timeInterval.current) return

      timeInterval.current = setInterval(() => {
        setCount((currentCount) => currentCount + 1);
      }, 1000)
    }

    const stopTimer = () => {
      clearInterval(timeInterval.current)
      timeInterval.current = null
    }

    useEffect(() => {
      return stopTimer
    }, [])

  return (
    <div>
      <input ref={inputRef} type='text' />
      <button onClick={handleInput}>Focus</button>

      <button onClick={handleCount}>Count</button>
      <p>{count}</p>

      <button onClick={startTimer}>Start timer</button>
      <button onClick={stopTimer}>Stop timer</button>
    </div>
  )
}

export default Refhook
