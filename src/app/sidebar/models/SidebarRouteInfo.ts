export interface SidebarRouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const SidebarRoutes: SidebarRouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'ti-panel', class: '' },
    { path: 'user', title: 'User Profile',  icon: 'ti-user', class: '' },
    { path: 'table', title: 'Table List',  icon: 'ti-view-list-alt', class: '' },
    { path: 'typography', title: 'Typography',  icon: 'ti-text', class: '' },
    { path: 'icons', title: 'Icons',  icon: 'ti-pencil-alt2', class: '' },
    { path: 'maps', title: 'Maps',  icon: 'ti-map', class: '' },
    { path: 'notifications', title: 'Notifications',  icon: 'ti-bell', class: '' },
];
