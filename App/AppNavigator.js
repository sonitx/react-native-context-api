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