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
  
  

  constructor(private sectionService: SectionsService) { }

  ngOnInit() {
  }

  newSection(): void {
    this.submitted = false;
    this.section = new Sections();
  }

  save() {
    this.sectionService.createSection(this.section)
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
    this.section = new Sections();
  }

  onSubmit() {
    this.save();
  }

}
