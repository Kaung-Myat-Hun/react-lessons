import { Component } from 'react'

class Lifecycle extends Component {
  constructor(props) {
    super(props)
  this.state= {
    count: 0
  }
  console.log("this is constructor");
  }
  resizeHander = () =>{
      console.log("resizing")
  }
  componentDidMount(){
    console.log("this is mounting");
    window.addEventListener("resize" , this.resizeHander)
  }
  componentDidUpdate(){
    console.log("this is updating");
  }
  componentWillUnmount(){
    window.removeEventListener("resize" , this.resizeHander)
  }
  render() {
    console.log("this is render");
    return (
    <>
    <h1>{this.state.count}</h1>
    <button onClick={()=>{
      this.setState({
        count : this.state.count +1
      })
    }}>+1</button>
    </>
    )
  }
}

export default Lifecycle