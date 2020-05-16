import { Component } from '@angular/core';
import { contact } from '../../../assets/variables';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
    
    info : any;
    
    constructor() {
        this.info = contact.infos_array;
    }

}
