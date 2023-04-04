import { Component, OnInit } from '@angular/core';
import { Designation } from '../models/designation';
import { DesignationService } from '../services/designation.service';
import {DesignationShareService} from "../services/datashareservice/designationshareservice";
import {Router} from "@angular/router";


@Component({
  selector: 'app-designation-list',
  templateUrl: './designation-list.component.html',
  styleUrls: ['./designation-list.component.css']
})


export class DesignationListComponent implements OnInit {


  designations: Designation[];
  errorMessage = '';

  constructor(private designationService: DesignationService,
              private designationShareService: DesignationShareService,
              private router: Router) {
    this.designations = [];
  }

  ngOnInit() {
    this.getDesignations();
  }

  getDesignations() {
    this.designationService.getDesignations()
      .subscribe(
        designations => {
          this.designations = designations;
          console.log(this.designations);
        },
        error => this.errorMessage = <any>error
      );
  }



  editDesignation(designation: Designation) {
    this.designationShareService.setDesignationData(designation);
    this.router.navigate(['/editdesignation']);
  }



  deleteDesignation(designation: Designation) {
    if (confirm("Are you sure you want to delete this designation?")) {
      this.designationService.deleteDesignation(designation.id).subscribe(
        (value) => {
          console.log("delete response is"+JSON.stringify(value));
          this.getDesignations();
          window.location.reload();
        },
        (error) => {
          console.log(error);
          this.getDesignations();
          window.location.reload();
        }
      );
    }

  }




  createDesignation() {
    this.router.navigate(['/adddesignation']);
  }
}
