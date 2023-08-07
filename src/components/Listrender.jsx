import { Component } from 'react'

const list = [
  {
    id: 1,
    model : "huawei",
  },{
    id: 2,
    model : "samsung"
  },{
    id: 3,
    model : "iPhone"
  },{
    id:4,
    model: "Mi"
  }
]
class Listrender extends Component {
  
  render() {
    return (
      <>
        {list.map((item) => (
          <h1 key={item.id}>{item.model}</h1>
        ))}
      </>
    )
  }
}

export default Listrender