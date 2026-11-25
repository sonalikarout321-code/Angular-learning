import { Component } from '@angular/core';

@Component({
  selector: 'app-eventhandling',
  imports: [],
  templateUrl: './eventhandling.component.html',
  styleUrl: './eventhandling.component.css'
})
export class EventhandlingComponent {
  a: number = 4;
  b: number = 10;
  c: number = 0;

  add(){
    this.c = this.a + this.b;
  }
}
