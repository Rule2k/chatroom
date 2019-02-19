import React from 'react';
import PropsTypes from 'prop-types';
import './form.scss';
import classNames from 'classnames';

const Form = ({
  input, user, handleInput, handleSubmit, handleEmptySubmit, emptySubmit,
}) => {
  const classes = classNames({
    input: true,
    emptyInput: emptySubmit,
  });
  const handleChangeInput = (event) => {
    const text = event.target.value;
    handleInput(text);
    handleEmptySubmit(false);
  };

  const submit = (event) => {
    event.preventDefault();
    if (input.trim() === '') {
      handleEmptySubmit(true);
    }
    if (input.trim() !== '' && user.trim() !== '') {
      handleEmptySubmit(true);
      handleSubmit();
    }
    handleEmptySubmit(input.trim());
  };

  return (
    <form className="form" onSubmit={submit}>
      <input className={classes} type="text" value={input} onChange={handleChangeInput} autoComplete="off" placeholder="Votre message" />
    </form>
  );
};

Form.propTypes = {
  input: PropsTypes.string.isRequired,
  user: PropsTypes.string.isRequired,
  handleInput: PropsTypes.func.isRequired,
  handleSubmit: PropsTypes.func.isRequired,
  handleEmptySubmit: PropsTypes.func.isRequired,
  emptySubmit: PropsTypes.bool.isRequired,
};

export default Form;
