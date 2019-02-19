/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Form from 'src/components/Form';
import { handleInput, handleSubmit, handleEmptySubmit } from 'src/store/reducer';
// Action Creators


const mapStateToProps = state => ({
  input: state.input,
  user: state.user,
  emptySubmit: state.emptySubmit,
});

const mapDispatchToProps = dispatch => ({
  handleInput: (input) => {
    dispatch(handleInput(input));
  },
  handleSubmit: () => {
    dispatch(handleSubmit());
  },
  handleEmptySubmit: (input) => {
    dispatch(handleEmptySubmit(input));
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default FormContainer;
