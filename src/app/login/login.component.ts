import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConnectService } from '../connect.service';


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
    private service: ConnectService,
    private fb: FormBuilder,
    private router: Router) {
    this.form = this.fb.group({
      user: ['admin'],
      pw: ['123456']
    });
  }

  ngOnInit(): void {
    /*
    localStorage.setItem('admin', JSON.stringify({
      admin: {
        user: 'admin',
        password: '123456',
        initFlag: '0',
        ip: '102.168.1.20',
        netmask: '255.255.255.0',
      },
      CameraBaseInfo: {
        cameraID: '1',
        cameraModel: 'ms_mini',
        cameraSerialNumber: '1423619083210',
        cameraInstallDate: '202011111922',
        cameraUseYN: '0'
      },
      CameraLocaionInfo: {
        siteID: 'site',
        blockID: 'block',
        zoneID: 'zone',
      },
      CameraNetworkInfo: {
        localIP: '127.0.0.1',
        localPortIR: '5555',
        localPortRTSP: '8868',
        netmask: '255.255.255.0',
        gateway: '0.0.0.0',
      },
      CameraHostInfo: {
        hostIpRecon: '192.168.1.100',
        hostPortRecon: '8866',
        hostIpCloud: '192.168.1.200',
        hostPortCloud: '0000',
        hostIpMqtt: '192.168.1.100',
        hostportMqtt: '8869',
        mqttUserID: ['ckt_user'],
        mqttPassword: 'ckt_user',
        mqttPubTopic: 'camera/test1',
      },
      CamerParameterInfo: {
        flagOpMode: '0',
        flagFaceTemperature: '0',
        flagFaceMask: '0',
        flagRecognition: '0',
        flagLiveness: '1',
        threshold: '0.9',
        iouThreshold: '0.4',
      },
      MargineInfo: {
        marginX: '100',
        marginY: '80',
        scaleX: '0.52',
        scaleY: '0.48',
      },
      FaceMinSizeInfo: {
        faceMinSize: '40'
      }
    }));
    */
  }

  onSubmit(): void {
    // console.log(this.form.value);
    this.service.login(this.form.value.user, this.form.value.pw).subscribe(data => {
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
