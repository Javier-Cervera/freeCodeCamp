/*
The app will continue to function the same, except Redux manages the state. This example also 
illustrates how a component may have local state: your component still tracks user input locally 
in its own state. You can see how Redux provides a useful state management framework on top of React. 
You achieved the same result using only React's local state at first, and this is usually possible with 
simple apps. However, as your apps become larger and more complex, so does your state management, 
and this is the problem Redux solves.
*/

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
    return {
        type: ADD,
        message: message
    }
};

const messageReducer = (state = [], action) => {
    switch (action.type) {
        case ADD:
            return [
                ...state,
                action.message
            ];
        default:
            return state;
    }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.submitMessage = this.submitMessage.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    submitMessage() {
        // Call 'submitNewMessage', which has been mapped to Presentational's props, with a new message;
        // meanwhile, remove the 'messages' property from the object returned by this.setState().
        this.props.submitNewMessage(this.state.input);
        this.setState({
            input: '',
        });
    }
    render() {
        return (
            <div>
                <h2>Type in a new Message:</h2>
                <input
                    value={this.state.input}
                    onChange={this.handleChange} /><br />
                <button onClick={this.submitMessage}>Submit</button>
                <ul>
                    {this.props.messages.map((message, idx) => {
                        return (
                            <li key={idx}>{message}</li>
                        )
                    })
                    }
                </ul>
            </div>
        );
    }
};
// Change code above this line

const mapStateToProps = (state) => {
    return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (message) => {
            dispatch(addMessage(message))
        }
    }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container />
            </Provider>
        );
    }
};