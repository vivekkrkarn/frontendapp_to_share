import {Component, OnInit} from '@angular/core';
import {Designation} from "../models/designation";
import {DesignationShareService} from "../services/datashareservice/designationshareservice";
import {DesignationService} from "../services/designation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent implements OnInit {
  designation: Designation = new Designation();
  errorMessage = '';



  constructor(private designationService: DesignationService,
              private router: Router) {

  }


    ngOnInit(): void {

    }

  onSubmitAdd() {
    this.designationService.createDesignation(this.designation)
      .subscribe(
        () => {
          this.router.navigate(['/designation']);
        },
        error => {
          this.errorMessage = error.message;
          console.log("error in creating designation -"+this.errorMessage);
        }
      );
  }
}
