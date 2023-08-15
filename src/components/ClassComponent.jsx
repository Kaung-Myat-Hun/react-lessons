import { Component } from 'react'
import Lifecycle from './Lifecycle'
import UseEffectComponent from './functional/UseEffect'
class ClassComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count : 0  // 0 *5 
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

  incrementFive= () =>{
    for(let i =0 ; i<5 ; i++){
      this.setState( prev => {
        return {
          count : prev.count + 1,
          show: false
        }
      })
      console.log(this.state.count);
    }
  }
  render() {
    return (
      <>
        {/* <h1>Count : {this.state.count}</h1>
        <button onClick={this.clickHandler} >Increment</button>
        <button onClick={this.incrementFive}>Increment + 5</button> */}
        <button onClick={()=>{
          this.setState({
            show : !this.state.show
          })
        }}>Toggle </button>
        {this.state.show && <UseEffectComponent/> }
      </>
    )
  }
}

export default ClassComponent