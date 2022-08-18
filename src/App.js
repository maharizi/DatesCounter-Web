import React, { Component } from 'react';
import './App.css';
import Counter from "./comps/counter"
import UserInput from './comps/userinput';

class App extends Component {
  state = { myDate: "2023-06-23" };
  myDate2 = "2023-08-18";

  changeDate = (_val) => {
    this.setState({ myDate: _val })
  }

  changeDate2 = (_val2) => {
    this.myDate2 = _val2
  }

  render() {
    return (
      <div className="App bg-success p-2 text-white">
        <Counter appDateProps={this.state.myDate} appDateProps2={this.myDate2}></Counter>
        <UserInput appChangeDateProps={this.changeDate} appChangeDateProps2={this.changeDate2}></UserInput>
      </div>
    )
  }
}

export default App;
