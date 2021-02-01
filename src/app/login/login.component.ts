import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


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
    private fb: FormBuilder,
    private router: Router) {
    this.form = this.fb.group({
      user: ['admin'],
      pw: ['123456']
    });
  }

  ngOnInit(): void {
    // localStorage.setItem('cktUser', JSON.stringify({ initFlag: '0', pw: '123456' }));
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
  }

  onSubmit(): void {
    console.log(this.form.value);
    const userInfo = JSON.parse(localStorage.getItem('cktUser'));
    this.flag = userInfo.initFlag;
    this.passwd = userInfo.pw;
    console.log(userInfo, userInfo.initFlag, userInfo.pw);
    if (this.form.value.user === 'admin' && this.form.value.pw === '123456') {
      if (this.flag === null || this.flag === undefined || this.flag === '0') {
        const newpw = this.randomString(6, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        // localStorage.setItem('cktUser', JSON.stringify({ initFlag: '1', pw: newpw }));
        // alert(`비밀번호가 ${newpw} 로 변경 되었습니다.`);
      }
    } else if (this.form.value.user === 'admin' && this.form.value.pw === this.passwd) {
      if (this.flag === '1') {
        this.router.navigate(['/camera']);
      }

    }

  }

  goChangepw(): void {
    this.router.navigate(['/changepw']);
  }

  randomString(length, chars): string {
    let result = '';
    for (let i = length; i > 0; --i) { result += chars[Math.floor(Math.random() * chars.length)]; }
    return result;
  }


}
