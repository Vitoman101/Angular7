import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AdvertsService } from 'src/app/services/adverts.service';
import { Adverts } from 'src/app/models/adverts.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService, private advert: AdvertsService) { }

  errorStatus = false;
  errorMessage = '';
  adverts: Adverts[] = [];
  pageOfItems: Array<any>;

  ngOnInit() {
    this.setRole();
    this.getAdvertsOfUser();
  }


  //this function sets role for a user
  //this is not pernament solution, since I get redirected from login function here 
  //and this gets called.
  //this sould have been called inside 'callback'
  //HOWEVER, it works for now.
  setRole() {
    var _url = "http://localhost:4200/roles";
    this.auth.getUser$().subscribe(
      res => {
        this.auth.role = res[_url][0];
      }
    )
  }

  getAdvertsOfUser() {
    this.advert.getAdvertList()
      .subscribe(
        data => {
          this.adverts = data;
        },
        error => {
          console.log(error);
          this.errorMessage = error.message;
          this.errorStatus = true;
        }
      )
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
  }

}