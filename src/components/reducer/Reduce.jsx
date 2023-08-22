import {useReducer} from 'react'
// import Wallpaper from "../../../public/image.png"

function Reduce() {
  let initialCount = 0;
  const reducer = (state , action) =>{
    switch(action.type) {
      case "increment" : {
        return state + action.payload;
      }
      case "decrement" : {
        return state - action.payload;
      }
      default : {
        return state;
      }
    }
  }
  const [count , dispatch] = useReducer(reducer , initialCount)
  return (
    <>
      <h1>Count - {count}</h1>
        <button onClick={()=>{
          dispatch({
            type: "increment",
            payload : 1
          })
        }}>increment</button>
        <button onClick={()=>{
          dispatch({
            type: "decrement",
            payload: 1,
          })
        }}>Decrement</button>
        <button onClick={()=>{
          dispatch({
            type: "increment",
            payload: 5,
          })
        }}>Increment 5</button>
        {/* <img src={Wallpaper} alt="" /> */}
    </>
  )
}

export default Reduce