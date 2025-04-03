import { Routes } from '@angular/router';
import { LoginsignupComponent } from './loginsignup/loginsignup.component';
import { LoginComponent } from './loginsignup/login/login.component';
import { HospitalDashboardComponent } from './hospital-dashboard/hospital-dashboard.component';
import { MedicalDashboardComponent } from './medical-dashboard/medical-dashboard.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DentistDashboardComponent } from './dentist-dashboard/dentist-dashboard.component';
import { DoctorsDashboardComponent } from './doctors/doctors-dashboard/doctors-dashboard.component';
import { DoctorslistComponent } from './doctors/doctorslist/doctorslist.component';
import { DoctorscardsComponent } from './doctors/doctorscards/doctorscards.component';
import { AdddoctorComponent } from './doctors/adddoctor/adddoctor.component';
import { EditdoctorComponent } from './doctors/editdoctor/editdoctor.component';
import { DoctorsprofileComponent } from './doctors/doctorsprofile/doctorsprofile.component';
import { PatientDashboardComponent } from './patients/patient-dashboard/patient-dashboard.component';
import { PatientsComponent } from './patients/patients.component';
import { AddpatientComponent } from './patients/addpatient/addpatient.component';
import { EditpatientComponent } from './patients/editpatient/editpatient.component';
import { StaffComponent } from './staff/staff.component';
import { StafflistComponent } from './staff/stafflist/stafflist.component';
import { AddstaffComponent } from './staff/addstaff/addstaff.component';
import { EditstaffComponent } from './staff/editstaff/editstaff.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AppointComponent } from './appointments/appoint/appoint.component';
import { AppointmentlistComponent } from './appointments/appointmentlist/appointmentlist.component';
import { BookappointmentComponent } from './appointments/bookappointment/bookappointment.component';
import { EditappointmentComponent } from './appointments/editappointment/editappointment.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentlistComponent } from './departments/departmentlist/departmentlist.component';
import { AddComponent } from './departments/add/add.component';
import { EditComponent } from './departments/edit/edit.component';

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
        path:'medical-dashboard',
        component:MedicalDashboardComponent
    },
    {
        path:'dentist-dashboard',
        component:DentistDashboardComponent
    },
    {
        path:'doctors',
        component:DoctorsComponent,
        children:[
            {
                path:'doctors-dashboard',
                component:DoctorsDashboardComponent
            },
            {
                path:'doctorslist',
                component:DoctorslistComponent
            },
            {
                path:'doctorscards',
                component:DoctorscardsComponent
            },
            {
                path:'doctorsprofile',
                component:DoctorsprofileComponent
            },
            {
                path:'adddoctor',
                component:AdddoctorComponent
            },
            {
                path:'editdoctor',
                component:EditdoctorComponent
            },
        ]
    },
    {
        path:'patients',
        component:PatientsComponent,
        children:[
            {
                path:'patient-dashboard',
                component:PatientDashboardComponent
            },
            {
                path:'addpatient',
                component:AddpatientComponent
            },
            {
                path:'editpatient',
                component:EditpatientComponent
            },
        ]
    },
    {
        path:'staff',
        component:StaffComponent,
        children:[
            {
                path:'stafflist',
                component:StafflistComponent
            },
            {
                path:'addstaff',
                component:AddstaffComponent
            },
            {
                path:'editstaff',
                component:EditstaffComponent
            },
        ]
    },
    {
        path:'appointments',
        component:AppointmentsComponent,
        children:[
            {
                path:'appoint',
                component:AppointComponent
            },
            {
                path:'appointmentslist',
                component:AppointmentlistComponent
            },
            {
                path:'bookappointment',
                component:BookappointmentComponent
            },
            {
                path:'editappointment',
                component:EditappointmentComponent
            },
        ]
    },
    {
        path:'departments',
        component:DepartmentsComponent,
        children:[
            {
                path:'departmentlist',
                component:DepartmentlistComponent
            },
            {
                path:'add',
                component:AddComponent
            },
            {
                path:'edit',
                component:EditComponent
            },
        ]
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
