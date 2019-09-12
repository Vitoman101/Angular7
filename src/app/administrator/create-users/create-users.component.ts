import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  user: Users = new Users();
  submitted = false;
  errorStatus = false;
  errorMessage = '';

  constructor(private userService: UsersService) { }

  ngOnInit() {
  }

  newSection(): void {
    this.submitted = false;
    this.user = new Users();
  }

  save() {
    this.userService.createUser(this.user)
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
      console.log(this.user.emailId, this.user.firstName);
    this.user = new Users();
    
  }

  onSubmit() {
    this.save();
  }
}
