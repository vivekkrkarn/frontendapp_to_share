import {Component, OnInit} from '@angular/core';
import {User} from "../models/user";
import {Designation} from "../models/designation";
import {UserService} from "../services/user.service";
import {DesignationService} from "../services/designation.service";
import {Router} from "@angular/router";
import {FormBuilder, NgForm, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  user: User;
  designations: Designation[];
  errorMessage = '';

  constructor(private userService: UserService,
              private designationService: DesignationService,
              private router: Router,) {
    this.user = new User();
    this.user.designations = [];
    this.designations = [];

  }

  ngOnInit(): void {
    this.getDesignations();
  }



  getDesignations() {
    this.designationService.getDesignations()
      .subscribe(
        designations => {
          this.designations = designations;
          console.log("loaded designations are"+JSON.stringify(this.designations));
        },
        error => this.errorMessage = <any>error
      );
  }

  addUser() {
    this.userService.createUser(this.user)
      .subscribe(
        () => {
          this.router.navigate(['/user']);
        },

        (error) => {
          this.errorMessage = error;
          console.log(this.errorMessage);
          this.router.navigate(['/user']);
          window.location.reload();
        }

      );
  }



  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.createUser(this.user).subscribe(
        (response) => {
          //form.reset();
          console.log("response is"+JSON.stringify(response));
          this.router.navigate(['/user']);
        },
        (error) => {
          this.errorMessage = error;
          console.log(this.errorMessage);
          this.router.navigate(['/user']);
          //window.location.reload();
        }
      );
    }
  }


}
