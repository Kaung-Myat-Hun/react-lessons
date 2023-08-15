import  { Component } from 'react'
import axios from 'axios'
class Apifetch extends Component {
  constructor(props) {
    super(props)
  this.state= {
    users : []
  }
  }
  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      console.log(res.data);
      this.setState({
        users:  res.data
      })
    }).catch((err) =>{
      console.log(err);
    }) // <<< then() . catch()
  }
  render() {
    return (
      <div>
        <h1>Api fetching</h1>
        {this.state.users.map((user,index)=>( // index , array [0]
          <div key={index}>
            <h3>{user.name}</h3>
            <p>{user.email}</p> <br />
          </div>
        ))}
      </div>
    )
  }
}

export default Apifetch