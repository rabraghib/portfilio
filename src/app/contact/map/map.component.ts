import { Component } from '@angular/core';
import { contact } from '../../../assets/variables';


@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent {

    lat: number;
    lng: number;
    zoom : number;
    map_bg_url : string;

    constructor() {
        this.lat = contact.map_data.lat;
        this.lng = contact.map_data.lng;
        this.zoom = contact.map_data.zoom;
        this.map_bg_url = contact.map_bg;
    }

}
