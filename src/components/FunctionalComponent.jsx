import {useState} from 'react'

function FunctionalComponent({name}) {
  // console.log(React);
  const [count, setCount] = useState(0)
    //   get     set
  const countHandler = () =>{
    setCount(count + 1)
  }
  console.log(count);
  return (
    // <h1>Name : {name}</h1>
    <>
      <h1>Count : {count}</h1>
      <button onClick={countHandler}>add one</button>
    </>
  )
}

export default FunctionalComponent