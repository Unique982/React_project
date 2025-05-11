import { useEffect, useState } from "react"

function UseEffect(){
  const [number, setNumber] = useState(0)
  function inc(){
    setNumber(number +5)
  }
  function dec(){
    setNumber(number -5)
  }
  // type 1 
  useEffect(()=>{
console.log("useEffect Trigger type 1")
  },[])// fetch data form backend get localhost:3000/api/books

// type 2
  useEffect(()=>{
    console.log("useEffect Trigger type 2!")
  },[number])

// type 3 
useEffect(()=>{
  console.log("UseEffect trigger type 3")
})// execute every time eherever state change page load/ component load

  return(
    <>
    <h1>Use Effect</h1>
    <p>{number}</p>
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>
    </>
  )
}
export default UseEffect