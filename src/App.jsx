import './App.css'
// import React, { useEffect } from 'react'
import Hi from './components/Hello'
import {Const} from './components/Const'
import Greet from './components/Greet'
import ClassComponent from './components/ClassComponent'
import Lifecycle from './components/Lifecycle'
import Apifetch from './components/Apifetch'
import Listrender from './components/Listrender'
import FormHandling from './components/FormHandling'
import Conditoin from './components/Conditoin'
import Styling from './components/Styling'
import TodoList from './components/TodoList'
import FunctionalComponent from './components/FunctionalComponent'
import Todo from './components/functional/Todo'
import {Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
    <div>
      <a href="/">Home</a>
      <br />
      <a href="/next-route">Todo</a>
    </div>
      <Routes>
        <Route path="/" element={<ClassComponent/>}></Route>
        <Route path="/next-route" element={<Todo/>}></Route>
        <Route path="/next-one" element={<FunctionalComponent/>}></Route>

        <Route path='*' element={<h1>404 Error </h1>}></Route>
      </Routes>
    </>
  )
}

export default App
