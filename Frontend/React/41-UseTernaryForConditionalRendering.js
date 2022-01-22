/*
Once the component is rendering information to the page, users should have a way to interact with it. 
Using the following logic: when the page first loads, render the submit button, buttonOne, to the page. 
Then, when a user enters their age and clicks the button, render a different button based on the age. 
If a user enters a number less than 18, render buttonThree. If a user enters a number greater than or 
equal to 18, render buttonTwo.
*/

const inputStyle = {
    width: 235,
    margin: 5
};

class CheckUserAge extends React.Component {
    constructor(props) {
        super(props);
        // Change code below this line
        this.state = {
            input: '',
            userAge: ''
        }
        // Change code above this line
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({
            input: e.target.value,
            userAge: ''
        });
    }
    submit() {
        this.setState(state => ({
            userAge: state.input
        }));
    }
    render() {
        const buttonOne = <button onClick={this.submit}>Submit</button>;
        const buttonTwo = <button>You May Enter</button>;
        const buttonThree = <button>You Shall Not Pass</button>;
        return (
            <div>
                <h3>Enter Your Age to Continue</h3>
                <input
                    style={inputStyle}
                    type='number'
                    value={this.state.input}
                    onChange={this.handleChange}
                />
                <br />
                {/* Change code below this line */}
                {
                    this.state.userAge == ''
                        ? buttonOne
                        : this.state.userAge >= 18
                            ? buttonTwo
                            : buttonThree
                }
                {/* Change code above this line */}
            </div>
        );
    }
}