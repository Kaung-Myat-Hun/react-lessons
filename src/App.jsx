import "./App.css";
import AddToCart from "./components/AddToCart/cart";
import { createContext , useReducer } from "react";
import { itemData } from "./components/AddToCart/items/data";

export const CartContext = createContext();
function App() {
  let initialCart = []
  const reducer = (state , action) =>{
    switch (action.type) {
      case "add":{
        return [...state, action.payload]
      }
      case "remove": {
        const filteredData = state.filter((item) => item !== action.payload)
        return filteredData;
      }
      case "clear":{
        return initialCart;
      }
    }
  }
  const [cart, dispatch] = useReducer(reducer, initialCart)
  return (
    <div>
      <CartContext.Provider value={{itemData, cart , dispatch}}>
        <AddToCart />
      </CartContext.Provider>
    </div>
  );
}

export default App;
