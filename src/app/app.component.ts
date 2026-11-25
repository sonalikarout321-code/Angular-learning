import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name : string  = 'Anil';
  age : number = 12;
  image: string = "https://media.istockphoto.com/id/520791880/photo/overhead-view-of-two-business-persons-in-the-lobby.jpg";
  isDisabled: boolean = true;
  message : string = "XYZ";


  showMessage(){
    this.message = "Welcome to my application";
  }
}
