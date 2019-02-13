import React, { Component } from "react";
import { CounterContext } from '../GlobalContext';
import CounterUI from './CounterUI';

class CounterComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'red',
            action: {
                changeColor: this.changeColor,
                gotoUser: this.gotoUser
            }
        }
    }

    changeColor = () => {
        let color = this.state.color == 'red' ? 'blue' : 'red';

        this.setState({
            color: color
        })
    }

    gotoUser = () => {
        this.props.navigation.navigate('User');
    }

    render() {
        return (
            <CounterContext.Provider value={ this.state }>
                <CounterUI />
            </CounterContext.Provider>
        );
    }
}

export default CounterComponent;