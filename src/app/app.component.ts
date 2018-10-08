import { Component, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


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

    arrName: number[];
    msg:string;

    constructor(private httpService: HttpClient){
        this.httpService.get('./assets/data.json').subscribe(
          data=>{
            this.arrName = data as number[];
          },
          (err:HttpErrorResponse) => {
            this.msg = "File not Found";
          }
        );
    }
  
  ngOnInit(): void {
     
  }
  
}
