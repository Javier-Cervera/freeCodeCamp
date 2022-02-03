/*
Implement a simple counter with Redux from scratch, without the dependencies.
incAction and decAction are action creators, counterReducer() is the reducer, 
INCREMENT and DECREMENT are action types, and finally the Redux store. 
Once you're finished you should be able to dispatch INCREMENT or DECREMENT actions to 
increment or decrement the state held in the store.
*/

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return ++state;

        case DECREMENT:
            return --state;

        default:
            return state;
    }
};

const incAction = () => {
    return {
        type: INCREMENT
    };
};

const decAction = () => {
    return {
        type: DECREMENT
    };
};

const store = Redux.createStore(counterReducer);