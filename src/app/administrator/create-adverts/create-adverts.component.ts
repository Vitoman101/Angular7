import { Component, OnInit } from '@angular/core';
import {Adverts} from '../../models/adverts.model';
import {Users} from '../../models/users.model';
import {Courses} from '../../models/courses.model';
import {AdvertsService} from '../../services/adverts.service';
import {UsersService} from '../../services/users.service';
import {CoursesService} from '../../services/courses.service';

@Component({
  selector: 'app-create-adverts',
  templateUrl: './create-adverts.component.html',
  styleUrls: ['./create-adverts.component.css']
})
export class CreateAdvertsComponent implements OnInit {

  advert: Adverts = new Adverts();
  submitted = false;
  errorStatus = false;
  errorMessage = '';
  users: Users[] = [];
  courses: Courses[] = [];

  constructor(private advertService: AdvertsService, private userService: UsersService, private courseService: CoursesService) { }

  ngOnInit() {
    this.fillUsers();
    this.fillCourses();
  }

  save() {
    this.advertService.createAdvert(this.advert, this.advert.id_user, this.advert.id_course)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => {
          console.log(error);
          this.errorMessage = error.message;
          this.errorStatus = true;
        }
      );
    this.advert = new Adverts();
  }

  fillUsers() {
    this.userService.getUserList()
      .subscribe(
        data => {
          console.log(data);
          this.users = data;
        },
        error => {
          console.log(error);
          this.errorMessage = error.message;
          this.errorStatus = true;
        }
      );
  }

  fillCourses() {
    this.courseService.getCourseList()
      .subscribe(
        data => {
          console.log(data);
          this.courses = data;
        },
        error => {
          console.log(error);
          this.errorMessage = error.message;
          this.errorStatus = true;
        }
      );
  }

  onSubmit() {
    this.save();
  }

}
