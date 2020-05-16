import { Component } from '@angular/core';
import { resume } from '../../../assets/variables';

@Component({
  selector: 'app-education',
  templateUrl: '../Educ-Exp/Template.html',
  styleUrls: ['../Educ-Exp/Style.css']
})
export class EducationComponent {

    icon ="fas fa-graduation-cap";
    title = "Educations";
    
    List_items;
    
    constructor() {
        this.icon = resume.educations.icon;
        this.title = resume.educations.title;
        this.List_items = resume.educations.items_list;
    }
    
}
