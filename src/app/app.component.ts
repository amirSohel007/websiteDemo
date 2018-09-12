import { Component } from '@angular/core';

declare var sideJs: any;
  
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {


 constructor(){
   sideJs.init();
 }

}
