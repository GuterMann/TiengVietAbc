import { LayoutState, Init_Layout_State } from './LayoutState';

export interface ApplicationState {
    layout: LayoutState;
}

export const Init_Application_State: ApplicationState = {
    layout: Init_Layout_State
};
