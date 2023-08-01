import { Component } from 'react'

class ClassComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count : 0 
    }
  }

  clickHandler = () =>{
    this.setState({ // async <<< freedom 
      count : this.state.count + 1
    }, () => {
      console.log("this is call by setState")  // first 
    })
    console.log("this is after setState"); // second 
  }
  
  render() {
    return (
      <>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.clickHandler} >Increment</button>
      </>
    )
  }
}

export default ClassComponent