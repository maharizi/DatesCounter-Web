import React, { Component } from 'react';

class UserInput extends Component {

    userInputChangeDate = () => {
        this.props.appChangeDateProps(this.refs.id_input_until.value);
        this.props.appChangeDateProps2(this.refs.id_input_from.value);
    }

    render() {
        return (
            <div>
                <input ref="id_input_from" type="date" className="m-2"/>-
                <input ref="id_input_until" type="date" className="m-2"/>
                <button onClick={this.userInputChangeDate} className="btn btn-success">Change</button>
            </div>
        )
    }
}

export default UserInput;