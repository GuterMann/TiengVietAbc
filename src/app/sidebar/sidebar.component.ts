import { Component, OnInit } from '@angular/core';
import { SidebarRouteInfo, SidebarRoutes } from './models/SidebarRouteInfo';
import { ApplicationState } from '../statemanagement/models/ApplicationState';
import { Store } from '@ngrx/store';
import { SidebarSelectedItemChangedAction } from '../statemanagement/actions/layout.actions';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: SidebarRouteInfo[];
    constructor(private store: Store<ApplicationState>) { }

    ngOnInit() {
        this.menuItems = SidebarRoutes.filter(menuItem => menuItem);
    }
    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }
    menuItemClicked($event): void {
        if ($event.hasOwnProperty('path')) {
          let resultName = 'Dashboard';
          if ($event.path === 'user-profile') {
            resultName = 'UserProfile';
          } else if ($event.path === 'dictionary') {
            resultName = 'Dictionary';
          } else {
              resultName = 'Einfach Daina Mudda';
          }
          this.store.dispatch(new SidebarSelectedItemChangedAction(resultName));
        }
      }

}
