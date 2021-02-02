import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    private service: ConnectService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(newpw, confirmpw): void {
    if (newpw === confirmpw) {
      this.service.changepassword(newpw)
        .subscribe(data => {
          const msg = data.message;
          if (msg === 'SUCCESS') {
            this.router.navigate(['/camera']);
          }
        });
    } else {
      alert('Not match password.');
    }
  }

}
