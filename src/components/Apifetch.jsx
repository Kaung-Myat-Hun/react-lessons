import  { Component } from 'react'
import axios from 'axios'
class Apifetch extends Component {
  constructor(props) {
    super(props)
  
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res.data);
    }).catch((err) =>{
      console.log(err);
    })
  }
  render() {
    return (
      <div>Apifetch</div>
    )
  }
}

export default Apifetch