import { Component, OnInit } from '@angular/core';
import { Logins } from 'src/app/models/logins.model';
import { LoginsService } from 'src/app/services/logins.service';
import { UsersService } from 'src/app/services/users.service';
import { Users } from 'src/app/models/users.model';

@Component({
  selector: 'app-create-login',
  templateUrl: './create-login.component.html',
  styleUrls: ['./create-login.component.css']
})
export class CreateLoginComponent implements OnInit {

  login: Logins = new Logins;
  submitted = false;
  errorStatus = false;
  errorMessage = '';
  user: Users[] = [];

  constructor(private loginsService: LoginsService, private usersService: UsersService) { }

  ngOnInit() {
    this.fillUsers();
  }

  newCourse(): void {
    this.submitted = false;
    this.login = new Logins();
  }

  save() {
    this.loginsService.createLogin(this.login, this.login.id_user)
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
    this.login = new Logins();
  }

  fillUsers() {
    this.usersService.getUserList()
      .subscribe(
        data => {
          console.log(data);
          this.user = data;
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
