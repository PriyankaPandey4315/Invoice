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
  isDropDownMenuList = [
    {isChecked:false,type:'doctor'},
    {isChecked:false,type:'patient'},

  ]

  dropDown(type:string) {
    switch(type){
      case 'doctor':
      this.setDropDown(type);
      break;
      case 'patient':
        this.setDropDown(type)
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
