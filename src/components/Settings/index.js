import React from 'react';
import PropsTypes from 'prop-types';

import './settings.scss';

const Settings = ({ user, handleInputUser }) => {
  const handleChangeInput = (event) => {
    const text = event.target.value;
    handleInputUser(text);
  };
  const submit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="settings" onSubmit={submit}>
      <p>Bonjour,</p>
      <input
        className={`settings-input ${user === '' ? 'settings-input-empty' : ''}`}
        placeholder="Votre pseudo"
        type="text"
        value={user}
        onChange={handleChangeInput}
        autoComplete="off"
      />
    </form>
  );
};

Settings.propTypes = {
  user: PropsTypes.string.isRequired,
  handleInputUser: PropsTypes.func.isRequired,
};

export default Settings;
