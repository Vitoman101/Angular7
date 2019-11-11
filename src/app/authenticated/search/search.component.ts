import { Component, OnInit } from '@angular/core';
import { AdvertsService } from 'src/app/services/adverts.service';
import { Adverts } from 'src/app/models/adverts.model';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  errorStatus = false;
  errorMessage = '';
  adverts: Adverts[] = [];

  constructor(private advert: AdvertsService) { }

  ngOnInit() {
    this.fillAdverts();
  }

  fillAdverts() {
    this.advert.getAdvertList()
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
