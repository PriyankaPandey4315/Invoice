import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  isDropdownMenu = true;

  dropDown() {
    this.isDropdownMenu = !this.isDropdownMenu;
    console.log('Clicked' , 14)
  }

  

}
