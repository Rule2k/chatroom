import React from 'react';
import PropTypes from 'prop-types';
import './messages.scss';

const Messages = ({ messages }) => (
  <ul className="messages">
    {messages.map(message => (
      <div className="messages-single" key={message.id}>
        <p className="messages-user">{message.user} dit :</p>
        <li className="messages-message">{message.message}</li>
      </div>
    ))}
  </ul>
);

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default Messages;
