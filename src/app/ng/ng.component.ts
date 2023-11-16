import { Component } from '@angular/core';

@Component({
  selector: 'app-ng',
  templateUrl: './ng.component.html',
  styleUrls: ['./ng.component.css']
})
export class NgComponent {
  condition: boolean=false;
  toggle(){
    this.condition=!this.condition;
}
}
