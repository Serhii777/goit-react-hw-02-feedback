import React from "react";
import PropTypes from "prop-types";
import "./Statistics.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="Statistics">
      <ul className="Statistics-list">
        <li className="Statistics-item">Good: {good}</li>
        <li className="Statistics-item">Neutral: {neutral}</li>
        <li className="Statistics-item">Bad: {bad}</li>
      </ul>

      <span className="Statistics-text">Total: {total}</span>
      <span className="Statistics-text">
        Positive feedback: {positivePercentage}%
      </span>
    </div>
  );
};

Statistics.propTypes = {
  props: PropTypes.exact({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  }),
};

export default Statistics;
