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
import { PatientslistComponent } from './patients/patientslist/patientslist.component';
import { AccountsComponent } from './accounts/accounts.component';
import { SignupComponent } from './loginsignup/signup/signup.component';
import { ResetPasswordComponent } from './loginsignup/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './loginsignup/forgot-password/forgot-password.component';
import { HumanResourcesComponent } from './human-resources/human-resources.component';
import { AttendanceComponent } from './human-resources/attendance/attendance.component';
import { HolidaysComponent } from './human-resources/holidays/holidays.component';
import { HrapprovalsComponent } from './human-resources/hrapprovals/hrapprovals.component';
import { StaffLeavesComponent } from './human-resources/staff-leaves/staff-leaves.component';
import { IncomeComponent } from './accounts/income/income.component';
import { InvoiceDetailComponent } from './accounts/invoice-detail/invoice-detail.component';
import { InvoicesComponent } from './accounts/invoices/invoices.component';
import { ExpensesComponent } from './accounts/expenses/expenses.component';

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
                path:'patientslist',
                component:PatientslistComponent
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
        path:'accounts',
        component:AccountsComponent,
        children:[
            {
                path:'income',
                component:IncomeComponent
            },
            {
                path:'invoices',
                component:InvoicesComponent
            },
            {
                path:'expenses',
                component:ExpensesComponent
            },
            {
                path:'invoice-detail',
                component:InvoiceDetailComponent
            },
           
        ]
    },
    {
        path:'human-resources',
        component:HumanResourcesComponent,
        children:[
            {
                path:'attendence',
                component:AttendanceComponent
            },
            {
                path:'holidays',
                component:HolidaysComponent
            },
            {
                path:'hrapprovals',
                component:HrapprovalsComponent
            },
            {
                path:'staffleaves',
                component:StaffLeavesComponent
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
            },
            {
                path:'signup',
                component:SignupComponent
            },
            {
                path:'forgotpassword',
                component:ForgotPasswordComponent
            },
            {
                path:'resetpassword',
                component:ResetPasswordComponent
            }
        ]
    }
];
