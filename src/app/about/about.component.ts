import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { ServiceComponent } from './service/service.component';
import { about } from '../../assets/variables';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  
    @ViewChild('services_con',{ read: ViewContainerRef , static: true}) services_con : ViewContainerRef ;

    data:any;

    Services:any;

    constructor(private resolver: ComponentFactoryResolver) {
        this.data = about;
        this.Services = about.Services;
        (async () => {
            await setTimeout(() => {}, 10);
            for (let i = 0; i < this.Services.length; i++) {
                this.creatServ(this.Services[i]);
            }
        })();
    }

    creatServ(service){
        let postFactory = this.resolver.resolveComponentFactory(ServiceComponent);
        let ServComponent = this.services_con.createComponent(postFactory);
        ServComponent.instance.service = service;
    }

}
