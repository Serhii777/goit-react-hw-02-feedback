import React from "react";
import "./FeedbackOptions.css";

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className="FeedbackOptions">
      <button type="button" name="good" onClick={onLeaveFeedback} className="FeedbackOptions-button">
        Good
      </button>
      <button type="button" name="neutral" onClick={onLeaveFeedback} className="FeedbackOptions-button">
        Neutral
      </button>
      <button type="button" name="bad" onClick={onLeaveFeedback} className="FeedbackOptions-button">
        Bad
      </button>
    </div>
  );
};
export default FeedbackOptions;
