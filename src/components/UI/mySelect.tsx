import React from 'react';
import { IMySelectProps } from '../../interfaces/components/UI/mySelect';

const MySelect = React.forwardRef<HTMLSelectElement, IMySelectProps>((props, ref) => {
  return (
    <select ref={ref} onChange={(event) => props.onChange(event.target.value)}>
      <option disabled value={props.defaultValue}>
        {props.defaultValue}
      </option>
      {props.options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
});

export default MySelect;
