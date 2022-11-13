import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.scss'
import Counter from './Counter'
import { add, sub, mul, asyncMul } from './redux/actions/actionCreators'

class App extends Component {
  render() {
    return (
      <div className={'App'}>
        <h1>Счетчик <strong>{this.props.counter}</strong></h1>
        <hr />
        <div className="Actions">
          <button onClick={this.props.onAdd}>Добавить 1</button>
          <button onClick={() => this.props.onMultiply(10)}>Умножить на 10</button>
          <button onClick={this.props.onSub}>Вычесть 1</button>
        </div>

        <div className="Actions">
          <button onClick={() => this.props.onAsyncMul(100)}>
            Умножить 100 Async
          </button>

        </div>

        <Counter />
      </div>
    )
  }
}

export default connect(
  (state) => ({
    counter: state.counter1.counter
  }),
  (dispatch) => ({
    onAdd: () => dispatch(add()),
    onSub: () => dispatch(sub()),
    onMultiply: number => dispatch(mul(number)),
    onAsyncMul: number => dispatch(asyncMul(number))
  }))(App)