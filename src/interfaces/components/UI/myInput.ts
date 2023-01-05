import { VoidCallbackType } from 'interfaces/common';

export interface IMyInputProps {
  className: string;
  defaultValue: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  accept?: string;
  onBlur?: VoidCallbackType<React.FocusEvent<HTMLInputElement>>;
  onKeyPress?: VoidCallbackType<React.KeyboardEvent<HTMLInputElement>>;
}
