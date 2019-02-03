import { Component, ViewChild, Input, NgZone, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription, Subject, of } from 'rxjs';
import { takeUntil, catchError } from 'rxjs/operators';

import { ImageMapAreaComponent } from '../image-map-area/image-map-area.component';
import { IApplicantFingerprintRequest, ApplicantFingerprintRequest } from './models/applicant-request.interface';
import { BiometricFingerPrint, BiometricFingerPrintItem } from './models/biometric-finger-print';
import { BiometricService } from '../../services/biometric/biometric.service';
import { ApplicantRequestService } from '../biometric-finger-print/applicant-request.service';

const photoPlaceHolder = '../../../assets/finger-print.jpg';

@Component({
  selector: 'biometric-finger-print',
  templateUrl: './biometric-finger-print.component.html',
  styleUrls: ['./biometric-finger-print.component.css']
})
export class BiometricFingerPrintComponent implements OnInit, OnDestroy {
  @ViewChild('imageMapArea') imageMapArea: ImageMapAreaComponent;

  @Input() fingerPrintImageStream: string = '../../../assets/bg-white.jpg';
  @Input() fingerPrintSnapshotQuality: number = 0;
  @Output('fingerStateChange') fingerStateChangeEvent = new EventEmitter<number[]>();

  private imageStreamRef: Subscription = new Subscription();
  private timeOutValue: any = null;
  private lastNodeIndex: number = -1;
  private nextHandNode: boolean = false;
  public fingerAvailabilityMarked: boolean = false;
  private unsubscribe$: Subject<number> = new Subject<number>();
  public availabilitySelectedState: string;
  public capturingSelectedState: string;
  public fingers: number[][] = [
    [4, 22],
    [15, 10],
    [22.5, 5],
    [33.5, 12.5],
    [45, 44],
    [55, 44],
    [66, 12.5],
    [77.5, 5],
    [85, 10],
    [96, 22]
  ];
  private fingerStatus: string[][] = [
    ['0', 'Missing'],
    ['1', 'Missing'],
    ['2', 'Missing'],
    ['3', 'Missing'],
    ['4', 'Missing'],
    ['5', 'Available'],
    ['6', 'Available'],
    ['7', 'Available'],
    ['8', 'Available'],
    ['9', 'Available']
  ];
  public captureSequence: number[] = [5, 4, 6, 3, 7, 2, 8, 1, 9, 0];
  public markers: number[][] = this.fingers;
  public fingerStatuses: string[][] = this.fingerStatus;
  public disableCapture: boolean = false;
  public captureButtonTitle: string = 'Capture';
  public biometricFingerPrintItem: BiometricFingerPrintItem = new BiometricFingerPrintItem();

  public constructor(
    private biometricService: BiometricService,
    private applicantRequestService: ApplicantRequestService,
    private zone: NgZone) {
  }

  public async ngOnInit() {
    //this.stopCapture();
    this.initialize();
    this.subscribe();
  }

  public startCapture() {
    this.biometricService
      .startCapture().pipe(catchError(error => of(console.log(error))))
      .subscribe(() => {
        this.zone.run(() => {
          this.disableCapture = true;
          this.captureButtonTitle = 'Capturing...';
        });

        this.timeOutValue = setTimeout(() => {
          this.stopCapture();
        }, 10000);
      });
  }

  public stopCapture(): void {
    this.biometricService
      .stopCapture()
      .subscribe(() => {
        this.zone.run(() => {
          this.reset();
        });
      });
  }

  public async reinitialiseDevice() {
    this.lastNodeIndex = -1;
    this.stopCapture();
    this.initialize();
  }

