import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {User} from "../models/user";
import {DesignationShareService} from "../services/datashareservice/designationshareservice";
import {DesignationService} from "../services/designation.service";
import {Router} from "@angular/router";
import {UserShareService} from "../services/datashareservice/usershareservice";
import {UserService} from "../services/user.service";
import {Designation} from "../models/designation";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit{
  selectedUser: User = new User();

  errorMessage = '';
  designations: Designation[];


  constructor(private userShareService: UserShareService,
              private userService: UserService,
              private designationService: DesignationService,
              private router: Router) {
    this.designations = [];
  }


  ngOnInit(): void {

    this.userShareService.selectedUser$.subscribe((value) => {
      this.selectedUser = value;
      console.log("selected user to edit is"+JSON.stringify(this.selectedUser));
    });


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


  onSubmit(userForm: NgForm) {


    if (userForm.valid) {
      this.userService.updateUser(this.selectedUser).subscribe(
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
