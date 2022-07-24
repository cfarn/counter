import React from 'react'

class Counter extends React.Component {
    render() {
        return (
            <div className='counter'>
                <h2>{this.props.count}</h2>
                <button className='btn btnMin' onClick={this.props.substract}>-</button>
                <button className='btn btnPlus' onClick={this.props.increment}>+</button>
            </div>
        )
    }
}
export default Counter