  public getFingerNodeColor(index: number): string {
    if (this.imageMapArea.fingerStatuses[index][1].toString() == 'Missing') {
      return "rgba(255, 0, 0, 0.3)"; // red
    } else if (this.fingerStatuses[index][1].toString() == 'Injured') {
      return "rgba(255, 140, 0, 0.3)"; // orange
    } else if (this.fingerStatuses[index][1].toString() == 'Capture') {
      return "rgba(0, 120, 247, 0.3)"; // blue // "rgba(204, 204, 0, 0.6)"; // yellow
    } else if (this.fingerStatuses[index][1].toString() == 'Recapture') {
      return "rgba(204, 204, 0, 0.6)"; // yellow
    } else if (this.fingerStatuses[index][1].toString() == 'NotRecognised') {
      return "rgba(255, 140, 0, 0.3)"; // orange
    } else if (this.fingerStatuses[index][1].toString() == 'CapturedHighQuality') {
      return "rgba(34,139,34, 1)"; // green
    } else if (this.fingerStatuses[index][1].toString() == 'CapturedMediumQuality') {
      //return "rgba(255, 140, 0, 1)"; // orange
      return "rgba(34,139,34, 1)"; // green
    } else if (this.fingerStatuses[index][1].toString() == 'CapturedLowQuality') {
      return "rgba(255, 0, 0, 1)"; // red
    } else {
      return "rgba(0, 120, 247, 0.3)"; // blue
    }
  }

  public onChange(markerIndex: number): void {
    if (this.capturingSelectedState) {
      if (this.capturingSelectedState === 'NotRecognised') {
        if (markerIndex <= 4) {
          this.biometricFingerPrintItem.leftHandItems[markerIndex].snapshot = '../../../assets/bg-white.jpg';
          this.biometricFingerPrintItem.leftHandItems[markerIndex].quality = 0;
        } else {
          this.biometricFingerPrintItem.rightHandItems[markerIndex - 5].snapshot = '../../../assets/bg-white.jpg';
          this.biometricFingerPrintItem.rightHandItems[markerIndex - 5].quality = 0;
        }
        this.highlightFingerToCapture();
      }

      if (this.capturingSelectedState === 'Recapture') {
        this.setIsActiveFalse();

        if (markerIndex <= 4) {
          this.biometricFingerPrintItem.leftHandItems[markerIndex].snapshot = '../../../assets/bg-white.jpg';
          this.biometricFingerPrintItem.leftHandItems[markerIndex].quality = 0;
          this.biometricFingerPrintItem.leftHandItems[markerIndex].isActive = true;
        } else {
          this.biometricFingerPrintItem.rightHandItems[markerIndex - 5].snapshot = '../../../assets/bg-white.jpg';
          this.biometricFingerPrintItem.rightHandItems[markerIndex - 5].quality = 0;
          this.biometricFingerPrintItem.rightHandItems[markerIndex - 5].isActive = true;
        }
      }

      this.capturingSelectedState = '';
      this.imageMapArea.newFingerStatus = '';
    }
  }

  public selectMarker(index: number): void {
    this.imageMapArea.markerActive = index;
    this.imageMapArea.draw();
  }

  public removeMarker(index: number): void {
    this.markers.splice(index, 1);
    if (index === this.imageMapArea.markerActive) {
      this.imageMapArea.markerActive = null;
    } else if (index < this.imageMapArea.markerActive) {
      this.imageMapArea.markerActive--;
    }
    this.imageMapArea.draw();
  }

  public setAvailabilityState(availabilityType: string): void {
    this.availabilitySelectedState = availabilityType;
    this.imageMapArea.newFingerStatus = this.availabilitySelectedState;
  }

  public setCapturingState(capturingState: string): void {
    this.capturingSelectedState = capturingState;
    this.imageMapArea.newFingerStatus = this.capturingSelectedState;
  }

  public availabilityCompleted(): void {
    this.availabilitySelectedState = '';
    this.capturingSelectedState = '';
    this.imageMapArea.newFingerStatus = '';

    if (this.fingerAvailabilityMarked) {
      this.highlightFingerToCapture();
    }
  }

  private setIsActiveFalse(): void {
    for (let itemLeftHandItems of this.biometricFingerPrintItem.leftHandItems) {
      itemLeftHandItems.isActive = false;
    }
    for (let itemRightHandItems of this.biometricFingerPrintItem.rightHandItems) {
      itemRightHandItems.isActive = false;
    }
  }

