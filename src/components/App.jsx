import { Component } from 'react';
import { Statistics } from './Statistics/Statistic';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <>
          {Object.keys(this.state).map(key => (
            <button>{key}</button>
          ))}
        </>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </div>
    );
  }
}
