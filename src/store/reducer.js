/**
 * Initial State
 */
const initialState = {
  input: '',
  user: '',
  messages: [],
  emptySubmit: false,
};

/**
 * Types
 */

const INPUT_MESSAGE = 'INPUT_MESSAGE';
const INPUT_USER = 'USER';
export const MESSAGE = 'MESSAGE';
export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
export const MESSAGE_SEND = 'MESSAGE_SEND';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const HANDLE_EMPTY_SUBMIT = 'HANDLE_EMPTY_SUBMIT';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case INPUT_MESSAGE:
      return {
        ...state,
        input: action.input,
      };
    case HANDLE_EMPTY_SUBMIT:
      return {
        ...state,
        emptySubmit: action.input,
      };
    case INPUT_USER:
      return {
        ...state,
        user: action.user,
      };
    case MESSAGE_RECEIVED:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            message: action.message.message,
            user: action.message.user,
            id: action.message.id,
          },
        ],
        input: '',
      };
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const handleInput = input => ({
  type: INPUT_MESSAGE,
  input,
});

export const handleSubmit = () => ({
  type: MESSAGE,
});

export const handleInputUser = user => ({
  type: INPUT_USER,
  user,
});

export const webSocketConnect = () => ({
  type: WEBSOCKET_CONNECT,
});


export const receiveMessage = message => ({
  type: MESSAGE_RECEIVED,
  message,
});

export const handleEmptySubmit = input => ({
  type: HANDLE_EMPTY_SUBMIT,
  input: input === '',
});

/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;
