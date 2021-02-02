import { SubSink } from 'subsink';
import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';  //  OnDestroy 추가
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, filter } from 'rxjs/operators';
import { ClrForm } from '@clr/angular';
import { ICamera } from '../camer.info';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cameraset',
  templateUrl: './cameraset.component.html',
  styleUrls: ['./cameraset.component.scss']
})
export class CamerasetComponent implements OnInit, OnDestroy {

  url = 'http://192.168.1.25:3000';

  private subs = new SubSink();

  @ViewChild(ClrForm, { static: true }) clrForm;
  cktGroup: FormGroup;

  cameraInfo: ICamera;
  flagOpMode: number;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }
  disableSelect = new FormControl(false);
  ngOnInit(): void {
    this.init();

    /*
    this.http.get(`${this.url}/readfile`)
      .subscribe((data: any) => {
        console.log(data);
        let cameraID: string;
        let cameraModel: string;
        let cameraserialNum: string;
        let cameraInstallDate: string;
        let cameraUseyn: string;
        let siteID: string;
        let blockID: string;
        let zoneID: string;
        let localIP: string;
        let localPortIr: string;
        let localPortRtsp: string;
        let netmask: string;
        let gateway: string;
        let hostIrRecon: string;
        let hostPortRecon: string;
        let hostIpCloud: string;
        let hostPortCloud: string;
        let hostIpMqtt: string;
        let hostportMqtt: string;
        let mqttUserId: string;
        let mqttPassword: string;
        let mqttPubTopic: string;
        let flagOpMode: string;
        let flagFaceTemperature: string;
        let flagFaceMask: string;
        let flagRecongnition: string;
        let flagLiveness: string;
        let threshold: string;
        let iouthreshold: string;
        let marginX: string;
        let marginY: string;
        let scaleX: string;
        let scaleY: string;
        let faceMinSize: string;


        const result = this.loadData(data);

        const value = result.filter(item => item[0].charAt(0) !== '[');
        value.forEach(item => {
          const items = item[0].split('=');
          console.log(items);
          if (items[0] === 'cameraID') {
            cameraID = items[1];
          } else if (items[0] === 'cameraModel') {
            cameraModel = items[1];
          } else if (items[0] === 'cameraserialNum') {
            cameraserialNum = items[1];
          } else if (items[0] === 'cameraInstallDate') {
            cameraInstallDate = items[1];
          } else if (items[0] === 'cameraUseyn') {
            cameraUseyn = items[1];
          } else if (items[0] === 'siteID') {
            siteID = items[1];
          } else if (items[0] === 'blockID') {
            blockID = items[1];
          } else if (items[0] === 'zoneID') {
            zoneID = items[1];
          } else if (items[0] === 'localIP') {
            localIP = items[1];
          } else if (items[0] === 'localIP') {
            localPortIr = items[1];
          } else if (items[0] === 'localPortRtsp') {
            localPortRtsp = items[1];
          } else if (items[0] === 'netmask') {
            netmask = items[1];
          } else if (items[0] === 'gateway') {
            gateway = items[1];
          } else if (items[0] === 'hostIrRecon') {
            hostIrRecon = items[1];
          } else if (items[0] === 'hostPortRecon') {
            hostPortRecon = items[1];
          } else if (items[0] === 'hostIpCloud') {
            hostIpCloud = items[1];
          } else if (items[0] === 'hostPortCloud') {
            hostPortCloud = items[1];
          } else if (items[0] === 'hostIpMqtt') {
            hostIpMqtt = items[1];
          } else if (items[0] === 'hostportMqtt') {
            hostportMqtt = items[1];
          } else if (items[0] === 'mqttUserId') {
            mqttUserId = items[1];
          } else if (items[0] === 'mqttPassword') {
            mqttPassword = items[1];
          } else if (items[0] === 'mqttPubTopic') {
            mqttPubTopic = items[1];
          } else if (items[0] === 'flagOpMode') {
            flagOpMode = items[1];
            this.flagOpMode = parseInt(items[1], 10);
          } else if (items[0] === 'flagFaceTemperature') {
            flagFaceTemperature = items[1];
          } else if (items[0] === 'flagFaceMask') {
            flagFaceMask = items[1];
          } else if (items[0] === 'flagRecongnition') {
            flagRecongnition = items[1];
          } else if (items[0] === 'flagLiveness') {
            flagLiveness = items[1];
          } else if (items[0] === 'threshold') {
            threshold = items[1];
          } else if (items[0] === 'iouThreshold') {
            iouthreshold = items[1];
          } else if (items[0] === 'marginX') {
            marginX = items[1];
          } else if (items[0] === 'marginY') {
            marginY = items[1];
          } else if (items[0] === 'scaleX') {
            scaleX = items[1];
          } else if (items[0] === 'scaleY') {
            scaleY = items[1];
          } else if (items[0] === 'faceMinSize') {
            faceMinSize = items[1];
          }

          this.cktGroup.patchValue({ cameraID });
          this.cktGroup.patchValue({ cameraModel });
          this.cktGroup.patchValue({ cameraserialNum });
          this.cktGroup.patchValue({ cameraInstallDate });
          this.cktGroup.patchValue({ cameraUseyn });
          this.cktGroup.patchValue({ siteID });
          this.cktGroup.patchValue({ blockID });
          this.cktGroup.patchValue({ zoneID });
          this.cktGroup.patchValue({ localIP });
          this.cktGroup.patchValue({ localPortIr });
          this.cktGroup.patchValue({ localPortRtsp });
          this.cktGroup.patchValue({ netmask });
          this.cktGroup.patchValue({ gateway });
          this.cktGroup.patchValue({ hostIrRecon });
          this.cktGroup.patchValue({ hostPortRecon });
          this.cktGroup.patchValue({ hostIpCloud });
          this.cktGroup.patchValue({ hostPortCloud });
          this.cktGroup.patchValue({ hostIpMqtt });
          this.cktGroup.patchValue({ hostportMqtt });
          this.cktGroup.patchValue({ mqttUserId });
          this.cktGroup.patchValue({ mqttPassword });
          this.cktGroup.patchValue({ mqttPubTopic });
          this.cktGroup.patchValue({ flagOpMode });
          this.cktGroup.patchValue({ flagFaceTemperature });
          this.cktGroup.patchValue({ flagFaceMask });
          this.cktGroup.patchValue({ flagRecongnition });
          this.cktGroup.patchValue({ flagLiveness });
          this.cktGroup.patchValue({ threshold });
          this.cktGroup.patchValue({ iouthreshold });
          this.cktGroup.patchValue({ marginX });
          this.cktGroup.patchValue({ marginY });
          this.cktGroup.patchValue({ scaleX });
          this.cktGroup.patchValue({ scaleY });
          this.cktGroup.patchValue({ faceMinSize });
        });

      });
      */

    /* 
    this.http.get(`${this.url}/readfile`)
      .subscribe((data: ICamera) => {
        console.log(data);
        this.cktGroup.setValue({
          cameraID: data.cameraID,
          cameraModel: data.cameraModel,
          cameraserialNum: data.cameraInstallDate,
          cameraInstallDate: data.cameraInstallDate,
          cameraUseyn: data.cameraUseyn,
          siteID: data.siteID,
          blockID: data.blockID,
          zoneID: data.zoneID,
          localIP: data.localIP,
          localPortIr: data.localPortIr,
          locallPortRtsp: data.locallPortRtsp,
          netmask: data.netmask,
          gateway: data.gateway,
          hostPortRecon: data.hostPortRecon,
          hostIpCloud: data.hostIpCloud,
          hostPortCloud: data.hostPortCloud,
          hostIpMqtt: data.hostIpMqtt,
          hostportMqtt: data.hostportMqtt,
          mqttUserId: data.mqttUserId,
          mqttPassword: data.mqttPassword,
          mqttPubTopic: data.mqttPubTopic,
          flagOpMode: data.flagOpMode,
          flagFaceTemperature: data.flagFaceTemperature,
          flagFaceMask: data.flagFaceMask,
          flagRecongnition: data.flagRecongnition,
          flagLiveness: data.flagLiveness,
          threshold: data.threshold,
          iou_threshold: data.iou_threshold,
          marginX: data.marginX,
          marginY: data.marginY,
          scaleX: data.scaleX,
          scaleY: data.scaleY,
          faceMinSize: data.faceMinSize
        });

  });
  */
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
      flagOpMode: ['0'],
      flagFaceTemperature: ['0'],
      flagFaceMask: ['0'],
      flagRecognition: ['0'],
      flagLiveness: ['1'],
      threshold: ['0.9'],
      iou_threshold: ['0.4'],
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


  loadData(file: ArrayBuffer | string): string[] {
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

  logout(): void {
    this.router.navigate(['/login']);
  }

}
