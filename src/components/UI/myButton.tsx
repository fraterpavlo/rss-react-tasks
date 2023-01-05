import React from 'react';
import classes from 'styles/components/UI/myButton.module.css';
import { IMyButtonProps } from '../../interfaces/components/UI/myButton';

const MyButton = React.forwardRef<HTMLButtonElement, IMyButtonProps>(
  ({ children, ...props }, ref) => {
    return (
      <button ref={ref} {...props} className={classes.myBtn}>
        {children}
      </button>
    );
  }
);

export default MyButton;
