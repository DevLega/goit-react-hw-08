import React, { Component } from "react";

export default class FeedbackCounter extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = (type) => {
    this.setState((prev) => ({
      [type]: prev[type] + 1,
    }));
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;

    if (total === 0) return 0;

    return Math.round((good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <div>
          <button onClick={() => this.addFeedback("good")}>Good</button>
          <button onClick={() => this.addFeedback("neutral")}>Neutral</button>
          <button onClick={() => this.addFeedback("bad")}>Bad</button>
        </div>

        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {good + neutral + bad}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}
