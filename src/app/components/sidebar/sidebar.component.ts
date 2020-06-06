import { Component, OnInit } from '@angular/core';
import { GeneralInfoComponent } from 'app/general-info/general-info.component';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/general-info', title: 'general-info',  icon: 'dashboard', class: '' },
    { path: '/education', title: 'education',  icon:'person', class: '' },
    { path: '/projects', title: ' projects',  icon:'content_paste', class: '' },
    { path: '/internships', title: ' internships',  icon:'library_books', class: '' },
    { path: '/certifications', title: 'certifications',  icon:'bubble_chart', class: '' },
    { path: '/achievements', title: 'achievements',  icon:'location_on', class: '' },
    { path: '/skills', title: 'skills',  icon:'notifications', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
