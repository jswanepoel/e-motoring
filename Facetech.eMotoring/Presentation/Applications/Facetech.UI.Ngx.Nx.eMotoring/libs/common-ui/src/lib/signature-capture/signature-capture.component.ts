import {
  Component,
  OnInit,
  OnDestroy,
  NgZone,
  Input
} from '@angular/core';
import { Subscription } from 'rxjs';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

import { BiometricService } from '../../services';
import { ApplicantRequestService, ApplicantSignatureRequest } from '../biometric-finger-print';

const photoPlaceholder: string = '../../../assets/signature.png';

@Component({
  selector: 'facetech-signature-capture',
  templateUrl: './signature-capture.component.html',
  styleUrls: ['./signature-capture.component.css']
})
export class SignatureCaptureComponent implements OnInit, OnDestroy {
  @Input() capturedImage: any = null;
  private imageStreamRef: Subscription = null;
  public faGraduationCap = faGraduationCap;
  public faTasks = faTasks;
  public instructions: string[] = [
    '1.  Click "Capture" to initialize the device.',
    '2.  The client needs to sign and click "OK" on the device.',
    '3.  The signature will then be populated on-screen.'
  ];

  public constructor(
    private biometricService: BiometricService,
    private applicantRequestService: ApplicantRequestService,
    private zone: NgZone) {

    this.capturedImage = {};
  }

  public async ngOnInit() {
    this.zone.run(() => {
      this.capturedImage = '../../../assets/bg-white.jpg';
    });

    //this.stopCapture();
    this.biometricService.onDeviceInit()
      .subscribe(() => {
        console.log('Device Initialized');
      });

    this.biometricService.connectSignalR();
    await this.biometricService.initializeNewDevice('SIGNATURE.STREAM.EPAD');

    this.imageStreamRef = this.biometricService.getImageSnapshot()
      .subscribe(img => {
        this.zone.run(() => {
          if (img) {
            this.capturedImage = 'data:image/jpg;base64,' + img;
          }
        });
      });

    //this.biometricService.getImageSnapshot().subscribe((img) => {
    //  this.zone.run(() => {
    //    if (img) {
    //      console.log("IMAGE RECEIVED");
    //      this.capturedImage = `data:image/jpg;base64,${img}`;
    //    }
    //  });
    //});
  }

  public startCapture() {
    this.biometricService.startCapture();
  }

  public stopCapture() {
    this.biometricService.stopCapture();
  }

  public getImageSnaphot() {
    //this.biometricService.requestSnapShot();
    this.capturedImage = '../../../assets/bg-white.jpg';
    this.startCapture();
  }

  public ngOnDestroy(): void {
    this.imageStreamRef.unsubscribe();
    this.biometricService.stopCapture(true);
  }

  public changeNotification(): void {
    this.capturedImage = photoPlaceholder;
    this.applicantRequestService.addApplicantSignature(new ApplicantSignatureRequest(null, this.capturedImage));
  }
}
