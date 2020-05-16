import { Component } from '@angular/core';
import { resume } from '../../assets/variables';

@Component({
    selector: 'app-resume',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']
})
export class ResumeComponent{

    title:string;
    skills_title:string;

    constructor() {
        this.title = resume.resume_title;
        this.skills_title = resume.skills_title;
    }

}
