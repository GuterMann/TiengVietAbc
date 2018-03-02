import { ApplicationState } from '../models/ApplicationState';
import { LayoutState } from '../models/LayoutState';

export function getSelectedSidebarItemName(state: ApplicationState): string {
    const result = state.layout.sidebarSelectedItem;
    return result;
  }
