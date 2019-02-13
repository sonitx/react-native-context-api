import React, { Component } from "react";
import { _REPLACE_Context } from '../GlobalContext';
import _REPLACE_UI from './_REPLACE_UI';

class _REPLACE_Component extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        }
    }

    render() {
        return (
            <_REPLACE_Context.Provider value={ this.state }>
                <_REPLACE_UI />
            </_REPLACE_Context.Provider>
        );
    }
}

export default _REPLACE_Component;