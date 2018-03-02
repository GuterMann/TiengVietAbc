import * as fromLayout from '../actions/layout.actions';
import { ApplicationState, Init_Application_State } from '../models/ApplicationState';
import { LayoutState, Init_Layout_State } from '../models/LayoutState';

export function layoutReducer(state: LayoutState = Init_Layout_State,
                              action: fromLayout.SidebarSelectedItemChangedAction): LayoutState {
    switch (action.type) {
        case fromLayout.Sidebar_Selected_Item_Changed:
            return handleSideBarSelectedItemChanged();
        default:
            return state;
    }

    function handleSideBarSelectedItemChanged() {
        const newState = Object.assign({}, state);
        newState.sidebarSelectedItem = action.payload;
        return newState;
    }
}
