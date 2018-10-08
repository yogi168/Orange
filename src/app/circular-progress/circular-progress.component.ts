import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-circular-progress',
  templateUrl: './circular-progress.component.html',
  styleUrls: ['./circular-progress.component.scss']
})
export class CircularProgressComponent implements OnInit {

  constructor() { }

  cssprop = 'circular-chart nill';
  strokes = '0 ,100';
  
  @Input() value;

  ngOnInit(): void {
    
    if (Number(this.value) > 0 && Number(this.value) <= 50) {
      this.cssprop = 'circular-chart green';
      this.strokes =  this.value +' ,'+100;
    }
    else if(Number(this.value) > 50 && Number(this.value) < 80) {
      this.cssprop = 'circular-chart blue';
      this.strokes =  this.value +' ,'+100;
    }
    else if(Number(this.value) > 80 && Number(this.value) < 100) {
      this.cssprop = 'circular-chart red';
      this.strokes =  this.value +' ,'+100;
    }  
  }

}
