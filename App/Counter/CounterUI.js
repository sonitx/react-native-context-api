import React from "react";
import { View, Text } from 'react-native';
import { CounterContext } from '../GlobalContext';

const CounterUI = () => {
    return (
        <CounterContext.Consumer>
            {(state)  => (
                <View>
                    <Text style={{ color: 'black' }}>This is color: {state.color}</Text>
                    <Text style={{ padding: 20, color: 'red' }} onPress={state.action.changeColor}>CHANGE COLOR</Text>
                    <Text style={{ padding: 20, color: 'blue' }} onPress={state.action.gotoUser}>GO TO USERNAME</Text>
                </View>
            )}
        </CounterContext.Consumer>
    )
}

export default CounterUI;