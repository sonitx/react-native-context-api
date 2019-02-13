import React from "react";
import { View } from 'react-native';
import { _REPLACE_Context } from '../GlobalContext';

const _REPLACE_UI = () => {
    return (
        <_REPLACE_Context.Consumer>
            {(state)  => (
                <View></View>
            )}
        </_REPLACE_Context.Consumer>
    )
}

export default _REPLACE_UI;