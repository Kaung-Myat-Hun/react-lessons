import "./App.css";
// import React, { useEffect } from 'react'
import Hi from "./components/Hello";
import { Const } from "./components/Const";
import Greet from "./components/Greet";
import ClassComponent from "./components/ClassComponent";
import Lifecycle from "./components/Lifecycle";
import Apifetch from "./components/Apifetch";
import Listrender from "./components/Listrender";
import FormHandling from "./components/FormHandling";
import Conditoin from "./components/Conditoin";
import Styling from "./components/Styling";
import TodoList from "./components/TodoList";
import FunctionalComponent from "./components/FunctionalComponent";
import Todo from "./components/functional/Todo";
import UseEffectComponent from "./components/functional/UseEffect";
import ComponentA from "./components/context/ComponentA";
import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Cart from "./components/cart/Cart";
export const CartContext = createContext();


function App() {
  const [item, setItem] = useState([])
  return (
    <div>
      <h3>{item.length}</h3>
      <CartContext.Provider value={{item, setItem}}>
        <Cart></Cart>
      </CartContext.Provider>
      {item.map((item, index) => (
        <h3 key={index}>{item.name}</h3>
      ))}
    </div>
  );
}

export default App;
