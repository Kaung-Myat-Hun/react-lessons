import { Component } from 'react'
import './style.css'
import styles from './Styling.module.css'

export class Styling extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      success: false,
      show: false
    }
  }
  render() {
    return (
      <div>
        <h1 className='external'>Style</h1>
        <h1 style={{margin: "50px", backgroundColor: "#007bff" , color: "#fff"}}>
          Inline Style</h1>
          <input type={this.state.show ? "text" : "password"} />
        <h1 className={this.state.success ? styles.success : styles.danger}>
          Module css</h1>
      </div>
    )
  }
}

export default Styling