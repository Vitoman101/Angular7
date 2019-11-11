import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { AdvertsService } from 'src/app/services/adverts.service';
import { Adverts } from 'src/app/models/adverts.model'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: string;
  reklama: any;
  errorStatus = false;
  errorMessage = '';

  constructor(private route: ActivatedRoute, public advert: AdvertsService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.getById(parseInt(this.id));
  }

  getById(id: number) {
    this.advert.getAdvert(id)
      .subscribe(
        data => {
          this.reklama = data;
        },
        error => {
          this.errorMessage = error.message;
          this.errorStatus = true;
        }
      )
  }

}
