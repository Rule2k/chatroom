import { WEBSOCKET_CONNECT, receiveMessage, MESSAGE } from './reducer';

const socket = window.io('http://localhost:3001');

const socketMiddleware = store => next => (action) => {
  const state = store.getState();
  switch (action.type) {
    case WEBSOCKET_CONNECT:
      socket.on('send_message', (message) => {
        store.dispatch(receiveMessage(message));
      });
      break;
    case MESSAGE:
      socket.emit('send_message', {
        message: state.input,
        user: state.user,
      });
      break;
    default:
      next(action);
  }
};

export default socketMiddleware;
