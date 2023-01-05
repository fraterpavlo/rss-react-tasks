import { TObjWithStringOrNumValues, VoidCallbackType } from 'interfaces/common';

export interface IMySelectProps {
  options: TObjWithStringOrNumValues[];
  defaultValue: string;
  value: string;
  onChange: VoidCallbackType<string>;
}
