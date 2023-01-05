import { VoidCallbackType } from '../../common';
import { IAction, IState } from '../reducer/reducer';

export type THomePageContext = {
  state: IState;
  dispatch: VoidCallbackType<IAction>;
};
