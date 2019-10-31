import { Component, OnInit } from '@angular/core';
import { Adverts } from '../../models/adverts.model';
import { Users } from '../../models/users.model';
import { Courses } from '../../models/courses.model';
import { AdvertsService } from '../../services/adverts.service';
import { UsersService } from '../../services/users.service';
import { CoursesService } from '../../services/courses.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.css']
})
export class AdvertisementComponent implements OnInit {

  advert: Adverts = new Adverts();
  submitted = false;
  errorStatus = false;
  errorMessage = '';
  users: Users[] = [];
  courses: Courses[] = [];

  constructor(public auth: AuthService, private advertService: AdvertsService, private userService: UsersService, private courseService: CoursesService) { }

  ngOnInit() {
    this.fillUsers();
    this.fillCourses();
  }

  save() {
    this.advert.nicknamePoster = this.auth.userProfile$.source.value.nickname;
    this.advert.datePosted = new Date();
    this.advertService.createAdvert(this.advert, this.advert.id_course)
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
