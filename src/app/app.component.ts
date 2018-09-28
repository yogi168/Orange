import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'orange';
  myFunction(id) {
    // $('#' + id).css('border-left', '5px solid yellow');
    //var val=true;
    
    //  $('#' + id).toggleClass('panel-group-yellow');
    
 }
}