  private setIsActiveTrue(index: number): void {
    this.setIsActiveFalse();
    if (index <= 4) { // Left Hand
      this.biometricFingerPrintItem.leftHandItems[index].isActive = true;
    } else { // Right Hand
      this.biometricFingerPrintItem.rightHandItems[index - 5].isActive = true;
    }
  }

  private highlightFingerToCapture(): void {
    let availableFingerFound: boolean = false;
    this.setIsActiveFalse();

    for (let itemCaptureSequence of this.captureSequence) {
      for (let itemFingerStatuses of this.imageMapArea.fingerStatuses) {
        if ((itemFingerStatuses[1].toString() === "Available") && (itemFingerStatuses[0].toString() === itemCaptureSequence.toString())) {
          this.setIsActiveTrue(parseInt(itemFingerStatuses[0]));
          this.imageMapArea.fingerStatuses[itemFingerStatuses[0]][1] = "Capture";
          this.imageMapArea.draw();
          availableFingerFound = true;
          break;
        }
      }

      if (availableFingerFound) {
        break;
      }
    }
  }

  public ngOnDestroy(): void {
    this.imageStreamRef.unsubscribe();
    this.biometricService.stopCapture();
    this.unsubscribe$.next(0);
    this.unsubscribe$.complete();
  }

  /**************************************************/
  /*  Private Functions                             */
  /**************************************************/
  private isActive(value: BiometricFingerPrint, index: number, array: BiometricFingerPrint[]): boolean {
    return value.isActive;
  }

  private notActive(
    value: BiometricFingerPrint,
    index: number,
    array: BiometricFingerPrint[]): boolean {
    return !value.isActive;
  }

  private reset(): void {
    clearTimeout(this.timeOutValue);

    this.disableCapture = false;
    this.captureButtonTitle = 'Capture';
  }

  public changeNotification(): void {
    this.addDummyFingerprints();
    this.biometricFingerPrintItem.leftHandItems.forEach((value, idx, array) => {
      let fingerprint: IApplicantFingerprintRequest = new ApplicantFingerprintRequest(null, (idx + 1), value.snapshot, value.quality);
      this.applicantRequestService.addApplicantFingerprint(fingerprint);
    });

    this.biometricFingerPrintItem.leftHandItems.forEach((value, idx, array) => {
      let fingerprint: IApplicantFingerprintRequest = new ApplicantFingerprintRequest(null, (idx + 5), value.snapshot, value.quality);
      this.applicantRequestService.addApplicantFingerprint(fingerprint);
    });
  }

  private addDummyFingerprints(): void {
    this.biometricFingerPrintItem.leftHandItems.forEach((value, idx, array) => {
      let fingerprint: IApplicantFingerprintRequest = new ApplicantFingerprintRequest(null, (idx + 1), photoPlaceHolder, value.quality);
      this.applicantRequestService.addApplicantFingerprint(fingerprint);
    });

    this.biometricFingerPrintItem.leftHandItems.forEach((value, idx, array) => {
      let fingerprint: IApplicantFingerprintRequest = new ApplicantFingerprintRequest(null, (idx + 5), photoPlaceHolder, value.quality);
      this.applicantRequestService.addApplicantFingerprint(fingerprint);
    });
  }

  /**************************************************/
  /*  Initializations                               */
  /**************************************************/
  private initialize(): void {
    this.initDevice();
    this.connectSignalR();
    this.fingerPrintStreamImageInit();
    this.fingerPrintStreamQualityInit();
    this.leftHandInit();
    this.rightHandInit();
    this.imageMapArea.newFingerStatus = '';
  }

  private connectSignalR(): void {
    this.biometricService.connectSignalR();
  }

  private async initDevice() {
    await this.biometricService.initializeNewDevice('FINGERPRINT.STREAM.REGISTER.IB');
  }

