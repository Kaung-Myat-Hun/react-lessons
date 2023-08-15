import { Component } from 'react'

export class TodoList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      todoList : [],
      inputData : ""
    }
  }
  inputHandler = (e)=>{
    this.setState({
      inputData: e.target.value
    } , () => console.log(this.state.inputData))
  }
  clickHandler = (e) =>{
    e.preventDefault();
    this.setState({
      todoList : [...this.state.todoList, this.state.inputData],
      inputData: "",
    })
  }
  render() {
    return (
      <div style={{ textAlign : "center"}}>
        <h1>TodoList</h1>
        <form onSubmit={this.clickHandler}>
          <input type="text" placeholder='enter todo'
          value={this.state.inputData} 
          onChange={this.inputHandler}
          />
          <button onClick={this.clickHandler}>Add Todos</button>
        </form>
        <br />
        {this.state.todoList.length !== 0 ?
        this.state.todoList.map((todo, index)=>(
          <h3 key={index}>{todo}</h3>
        )) : (<h1>There is no todos</h1>)}
      </div>
    )
  }
}

export default TodoList