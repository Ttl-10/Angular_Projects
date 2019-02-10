import { Component, OnInit } from '@angular/core';
//import { email } from '../email';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email="ab@cd.ef";
  constructor() { }

  ngOnInit() {
  }

}
