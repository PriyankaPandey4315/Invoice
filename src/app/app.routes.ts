import { Routes } from '@angular/router';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { LoginComponent } from './loginsignup/login/login.component';
import { HospitalDashboardComponent } from './hospital-dashboard/hospital-dashboard.component';

export const routes: Routes = [
    {
        path:'',
        component:HospitalDashboardComponent
    },
    {
        path:'hospital-dashboard',
        component:HospitalDashboardComponent
    },
    
    {
        path:'loginsignup',
        component:LoginsignupComponent,
        children:[
            {
                path:'login',
                component:LoginComponent
            }
        ]
    }
];
