import {Component, OnInit} from '@angular/core';
import {Designation} from "../models/designation";
import {User} from "../models/user";
import {DesignationService} from "../services/designation.service";
import {DesignationShareService} from "../services/datashareservice/designationshareservice";
import {Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {UserShareService} from "../services/datashareservice/usershareservice";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  errorMessage = '';


  constructor(private userService: UserService,
              private userShareService: UserShareService,
              private router: Router) {

    this.users = [];
  }


  ngOnInit(): void {
    this.getUsers();
  }


  getUsers() {
    this.userService.getUsers()
      .subscribe(
        users => {
          this.users = users;
          console.log(this.users);
        },
        error => {
          this.errorMessage = error.message;
          console.log("error in getting users -"+this.errorMessage);
        }
      );
  }

  createUser() {
    this.router.navigate(['/adduser']);
  }

  editUser(user: User) {
    this.userShareService.setSelectedUser(user);
    this.router.navigate(['/edituser']);
  }


  
  deleteUser(user: User) {
    if (confirm("Are you sure you want to delete this user?")) {
      this.userService.deleteUser(user.id).subscribe(
        (value) => {
          console.log("delete response is"+JSON.stringify(value));
          this.getUsers();
          window.location.reload();
        },
        (error) => {
          console.log(error);
          this.getUsers();
          window.location.reload();
        }
      );
    }
  }


}
