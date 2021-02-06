import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { StoreService } from './store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// OnDestroy 추가
export class AppComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) document: any,
    private store: StoreService,
  ) { }

  ngOnInit(): void {
    const url = document.location.href.slice(0, -1) + ':3000';
    this.store.setUrl(url);
  }

}
