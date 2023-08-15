import  {useState} from 'react'

function Todo() {
  const [inputData, setInputData] = useState("")
  const [todoList, setTodoList] = useState([])
  const inputHandler = (e)=> {
    setInputData(e.target.value)
  }
  const addTodoHandler = (e) =>{
    e.preventDefault()
    setTodoList([...todoList, inputData])
    setInputData("")
  }
  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <input type="text" placeholder='enter todo' value={inputData}
        onChange={inputHandler} 
        />
        <button onClick={addTodoHandler}>Add todos</button>
      </form>
      <br />
      {todoList.length !== 0 ? 
      todoList.map((todo, index) => (
        <h3 key={index}>{todo}</h3>
      )) : (
        <h1>there is no todo</h1>
      )
    }
    </div>
  )
}

export default Todo