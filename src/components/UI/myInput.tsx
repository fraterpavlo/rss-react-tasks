import React from 'react';
import classes from 'styles/components/UI/myInput.module.css';
import { IMyInputProps } from 'interfaces/components/UI/myInput';

const MyInput = React.forwardRef<HTMLInputElement, IMyInputProps>((props, ref) => {
  return <input ref={ref} className={classes.myTextInput} {...props} />;
});

export default MyInput;
