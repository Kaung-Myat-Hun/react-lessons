import { Component } from 'react'

class FormHandling extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      input : ""
    }
  }
  changeHandler=(e)=>{
    console.log(e.target.value);
    this.setState({
      input : e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" placeholder='enter text' value={this.state.input} 
        onChange={this.changeHandler} />
        <h1>Input Data : {this.state.input}</h1>
      </div>
    )
  }
}

export default FormHandling