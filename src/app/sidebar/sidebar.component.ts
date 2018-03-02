import { Component, OnInit } from '@angular/core';
import { SidebarRouteInfo, SidebarRoutes } from './models/SidebarRouteInfo';

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'app-sidebar',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: SidebarRouteInfo[];
    ngOnInit() {
        this.menuItems = SidebarRoutes.filter(menuItem => menuItem);
    }
    isNotMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

}
