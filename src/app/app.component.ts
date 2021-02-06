import { SubSink } from 'subsink';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';  //  OnDestroy 추가
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, filter } from 'rxjs/operators';
import { ClrForm } from '@clr/angular';
import { ICamera } from './camer.info';
import { DOCUMENT } from '@angular/common';
import { StoreService } from './store.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
// OnDestroy 추가
export class AppComponent implements OnInit, OnDestroy {


  url = 'http://192.168.1.25:3000';

  private subs = new SubSink();

  @ViewChild(ClrForm, { static: true }) clrForm;
  cktGroup: FormGroup;

  cameraInfo: ICamera;
  flagOpMode: number;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    @Inject(DOCUMENT) document: any,
    private store: StoreService,
  ) { }
  disableSelect = new FormControl(false);
  ngOnInit(): void {
    // console.log(document.location.href);
    const url = document.location.href.slice(0, -1) + ':3000';
    this.store.setUrl(url);
  }

  init(): void {
    this.cktGroup = this.fb.group({
      cameraID: ['1'],
      cameraModel: ['ms_mini'],
      cameraSerialNumber: ['1423619083210'],
      cameraInstallDate: ['202011111922'],
      cameraUseYN: ['0'],
      siteID: ['site'],
      blockID: ['block'],
      zoneID: ['zone'],
      localIP: ['127.0.0.1'],
      localPortIR: ['5555'],
      localPortRTSP: ['8868'],
      netmask: ['255.255.255.0'],
      gateway: ['0.0.0.0'],
      hostIpRecon: ['192.168.1.100'],
      hostPortRecon: ['8866'],
      hostIpCloud: ['192.168.1.200'],
      hostPortCloud: ['0000'],
      hostIpMqtt: ['192.168.1.100'],
      hostportMqtt: ['8869'],
      mqttUserID: ['ckt_user'],
      mqttPassword: ['ckt_user'],
      mqttPubTopic: ['camera/test1'],
      flagOpMode: [0],
      flagFaceTemperature: ['0'],
      flagFaceMask: ['0'],
      flagRecognition: ['0'],
      flagLiveness: ['1'],
      threshold: ['0.9'],
      iouThreshold: ['0.4'],
      marginX: ['100'],
      marginY: ['80'],
      scaleX: ['0.52'],
      scaleY: ['0.48'],
      faceMinSize: ['40']
    });


  }
  // 추가
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  submit(): void {
    console.log(this.cktGroup.value);
    if (this.cktGroup.invalid) {
      this.clrForm.markAsTouched();
    } else {
      console.log(this.cktGroup.value);
      this.subs.sink = this.http.post(`${this.url}/makefile`, this.cktGroup.value)
        .subscribe(data => {
          console.log(data);
          alert('화일을 만들었습니다.');
        });
    }
  }
  // 추가
  reboot(): void {
    this.http.get(`${this.url}/reboot`)
      .subscribe(data => {
        alert('실행했습니다.');
      });
  }

  parse_tsv(s, f): void {
    s = s.replace(/,/g, ';');
    let ixEnd = 0;
    for (let ix = 0; ix < s.length; ix = ixEnd + 1) {
      ixEnd = s.indexOf('\n', ix);
      if (ixEnd === -1) {
        ixEnd = s.length;
      }
      const row = s.substring(ix, ixEnd).split('\t');
      f(row);
    }
  }

  // tslint:disable-next-line: typedef
  // tslint:disable-next-line: ban-types
  loadData(file: ArrayBuffer | string) {
    let rowCount = 0;
    const scenarios = [];
    this.parse_tsv(file, (row) => {
      rowCount++;
      if (rowCount >= 0) {
        scenarios.push(row);
      }
    });
    return scenarios;
  }

  selected(value: number): boolean {
    if (value === this.flagOpMode) {
      return true;
    }
    return false;
  }

}
