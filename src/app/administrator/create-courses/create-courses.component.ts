import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/models/courses.model';
import { Sections } from 'src/app/models/sections.model';
import { CoursesService } from 'src/app/services/courses.service';
import { SectionsService } from 'src/app/services/sections.service';

@Component({
  selector: 'app-create-courses',
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.css']
})
export class CreateCoursesComponent implements OnInit {

  
  course: Courses = new Courses();
  submitted = false;
  errorStatus = false;
  errorMessage = '';
  section: Sections[] = [];

  constructor(private coursesService: CoursesService, private sectionService: SectionsService) { }

  ngOnInit() {
    this.fillSections();
  }

  newCourse(): void {
    this.submitted = false;
    this.course = new Courses();
  }

  save() {
    this.coursesService.createCourse(this.course, this.course.id_section)
      .subscribe(]
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
    this.course = new Courses();
  }

  fillSections() {
  this.sectionService.getSectionList()
    .subscribe(
      data => {
        console.log(data);
        this.section = data;
      },
      error => {
        console.log(error);
        this.errorMessage = error.message;
        this.errorStatus = true;
      }
    );
  }

  onSubmit() {
    console.log(this.course.title, this.course.code, this.course.id_section)
    this.save();
  }
}
