import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {Designation} from "../../models/designation";

@Injectable()
export class DesignationShareService {
  private designation$ = new BehaviorSubject<Designation>(new Designation());
  selectedDesignation$ = this.designation$.asObservable();
  constructor() {}

  setDesignationData(designation: Designation) {
    this.designation$.next(designation);
  }
}
