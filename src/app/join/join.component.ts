import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from '@angular/forms';
@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  joinIN:FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required , Validators.minLength(4), Validators.maxLength(11)] ),
    lastName: new FormControl(null, [Validators.required , Validators.minLength(4), Validators.maxLength(11)] ),
    age: new FormControl(null, [Validators.required , Validators.min(16), Validators.max(120)]),
    email: new FormControl(null, [Validators.required , Validators.email]),
    password: new FormControl(null,  Validators.pattern('^[A-Z][a-z0-9]{8,20}$')),
  })
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(formData){
    console.log(formData)
  }
}
