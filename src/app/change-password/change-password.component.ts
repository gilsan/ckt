import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(oldpw, newpw, confirmpw): void {

  }

}
