import {useEffect, useState} from 'react'

function UseEffectComponent() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState([])
  const sizeHandler = () =>{
    console.log("resizing");
  }
  useEffect(() =>{
    console.log("useEffect start"); // componentDidMount + update
    // fetch("https://jsonplaceholder.typicode.com/users")
    // .then((res)=> res.json())
    // .then((resData) => {
    //   console.log(resData, "response data", count);
    //   setData(resData)
    // }).catch(err => console.log(err))
    window.addEventListener("resize", sizeHandler ) // mounting state
    return () => {
      // unMounting state
      // api fetch
      window.removeEventListener("resize", sizeHandler ) // unmounting state
    }
  }, [count]) // <<< 
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={()=>{
        setCount(count +1)
      }} >Increment</button>
      {/* {data.map((item) => (
        <h2 key={item.id}>{item.name}</h2>
      ))} */}
    </>
  )
}

export default UseEffectComponent