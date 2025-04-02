import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menuItems: any;
  menu:any;
  isSidebarExpanded = true;

  toggleDrawer() {
    this.isSidebarExpanded = !this.isSidebarExpanded;
    console.log('Clicked' , 14)
  }

  

}
