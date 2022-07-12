import React, { useDebugValue } from 'react'
import './App.css'
import './styles/global.css'
import Counter from './components/Counter'

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
        if(state.count > 0) {
          return {count:state.count-1}
        }
      })
    }
    handleClickPlus= () => {
      this.setState((state) => {
        return {count:state.count+1}
      })
    }
  

  render() {
    return (
      <div className='container'>
        <h1>Counter</h1>
        <Counter 
          count = {this.state.count}
          substract = {this.handleClickMin}
          increment = {this.handleClickPlus}
          
        />
      </div>
    )
  }
}
export default App