import React from 'react';
import classes from 'styles/components/UI/myLabel.module.css';
import { IMyLabelProps } from '../../interfaces/components/UI/myLabel';

const MyLabel = ({ children, ...props }: IMyLabelProps) => {
  return (
    <label {...props} className={classes.MyLabel}>
      {props.tittle}
      {children}
      <span>{props.message}</span>
    </label>
  );
};

export default MyLabel;
