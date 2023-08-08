import './App.css'
import React, { useEffect } from 'react'
// import Hi from './components/Hello'
// import {Const} from './components/Const'
import Greet from './components/Greet'
import ClassComponent from './components/ClassComponent'
import Lifecycle from './components/Lifecycle'
import Apifetch from './components/Apifetch'
import Listrender from './components/Listrender'
import FormHandling from './components/FormHandling'
import Conditoin from './components/Conditoin'
import Styling from './components/Styling'
function App() {
  // console.log(React , "this is react")
  return (
    <>
      {/* <h1>Hello React</h1>  */}
      {/* <Hi name="Bate Thar" age="27" address="Yangon"></Hi> */}
      {/*<Const></Const> */}
      {/* <ClassComponent /> */}
      <Apifetch />
      {/* <Listrender></Listrender> */}
      {/* <FormHandling /> */}
      {/* <Conditoin></Conditoin> */}
      {/* <Styling></Styling> */}
      {/* <Greet></Greet> */}
      {/* <Lifecycle></Lifecycle> */}
    </>
  )
}

export default App
