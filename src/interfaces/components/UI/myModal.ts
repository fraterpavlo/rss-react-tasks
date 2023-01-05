import { ReactNode } from 'react';

export interface IMyModalProps {
  children: ReactNode;
  visible: boolean;
  setVisible: (visible: boolean) => void;
}
