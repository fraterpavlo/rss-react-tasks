import { VoidCallbackType } from 'interfaces/common';

export interface IMyButtonProps {
  disabled?: boolean;
  children: React.ReactNode;
  onClick: VoidCallbackType<React.MouseEvent<HTMLButtonElement>>;
}
