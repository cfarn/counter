import React, { useDebugValue } from 'react'
import './App.css'
import './styles/global.css'

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      count : 0
    }


  }
    // les méthodes doivent être déclarées en dehors du constructeur
    handleClickMin = () => {
      this.setState((state) => {
        return {count:state.count-1}
      })
    }
    handleClickPlus= () => {
      this.setState((state) => {
        return {count:state.count+1}
      })
    }
  

  render() {
    return (
      <>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <button className='btnMin' onClick={this.handleClickMin}>-</button>
        <button className='btnPlus' onClick={this.handleClickPlus}>+</button>
      </>
    )
  }
}
export default App