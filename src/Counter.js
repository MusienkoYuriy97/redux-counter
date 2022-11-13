import React from "react";
import { connect } from 'react-redux'
import { add2 } from "./redux/actions/actionCreators";

class Counter extends React.Component {
    render() {
        return (
            <div style={{ padding: 20, border: '1px solid #ccc' }}>
                <h1>Counter {this.props.counter}</h1>
                <hr />
                <div>
                    <button onClick={() => this.props.onChange(1)}>
                        Add
                    </button>
                    <button onClick={() => this.props.onChange(-1)}>
                        Sub
                    </button>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
            counter: state.counter2.counter2
        }),
    (dispatch) => ({
        onChange: number => dispatch(add2(number))
    })
)(Counter)