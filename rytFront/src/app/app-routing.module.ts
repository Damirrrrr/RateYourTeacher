import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityComponent } from './university/university.component';
import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'teacher', component: TeacherComponent},
  { path: 'university', component: UniversityComponent },
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
