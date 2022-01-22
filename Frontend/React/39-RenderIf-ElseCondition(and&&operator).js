/*
MyComponent contains a boolean in its state which tracks whether you want 
to display some element in the UI or not. The button toggles the state of this value.
if/else statement toggles the returns
*/
class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState((state) => ({
            display: !state.display
        }));
    }
    render() {
        // Change code below this line
        if (this.state.display) {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                    <h1>Displayed!</h1>
                </div>
            );
            /*
            And for a more concise way with the && operator:

            If the condition is true, the markup will be returned. If the condition is false, 
            the operation will immediately return false after evaluating the condition and return nothing.
            
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                    {this.state.display && <h1>Displayed!</h1>}
                </div>
            );
            
            */
        }
        else {
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                </div>
            )
        }
    }

};

