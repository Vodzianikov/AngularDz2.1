import { Component } from '@angular/core';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})
export class IpComponent {
  Fam:string ="Водяников"
  name:string ="Ярослав"
  Otcestvo:string = "Ярослав"
  phoneNumber:number = +375252502886
  DateOfBirth:string =  "2002.11.24"
}
