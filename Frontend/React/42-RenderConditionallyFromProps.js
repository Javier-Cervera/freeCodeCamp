/*
Using props to conditionally render code is very common with React developers — that is, 
they use the value of a given prop to automatically make decisions about what to render.

Parent component called GameOfChance, and a child called Results. 
They are used to create a simple game where the user presses a button to see if they win or lose.

Math.random() returns a value between 0 (inclusive) and 1 (exclusive). So for 50/50 odds, use Math.random() >= .5
*/

class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        {/* Change code below this line */ }
        return (
            <h1>
                {this.props.fiftyFifty ? "You Win!" : "You Lose!"}
            </h1>
        )
        {/* Change code above this line */ }
    }
}

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => {
            // Complete the return statement:
            return {
                counter: prevState.counter + 1
            }
        });
    }
    render() {
        const expression = Math.random() >= .5; // Change this line
        return (
            <div>
                <button onClick={this.handleClick}>Play Again</button>
                {/* Change code below this line */}
                <Results fiftyFifty={expression} />
                {/* Change code above this line */}
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
}