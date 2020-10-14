import React from "react";
import PropTypes from "prop-types";
import "./Statistics.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="statistics">
      <ul className="statistics-list">
        <li className="statistics-item">Good: {good}</li>
        <li className="statistics-item">Neutral: {neutral}</li>
        <li className="statistics-item">Bad: {bad}</li>
      </ul>

      <span className="statistics-text">Total: {total}</span>
      <span className="statistics-text">
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

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  positivePercentage: 0,
};

export default Statistics;
