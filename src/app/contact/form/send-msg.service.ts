import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { email_send_url } from '../../../assets/variables';

@Injectable({
  providedIn: 'root'
})
export class SendMsgService {

  constructor(private http: HttpClient) { }

  send_msg(fdata):Observable<any>{
    let formData = new FormData();
    formData.append('name',fdata.name);
    formData.append('email',fdata.email);
    formData.append('subject',fdata.subject);
    formData.append('msg_body',fdata.msg_body);
    formData.append('send_btn','true');
    return this.http.post(email_send_url,formData);
  }
    
}
