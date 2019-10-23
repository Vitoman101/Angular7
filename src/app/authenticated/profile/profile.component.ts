import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth: AuthService) { }

  private email;

  ngOnInit() {
    this.kebab();
  }

  kebab() {
    var _url = "http://localhost:4200/roles";
    this.auth.getUser$().subscribe(
      res => {
        let role = res[_url];
        console.log(role)
      }
    )
  }
}