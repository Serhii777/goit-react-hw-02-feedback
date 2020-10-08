import React, { Component } from "react";
import PropTypes from "prop-types";
import Container from "./Container";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Notification from "./Notification";
import Statistics from "./Statistics";

class App extends Component {
  static propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };

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
    const totalValues = this.state;
    return Object.values(totalValues).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = (totalFeedback, good) => {
    let feedbackPercentage = (good / (totalFeedback)) * 100;
    return Math.round(feedbackPercentage);
  };

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedback = this.countTotalFeedback();
    const posPercent = this.countPositiveFeedbackPercentage(
      totalFeedback,
      good
    );

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleCounter} />
        </Section>
        <Section title="Statistics">
          {totalFeedback < 1 && <Notification message="No feedback given" />}
          {totalFeedback > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={posPercent}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
