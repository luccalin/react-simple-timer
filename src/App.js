import { useState, useRef } from "react"

const App = () => {
  const [now, setNow] = useState(null)
  const [starttime, setStarttime] = useState(null)

  const intervalRef = useRef()

  let seconds = 0.000
  if (now !== null && starttime !== null) {
    seconds = (now - starttime) / 1000
  }

  const startTimer = () => {
    setStarttime(Date.now())
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)
  }

  const stopTimer = () => {
    clearInterval(intervalRef.current)
  }

  const reset = () => {
    setNow(null)
    setStarttime(null)
  }
  return (
    <div>
      <p>{seconds.toFixed(3)}</p>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}

export default App