import { Component } from '@angular/core';
import { logo_nav , logo_H_nav , bg_img , routes } from '../assets/variables';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Rabya-Raghib';
    routes_list = routes;
    logo_nav_url = logo_nav;
    logo_H_nav_url = logo_H_nav;
    back_img = bg_img;
}
