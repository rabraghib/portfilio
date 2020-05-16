import { Component } from '@angular/core';
import { about } from '../../../assets/variables';

@Component({
    selector: 'app-intersts',
    templateUrl: './intersts.component.html',
    styleUrls: ['./intersts.component.css']
})
export class InterstsComponent {

    interests:any;
    
    constructor() {
        this.interests = about.Interests;
    }
    
}
