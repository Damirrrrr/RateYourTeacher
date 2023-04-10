import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityComponent } from './university/university.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  { path: 'teacher', component: TeacherComponent},
  { path: 'university', component: UniversityComponent },
  { path: '', redirectTo: '/teacher', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
