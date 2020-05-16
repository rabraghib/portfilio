import { Component } from '@angular/core';
import { SendMsgService } from './send-msg.service';
import { contact } from '../../../assets/variables';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

    dataSend = {
        name:"",
        email:"",
        subject:"",
        msg_body:""
    }
    
    placeholder;
    
    constructor(private SendServ : SendMsgService) {
        this.placeholder = contact.form_placeholder
    }
    
    contact(){
        let Res;
        this.SendServ.send_msg(this.dataSend).subscribe( res => {
            Res = res;
            console.log(Res);
        }, err => {
            Res = {
                status:500,
                errors:"we can't do this."
            }
            console.warn(err);
            console.log(Res);
        });
    }

}
