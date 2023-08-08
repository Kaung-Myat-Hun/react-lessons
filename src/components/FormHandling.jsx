import { Component } from 'react'

class FormHandling extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      input : "",
      input2 : ""
    }
  }
  changeHandler=(e)=>{
    console.log(e.target.value);
    this.setState({
      input : e.target.value
    })
  }
  changeHandler2= (e) =>{
    this.setState({
      input2: e.target.value
    })
  }
  render() {
    return (
      <div>
        <input type="text" placeholder='enter first name' value={this.state.input} 
        onChange={this.changeHandler} />
        <input type="text" placeholder='enter last name' value={this.state.input2} 
        onChange={this.changeHandler2} />
        <h1>first name : {this.state.input}</h1> 
        <br />
        <h1>last name : {this.state.input2}</h1>
      </div>
    )
  }
}

export default FormHandling