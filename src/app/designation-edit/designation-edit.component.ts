import {Component, OnInit} from '@angular/core';
import {DesignationShareService} from "../services/datashareservice/designationshareservice";
import {Designation} from "../models/designation";
import {DesignationService} from "../services/designation.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-designation-edit',
  templateUrl: './designation-edit.component.html',
  styleUrls: ['./designation-edit.component.css']
})
export class DesignationEditComponent implements OnInit {

  selectedDesignation: Designation = new Designation();


   constructor(private designationShareService: DesignationShareService,
               private designationService: DesignationService,
               private router: Router) {

   }

    ngOnInit(): void {

      this.designationShareService.selectedDesignation$.subscribe((value) => {
        this.selectedDesignation = value;
        console.log("selected designation to edit is"+JSON.stringify(this.selectedDesignation));
      });

    }




  onSubmit() {
    this.designationService.updateDesignation(this.selectedDesignation)
      .subscribe((value) => {
        console.log("updated designation to:"+JSON.stringify(value));
        //navigate back to list
        this.router.navigate(['/designation'])

      });
  }
}
