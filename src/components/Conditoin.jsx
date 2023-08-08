import { Component } from 'react'
import FormHandling from './FormHandling'
class Conditoin extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      show : false,
    }
    this.toggleHandler = this.toggleHandler.bind(this)
  }
  toggleHandler(){
    //this >> toggleHandler
    this.setState({
      show : !this.state.show
    })
  }
  render() {
    return (
      <>
        <button onClick={this.toggleHandler}>toggle</button>
        {this.state.show && <FormHandling/>}
      </>
    )
  }
}

export default Conditoin