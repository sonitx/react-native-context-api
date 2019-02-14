# react-native-context-api
This is sample project applying React Context API for React Native to State Management

This project is very simple, integrated with:

* React Context API (https://reactjs.org/docs/context.html)
* React Navigation (https://reactnavigation.org/)

# How to apply React Context API to React Native

## Install

### Clone this project to local
``` bash
git clone https://github.com/nguyenhungson/react-native-context-api.git
```

### Install Node module
``` bash
cd react-native-context-api
npm install
```

#### Note: to complete installing React Navigation on Android, please refer https://reactnavigation.org/docs/en/getting-started.html

## Structure of Project
All react-native code, I put in 'App' folder. 

* With one Component correspond with a folder, include 2 files: _Component.js and _UI.js
* AppNavigator.js: this is 'Route' for app 
* GlobalContext.js: file to declare 'Context' for app
* generate.sh: script file to create a Component automatically. 
* \__Template\__: DON'T remove this folder, I used 2 files in this folder to generate Component automatically.

## Example
I will guide step by step to use this project:

Generate new Component: example I create Component with name 'User'
``` bash
cd App
./generate.sh User
```

Output
``` bash
>> Added GlobalContext.js
>> Create new folder name User
>> Copy 2 files template into User
>> Go to User
>> Replaced content of Component file
>> Replaced content of UI file
>> Replaced name of new 2 files

Add this line below into AppNavigator.js import
import UserComponent from './User/UserComponent'

Add this line below into AppNavigator.js createStackNavigator
User: UserComponent

COMPLETED !!!
```

Open file AppNavigator.js, add 2 lines as Output. And AppNavigator.js file as below:
``` typescript
import { createStackNavigator, createAppContainer } from "react-navigation";
import CounterComponent from './Counter/CounterComponent';
import UserComponent from './User/UserComponent';

const AppNavigator = createStackNavigator(
    {
        Counter: CounterComponent,
        User: UserComponent
    },
    {
        initialRouteName: 'Counter'
    }
);

export default createAppContainer(AppNavigator);
```

Create new simple UI in 'UserUI.js' file:
``` typescript
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
                        onPress={() => {}} />
                </View>
            )}
        </UserContext.Consumer>
    )
}

export default UserUI;
```

Try run on device
![e33577a061c4839adad5](https://user-images.githubusercontent.com/8019602/52726296-819bd300-2fe5-11e9-8547-ff6f64b99654.jpg =500x)


Now, I'll change state and set action with React Context API

Define a state and a action in constructor in 'UserComponent'
``` typescript
constructor(props) {
    super(props);

    this.state = {
        username: '',
        action: {
            changeName: this.changeName
        }
    }
}
```

Create action with name 'changeName'
``` typescript
changeName = (name) => {
    this.setState({
        username: name
    });
}
```

Now, set state and Action for 'UserUI.js'
``` typescript
<UserContext.Consumer>
    {(state)  => (
        <View>
            <Text style={{marginBottom: 20, marginTop: 10, textAlign: 'center'}}>Hello: {state.username}</Text>
            <Button 
                title="Change UserName"
                color="#841584"
                onPress={() => { state.action.changeName('Hung Son') }} />
        </View>
    )}
</UserContext.Consumer>
```
This is the result
![424942475523b77dee32](https://user-images.githubusercontent.com/8019602/52726295-81033c80-2fe5-11e9-9c6f-5f327dbe6de1.jpg =500x)
