import {useContext} from 'react'
import { CartContext } from '../../App'
function Cart() {
  const {item, setItem} = useContext(CartContext)

  const data = [
    {
      id: 1,
      name: "phone",
      prce: 200
    },
    {
      id: 2, 
      name: "boost",
      prce: 200
    },
    {
      id: 3,
      name: "hat",
      prce: 200
    }
  ]
  return (
  <>
    {data.map((list) => (
      <div key={list.id}>
        <h2>{list.name}</h2>
        <button onClick={()=>{
          setItem([...item, list])
        }}>+</button>
      </div>
    ))}
    </>
  )
}

export default Cart