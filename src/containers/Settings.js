/**
 * Npm import
 */
import { connect } from 'react-redux';

/**
 * Local import
 */
import Settings from 'src/components/Settings';
import { handleInputUser, handleSubmitUser } from 'src/store/reducer';
// Action Creators


const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  handleInputUser: (user) => {
    dispatch(handleInputUser(user));
  },
});

// Container
// connect(Ce dont j'ai besoin)(Qui en a besoin)
const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

/* 2 temps
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const ExampleContainer = createContainer(Example);
*/

/**
 * Export
 */
export default SettingsContainer;