  private fingerPrintStreamImageInit(): void {
    this.zone.run(() => {
      this.fingerPrintImageStream = '../../../assets/bg-white.jpg';
    });
  }

  private fingerPrintStreamQualityInit(): void {
    this.zone.run(() => {
      this.fingerPrintSnapshotQuality = 0;
    });
  }

  private leftHandInit(): void {
    this.biometricFingerPrintItem.leftHandItems = [];
    this.biometricFingerPrintItem.leftHandItems.push(
      new BiometricFingerPrint('Little', '0'),
      new BiometricFingerPrint('Ring', '1'),
      new BiometricFingerPrint('Middle', '2'),
      new BiometricFingerPrint('Index', '3'),
      new BiometricFingerPrint('Thumb', '4')
    );
  }

  private rightHandInit(): void {
    this.biometricFingerPrintItem.rightHandItems = [];
    this.biometricFingerPrintItem.rightHandItems.push(
      new BiometricFingerPrint('Thumb', '5'),
      new BiometricFingerPrint('Index', '6'),
      new BiometricFingerPrint('Middle', '7'),
      new BiometricFingerPrint('Ring', '8'),
      new BiometricFingerPrint('Little', '9')
    );
  }

  /**************************************************/
  /*  Subscriptions                                 */
  /**************************************************/
  private subscribe(): void {
    this.deviceInitializedSubscription();
    this.imageStreamSubscription();
    this.imageSnapshotSubscription();
    this.imageQualitySubscription();
  }

  private deviceInitializedSubscription(): void {
    this.biometricService
      .onDeviceInit()
      .subscribe(() => {
        console.log('IB Device Initialized');
      });
  }

  private imageStreamSubscription(): void {
    this.biometricService
      .getImageStream()
      .subscribe(img => {
        this.zone.run(() => {
          if (img) {
            this.fingerPrintImageStream = `data:image/jpg;base64,${img}`;
          }
        });
      });
  }

  private imageSnapshotSubscription(): void {
    this.biometricService
      .getImageSnapshot()
      .subscribe((img) => {
        this.zone.run(() => {
          if (img && this.biometricFingerPrintItem.leftHandItems.find(this.isActive)) {
            this.biometricFingerPrintItem.leftHandItems.find(this.isActive).snapshot = `data:image/jpg;base64,${img}`;
          } else if (img && this.biometricFingerPrintItem.rightHandItems.find(this.isActive)) {
            this.biometricFingerPrintItem.rightHandItems.find(this.isActive).snapshot = `data:image/jpg;base64,${img}`;
          }
        });
      });
  }

  private imageQualitySubscription(): void {
    this.biometricService
      .getImageQuality().pipe(takeUntil(this.unsubscribe$))
      .subscribe((quality) => {
        this.zone.run(() => {
          if (quality > 0) {
            if (this.biometricFingerPrintItem.leftHandItems.find(this.isActive)) {
              this.biometricFingerPrintItem.leftHandItems.find(this.isActive).quality = quality;
            } else if (this.biometricFingerPrintItem.rightHandItems.find(this.isActive)) {
              this.biometricFingerPrintItem.rightHandItems.find(this.isActive).quality = quality;
            }

            for (let itemFingerStatuses of this.imageMapArea.fingerStatuses) {
              if ((itemFingerStatuses[1].toString() === "Capture") || (itemFingerStatuses[1].toString() === "Recapture")) {
                if (quality >= 80) {
                  this.imageMapArea.fingerStatuses[itemFingerStatuses[0]][1] = "CapturedHighQuality";
                } else if (quality >= 60 && quality < 80) {
                  this.imageMapArea.fingerStatuses[itemFingerStatuses[0]][1] = "CapturedMediumQuality";
                } else if (quality < 60) {
                  this.imageMapArea.fingerStatuses[itemFingerStatuses[0]][1] = "CapturedLowQuality";
                }
                this.imageMapArea.draw();
                break;
              }
            }

            this.highlightFingerToCapture();
            this.stopCapture();
          }
        });
      });
  }
}
