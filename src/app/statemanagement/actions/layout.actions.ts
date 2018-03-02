import { Action } from '@ngrx/store';

export const Sidebar_Selected_Item_Changed = '[SelectedItem] Changed';

export class SidebarSelectedItemChangedAction implements Action {
    type = Sidebar_Selected_Item_Changed;

    constructor(public payload: string) {}
}
