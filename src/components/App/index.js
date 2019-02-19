/**
 * Npm import
 */
import React from 'react';

/**
 * Local import
 */
import Form from 'src/containers/Form';
import Messages from 'src/containers/Messages';
import Settings from 'src/containers/Settings';
import './app.scss';

/**
 * Code
 */
const App = () => (
  <div id="container">
    <Settings />
    <Messages />
    <Form />
  </div>
);

/**
 * Export
 */
export default App;
