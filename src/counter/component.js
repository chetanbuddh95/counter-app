import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        const disableDecrementButton = this.props.count == 0;
        return (
            <div>
                <h3>Count: {this.props.count}</h3>
                <div>
                    <button onClick={this.props.increment}>Increment</button>
                    <button onClick={this.props.decrement} disabled={disableDecrementButton}>Decrement</button>
                </div>
            </div>
            
    )}
}

const mapStateToProps = state => {
    return {
        count: state,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch({type: 'INCREMENT'}),
        decrement: () => dispatch({type: 'DECREMENT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
