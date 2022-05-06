import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { StudentComponent } from './student/student.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

const routes: Routes =[
  {path:'',redirectTo:'student',pathMatch:'full'}, //means by default browser show this page
  {path:'student', component:StudentComponent},
  {path:'studentdetails',component:StudentdetailsComponent}
];

@NgModule({
  imports :[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }