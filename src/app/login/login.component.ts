import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { ConnectService } from '../connect.service';
import { url } from '../models';
import { DOCUMENT } from '@angular/common';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  flag: string;
  passwd: string;
  constructor(
    // private service: ConnectService,
    private fb: FormBuilder,
    private router: Router,
    @Inject(DOCUMENT) document: any,
    private store: StoreService                     // 2. we need the injector to ..
  ) {
    this.form = this.fb.group({
      user: ['admin'],
      pw: ['123456']
    });
  }

  ngOnInit(): void {
    const serverurl = url;

  }

  onSubmit(): void {
    // console.log(this.form.value);
    this.store.login(this.form.value.user, this.form.value.pw).subscribe(data => {
      // console.log(data);
      if (data.message === 'SUCCESS') {
        this.router.navigate(['/camera']);
      } else if (data.message === 'CHANGEPW') {
        this.router.navigate(['/changepw']);
      } else if (data.message === 'NOTMATCHPW') {
        alert('Not match password.');
      } else {
        alert('Access denied');
      }
    });


  }




}
