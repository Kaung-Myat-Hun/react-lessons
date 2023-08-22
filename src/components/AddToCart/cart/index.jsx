import { useContext } from "react"
import { CartContext } from "../../../App"
import View from "../view"

function AddToCart() {
  const {itemData , dispatch} = useContext(CartContext)
  return (
    <div style={{display: "flex"}}>
      <div>
        {itemData.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button onClick={()=>{
              const AddData ={
                id: Math.random(),
                ...item
              }
              dispatch({
                type: "add",
                payload: AddData
              })
            }}>+</button>
          </div>
        ))}
      </div>
      <View />
    </div>
  )
}

export default AddToCart