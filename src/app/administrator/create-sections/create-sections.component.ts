import { Component, OnInit } from '@angular/core';
import { Sections } from 'src/app/models/sections.model';
import { SectionsService } from 'src/app/services/sections.service';

@Component({
  selector: 'app-create-sections',
  templateUrl: './create-sections.component.html',
  styleUrls: ['./create-sections.component.css']
})
export class CreateSectionsComponent implements OnInit {

  section: Sections = new Sections();
  submitted = false;
  errorStatus = false;
  errorMessage = '';
  sections: Sections[] = [];



  constructor(private sectionService: SectionsService) { }

  ngOnInit() {
    this.fillSections();
  }

  newSection(): void {
    this.submitted = false;
    this.section = new Sections();
  }

  delete(id: number) {
    this.sectionService.deleteSection(id)
      .subscribe(
        data => {
          console.log(data)
          this.fillSections();
        },
        error => {
          console.log(error);
          this.errorMessage = error.message;
          this.errorStatus = true;
        }
      )
  }

  save() {
    this.sectionService.createSection(this.section)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
          this.fillSections();
        },
        error => {
          console.log(error);
          this.errorMessage = error.message;
          this.errorStatus = true;
        }
      );
    this.section = new Sections();
  }

  onSubmit() {
    this.save();
  }

  fillSections() {
    this.sectionService.getSectionList()
      .subscribe(data => {
        this.sections = data;
      })
  }

}
