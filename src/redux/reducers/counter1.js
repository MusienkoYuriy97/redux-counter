import { ADD, MUL, SUB } from "../actions/actionTypes";

const initialState = {
    counter: 10
}

export default function counter1(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return { counter: state.counter + 1 }
        case SUB:
            return { counter: state.counter - 1 }
        case MUL:
            return { counter: state.counter * action.payload }
        default:
            return state
    }
}