import React, { Component } from 'react';

class Counter extends Component {
    state = { days: 999 };
    year = new Date().getFullYear();
    month = new Date().getMonth();
    day = new Date().getDate();

    componentDidMount() {
        let daysLeft = this.calcDaysFromDate(this.props.appDateProps);
        this.setState({ days: daysLeft });
    }

    componentDidUpdate(_props, _state) {
        if (this.props.appDateProps != _props.appDateProps) {
            let daysLeft = this.calcDaysFromDate(this.props.appDateProps);
            this.setState({ days: daysLeft });
        }
        if (this.props.appDateProps2 != _props.appDateProps2) {
            let daysLeft = this.calcDaysFromDate(this.props.appDateProps, this.props.appDateProps2);
            this.setState({ days: daysLeft });
        }
    }

    calcDaysFromDate(_date, _date2 = new Date()) {
        let time = Date.parse(_date) - Date.parse(_date2);
        let days = time / (1000 * 60 * 60 * 24);
        return Math.ceil(days)
    }

    render() {
        return (
            <div>
                <h1>date : {this.props.appDateProps2}</h1>
                <h2>Count until : {this.props.appDateProps}</h2>
                <h3>Days : {this.state.days}</h3>
            </div>
        )
    }
}
export default Counter;