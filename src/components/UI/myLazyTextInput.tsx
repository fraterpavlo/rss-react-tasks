import React, { useRef } from 'react';
import MyInput from './myInput';
import { ILazyTextInputProps } from 'interfaces/components/UI/myLazyTextInput';

const MyLazyTextInput = (props: ILazyTextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  function onEnterPress(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      props.onInputCallBack(inputRef.current!.value);
    }
  }

  function onBlur() {
    props.onInputCallBack(inputRef.current!.value);
  }

  return (
    <MyInput
      className={props.className ?? ''}
      type="text"
      placeholder={props.placeholder}
      defaultValue={props.defaultValue ?? ''}
      ref={inputRef}
      onBlur={onBlur}
      onKeyPress={onEnterPress}
    />
  );
};

export default MyLazyTextInput;
