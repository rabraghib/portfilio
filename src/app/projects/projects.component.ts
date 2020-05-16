import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { projects } from '../../assets/variables';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

    nav_list:Array<any> = ["All","Web","Mobile","Desktop"];
    nav_items;
    selected_NI : string;
    Projects;

    constructor(private route:ActivatedRoute,private router:Router) {

        this.nav_items = projects.nav_items;
        this.Projects = projects.projects_list;

        this.route.paramMap.subscribe(params=>{
            this.selected_NI= (params.get('theme')) ? params.get('theme') : "";
        },err=>{
            console.error(err);
        });
        let URL_is_Auth:boolean = false;
        this.nav_list.findIndex(value => {
            if (this.selected_NI === value) {
                URL_is_Auth = true;
            }
        });
        if (!URL_is_Auth) {
            this.router.navigate(['/projects/All']);
        }
        
    }

}
