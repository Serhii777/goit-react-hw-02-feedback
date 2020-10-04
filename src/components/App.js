import React, { Component } from "react";
import Container from "./Container";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
import Statistics from "./Statistics";

class App extends Component {
  static propTypes = {};

  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
    step: 1,
    positivePercentage: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCounter = (e) => {
    const { name } = e.target;

    this.setState((prevState, props) => {
      return {
        [name]: prevState[name] + props.step,
      };
    });
  };

  countTotalFeedback = (state) => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (state) => {
    const { good, neutral, bad } = this.state;
    let feedbackPercentage = (good / (good + neutral + bad)) * 100;
    return Math.round(feedbackPercentage);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = good + neutral + bad;

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleCounter} />
        </Section>
        <Section title="Statistics">
          {totalFeedback < 1 && (
            <Notification message="No feedback given" />
          )}
          {totalFeedback > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
