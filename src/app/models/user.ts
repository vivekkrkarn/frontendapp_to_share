import {Designation} from "./designation";

export class User {
  id: number;
  name: string;
  username: string;
  password: string;
  designations: Designation[];


  constructor() {
    this.id = 0;
    this.name = '';
    this.username = '';
    this.password = '';
    this.designations = [];
  }

  
}


