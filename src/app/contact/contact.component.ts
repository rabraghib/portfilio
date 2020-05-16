import { Component } from '@angular/core';
import { contact } from '../../assets/variables';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {

    sec_title:string;

    constructor() {
        this.sec_title = contact.contact_title;
    }

}
