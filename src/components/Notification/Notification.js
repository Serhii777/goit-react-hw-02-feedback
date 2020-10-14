import React from "react";
import PropTypes from "prop-types";
import './Notification.css'

const Notification = ({ message }) => <div className="notification">{message}</div>;

Notification.propTypes = {
    props: PropTypes.exact({
      message: PropTypes.string,
    }),
  };

  Notification.defaultProps = {
    message: '',
  };

export default Notification;
