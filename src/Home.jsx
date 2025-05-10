import { useState } from "react"

function Home(){
  const [number, setNumber] = useState(0)
  function increaseNumber(){
    setNumber(number + 1)
  }
  function decreaseNumber(){
    setNumber(number - 1)
  }
  return (
    <>
    <h1>{number}</h1>
    <button onClick={increaseNumber}>+</button>
    <button onClick={decreaseNumber}>-</button>
   
    </>
  )
}
export default Home
