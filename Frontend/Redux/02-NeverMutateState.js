/*There is a store and reducer in the code editor for managing to-do items. 
Finish writing the ADD_TO_DO case in the reducer to append a new to-do to the state,
without modifying state directly. Instead, return a new copy of state
*/
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
    'Go to the store',
    'Clean the house',
    'Cook dinner',
    'Learn to code',
];

const immutableReducer = (state = todos, action) => {
    switch (action.type) {
        case ADD_TO_DO:
            // Don't mutate state here or the tests will fail
            return state.concat(action.todo);
            //return [...state, action.todo];
        default:
            return state;
    }
};

const addToDo = (todo) => {
    return {
        type: ADD_TO_DO,
        todo
    }
}

const store = Redux.createStore(immutableReducer);