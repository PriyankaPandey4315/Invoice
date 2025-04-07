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

  isSidebarCollapsed = true;


  isDropdownMenu = true;
  isDropDownMenuList = [
    {isChecked:false,type:'doctor'},
    {isChecked:false,type:'patient'},
    {isChecked:false,type:'staff'},
    {isChecked:false,type:'appointments'},
    {isChecked:false,type:'departments'},
    {isChecked:false,type:'accounts'},
    {isChecked:false,type:'human-resources'},
    {isChecked:false,type:'salaries'},

  ]

  pinSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;

  }

  dropDown(type:string) {
    switch(type){
      case 'doctor':
      this.setDropDown(type);
      break;
      case 'patient':
      this.setDropDown(type);
      break;
      case 'staff':
      this.setDropDown(type);
      break;
      case 'appointments':
      this.setDropDown(type);
      break;
      case 'departments':
      this.setDropDown(type);
      break;
      case 'accounts':
      this.setDropDown(type);
      break;
      case 'human-resources':
      this.setDropDown(type);
      break;
      case 'salaries':
      this.setDropDown(type);
      break;
      default : ''
    }
    this.isDropdownMenu = !this.isDropdownMenu;
    console.log('Clicked' , 14)
  }

    setDropDown(type:string){
      this.isDropDownMenuList = this.isDropDownMenuList.map((val) => {
        if(val.type == type){
          val.isChecked = !val.isChecked
        }
        else val.isChecked = false
        return val
      })
    }
  

}
