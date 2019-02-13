import React from "react";
import { View, Text, Button } from 'react-native';
import { UserContext } from '../GlobalContext';

const UserUI = () => {
    return (
        <UserContext.Consumer>
            {(state)  => (
                <View>
                    <Text style={{marginBottom: 20, marginTop: 10, textAlign: 'center'}}>Hello: UserName</Text>
                    <Button 
                        title="Change UserName"
                        color="#841584"
                        onPress={() => { state.action.changeName('Hung Son') }} />
                </View>
            )}
        </UserContext.Consumer>
    )
}

export default UserUI;
