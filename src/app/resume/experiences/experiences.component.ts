import { Component } from '@angular/core';
import { resume } from '../../../assets/variables';

@Component({
  selector: 'app-experiences',
  templateUrl: '../Educ-Exp/Template.html',
  styleUrls: ['../Educ-Exp/Style.css']
})
export class ExperiencesComponent {
  
    icon ="fas fa-school";
    title = "Experiences";
    
    List_items;

    constructor() {
        this.icon = resume.experiences.icon;
        this.title = resume.experiences.title;
        this.List_items = resume.experiences.items_list;
    }
    
}
