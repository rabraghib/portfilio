import { Component } from '@angular/core';
import { resume } from '../../../assets/variables';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

    framew_word;
  
    skills;
  
    constructor() {
        this.framew_word = resume.skills.framew_word;
        this.skills = resume.skills.skills_list;
    }
    
}
