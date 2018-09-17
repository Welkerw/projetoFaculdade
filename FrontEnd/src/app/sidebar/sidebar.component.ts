import { Component, OnInit } from '@angular/core';

declare var $: any;

export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    {path: 'ranking', title: 'Ranking', icon: 'ti-layout-grid2', class: '' },
    {path: 'faculdade', title: 'Faculdades',  icon: 'ti-layout-grid2', class: '' },
    {path: 'curso', title: 'Curso',  icon: 'ti-layout-grid2', class: '' },
];

@Component({
    selector: 'app-sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    isNotMobileMenu() {
        // if ($(window).width() > 991) {
        //     return false;
        // }
        return true;
    }

}
