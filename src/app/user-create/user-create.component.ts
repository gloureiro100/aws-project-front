import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  userForm: FormGroup
  isLoadingResults = false;

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      name: [null, Validators.required],
      email: [null, Validators.required]
    })
  }

  onFormSubmit() {
    console.log(this.userForm)
    this.isLoadingResults = true;
    this.api.postUser(this.userForm.value)
      .then(async (res) => {
        this.isLoadingResults = false;
        this.router.navigate(['/user-list']);
      }, async (err: any) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
