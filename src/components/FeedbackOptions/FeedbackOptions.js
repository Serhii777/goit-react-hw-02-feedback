import React from "react";
import "./FeedbackOptions.css";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className="feedback-block">
      <button
        type="button"
        name="good"
        onClick={onLeaveFeedback}
        className="feedback-button">
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={onLeaveFeedback}
        className="feedback-button">
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        onClick={onLeaveFeedback}
        className="feedback-button">
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
