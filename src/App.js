import React, { useDebugValue } from 'react'
import './App.css'
import './styles/global.css'
import Counter from './components/Counter'

class App extends React.Component {
  constructor () {
    super ()

    this.state = {
      count : 0,
      count2 : 1
    }
  }

  // les méthodes doivent être déclarées en dehors du constructeur

  // avec 1 counter
  
  // handleClickMin = () => {
  //   this.setState((state) => {
  //     if(state.count > 0) {
  //       return {count:state.count-1}
  //     }
  //   })
  // }
  // handleClickPlus= () => {
  //   this.setState((state) => {
  //     return {count:state.count+1}
  //   })
  // }


    // avec 2 counters
    
  handleClickMin = () => {
    if(this.state.count > 0) {
      this.setState({
        count:this.state.count-1
      })
    }
  }
  handleClickPlus= () => {
    if(this.state.count < 9) {
      if(this.state.count === this.state.count2 - 1) {
        this.setState({
          count:this.state.count + 1,
          count2:this.state.count2 + 1
          })
      }else {
        this.setState({
          count: this.state.count + 1
        })
      }
    }
  }
  

  handleClickMin2 = () => {
    if(this.state.count2 > 1) {
      if(this.state.count2 - 1 === this.state.count) {
        this.setState({
          count: this.state.count -1,
          count2: this.state.count2 -1
        })
      }else {
        this.setState({
          count2: this.state.count2 -1
        })
      }
    }
  }
  handleClickPlus2= () => {
    if(this.state.count2 < 10) {
      this.setState({
        count2: this.state.count2 +1
      })
    }
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
        <Counter
          count = {this.state.count2}
          substract = {this.handleClickMin2}
          increment = {this.handleClickPlus2}
        />
      </div>
    )
  }
}

export default App