import { Component } from '@angular/core';
import { Teacher } from '../teacher';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  teachers: Teacher[] = [];

  constructor( ){
    console.log('constructor of Teacher is working!');

    this.teachers = [
      {
        id: 1,
    fullname: 'Bobur Mukhsimbayev',
    university : 'KBTU',
    rating: 5,
    discipline: 'Web-Development',
    degree: 'qwerty',
    description: 'asdfgh',
    url: 'a'
    },
    {
    id: 2,
    fullname: 'Beisenbek Baisakov',
    university : 'KBTU',
    rating: 5,
    discipline: 'ADS',
    degree: 'qwerty',
    description: 'asdfgh',
    url: 'a'
    }

    ]
  }
}
