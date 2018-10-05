import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public toggleMenu:boolean = false;
  public toggleMenu2:boolean = false;
  public toggleMenu3:boolean = false;
  public toggleMenu4:boolean = false;
  
    title = 'orange';

    toggle(){ this.toggleMenu = !this.toggleMenu; }
    toggle2(){ this.toggleMenu2 = !this.toggleMenu2; }
    toggle3(){ this.toggleMenu3 = !this.toggleMenu3; }
    toggle4(){ this.toggleMenu4 = !this.toggleMenu4; }

    yourValue1 = 60;
    yourValue2 = 50;
    yourValue3 = 90;
    yourValue4 = 40;
    yourValue5 = 60;
    yourValue6 = 90;
  
  ngOnInit(): void {
     
  }
  
}
