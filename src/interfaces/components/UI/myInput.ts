// import { VoidCallbackType } from 'interfaces/common';

export interface IMyInputProps {
  defaultValue: string;
  // value: string;
  onChange?: () => void;
  type: string;
  placeholder?: string;
  required?: boolean;
  accept?: string;
}
