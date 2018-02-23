import React from 'react';

class Counter2 extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    add = () => {
        this.setState((previousState) => {
            return {
                ...previousState,
                count: previousState.count + 2
            }
        });
    }

    subtract = () => {
        this.setState((previousState) => {
            return {
                ...previousState,
                count: previousState.count - 2
            }
        });
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={this.add}>SUM</button>
                <button onClick={this.subtract}>SUBTRACT</button>
            </div>
        );
    }
}

export default Counter2;
