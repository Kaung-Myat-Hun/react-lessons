import './App.css'
import React from 'react'
// import Hi from './components/Hello'
// import {Const} from './components/Const'
import Greet from './components/Greet'
import ClassComponent from './components/ClassComponent'

function App() {
  // console.log(React , "this is react")
  return (
    <>
      {/* <h1>Hello React</h1>  */}
      {/* <Hi name="Bate Thar" age="27" address="Yangon"></Hi> */}
      {/*<Const></Const> */}
      <ClassComponent />
      <Greet></Greet>
    </>
  )
}

export default App
