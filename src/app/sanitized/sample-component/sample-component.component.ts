import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import validator from 'validator';


@Component({
  selector: 'app-sample-component',
  templateUrl: './sample-component.component.html',
  styleUrls: ['./sample-component.component.css']
})
export class SampleComponentComponent implements OnInit{

  username: string;

  constructor () {
    this.username = '';
  }

  ngOnInit(): void {
  }

  onSubmit(sampleForm: NgForm) {
    if (sampleForm.valid) {
      console.log("value of original username is - "+this.username);
      //second layer of validation we can put here on this.username

      //case 1
      //using third party library
      //https://www.npmjs.com/package/validator
      //it has no benefit for sanitization of string for sql injection purpose, although we can validate other things
      let sanitizedUsername = validator.escape(this.username);
      console.log("value of sanitized username is - "+sanitizedUsername);

      //case 2
      //also there is another library
      //https://www.npmjs.com/package/string-sanitizer
      //tried but not compatible with angular
      //and under the hood this library is also using regex

      //case 3
      //we can write our own utility function like //sanitizeString
      let sanitizedUsernameWithOurOwnFunction = this.sanitizeString(this.username);
      console.log("value of sanitized username with our own function is - "+ sanitizedUsernameWithOurOwnFunction);

    }
  }


  //our own method to sanitize a string input second layer of validation
  sanitizeString (str: string) {
    return str.replace(/[^a-zA-Z0-9_]/g, '');
  }


}
