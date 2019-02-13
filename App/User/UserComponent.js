import React, { Component } from "react";
import { UserContext } from '../GlobalContext';
import UserUI from './UserUI';

class UserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            action: {
                changeName: this.changeName
            }
        }
    }

    changeName = (name) => {
        this.setState({
            username: name
        });
    }

    render() {
        return (
            <UserContext.Provider value={ this.state }>
                <UserUI />
            </UserContext.Provider>
        );
    }
}

export default UserComponent;
