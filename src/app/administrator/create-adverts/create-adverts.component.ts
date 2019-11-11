import { Component, OnInit } from '@angular/core';
import { Adverts } from '../../models/adverts.model';
import { Users } from '../../models/users.model';
import { Courses } from '../../models/courses.model';
import { AdvertsService } from '../../services/adverts.service';
import { UsersService } from '../../services/users.service';
import { CoursesService } from '../../services/courses.service';
import { AuthService } from 'src/app/services/auth.service';

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
  adverts: Adverts[] = [];

  constructor(private advertService: AdvertsService, private userService: UsersService, private courseService: CoursesService, private auth: AuthService) { }

  ngOnInit() {
    this.fillCourses();
    this.fillAdverts();
  }

  save() {
    this.auth.userProfile$.subscribe(data => {
      this.advert.nicknamePoster = data.nickname
    })
    this.advert.datePosted = new Date();
    this.advertService.createAdvert(this.advert, this.advert.id_course)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
          this.fillAdverts();
        },
        error => {
          console.log(error);
          this.errorMessage = error.message;
          this.errorStatus = true;
        }
      );
    this.advert = new Adverts();
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

  delete(id: number) {
    this.advertService.deleteAdvert(id)
      .subscribe(
        data => {
          console.log(data)
          this.fillAdverts();
        },
        error => {
          console.log(error);
          this.errorMessage = error.message;
          this.errorStatus = true;
        }
      )
  }

  onSubmit() {
    this.save();
  }

  fillAdverts() {
    this.advertService.getAdvertList()
      .subscribe(
        data => {
          console.log(data);
          this.adverts = data;
        },
        error => {
          console.log(error);
          this.errorMessage = error.message;
          this.errorStatus = true;
        }
      )
  }

}
