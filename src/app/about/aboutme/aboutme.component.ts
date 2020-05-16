import { Component } from '@angular/core';
import { about } from '../../../assets/variables';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-aboutme',
    templateUrl: './aboutme.component.html',
    styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent {

    data : any;
    video_embed:SafeResourceUrl;
  
    constructor(sanitize: DomSanitizer) {
        this.data = about.about_me;
        this.video_embed = sanitize.bypassSecurityTrustResourceUrl(about.about_me.video_embed_url);
    }
    
}
