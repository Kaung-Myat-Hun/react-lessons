import { CartContext } from "../../../App"
import { useContext } from "react"

function View() {
  const { cart , dispatch} = useContext(CartContext)
  return (
    <>
      {cart.length !== 0 ? (
        <div>
          <button onClick={()=>{
            dispatch({
              type: "clear",
              payload: ""
            })
          }}>Clear</button>
        {cart.map((item, index)=>(
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={()=>{
              dispatch({
                type: "remove",
                payload : item
              })
            }}>Remove</button>
          </div>
        ))}
      </div>
      ) : (
        <h1>Cart is empty</h1>
      )}
    </>
  )
}

export default View