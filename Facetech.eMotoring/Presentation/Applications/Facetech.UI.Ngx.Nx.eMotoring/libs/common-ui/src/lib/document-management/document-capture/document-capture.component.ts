import { Component, OnInit, OnDestroy, Output, NgZone, ViewChild, Type, Input, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
// Icons
import {
  faGraduationCap,
  faTasks,
  faCheck,
  IconDefinition
} from '@fortawesome/free-solid-svg-icons';
import {
  faAngleRight,
  faAngleDoubleRight,
  faAngleLeft,
  faAngleDoubleLeft,
  faTrash,
  faPlusCircle,
  faSyncAlt
} from '@fortawesome/free-solid-svg-icons';

import { CrudType } from '../models/enums/crud-type';
import { DocumentInfo } from '../models/document-info';
import { ApplicantDocumentRequest } from '../../biometric-finger-print/models/applicant-request.interface';
import { BiometricService } from '../../../services/biometric/biometric.service';
import { SessionDataService } from '../../../services/session-data/session-data.service';
import { ApplicantRequestService } from '../../biometric-finger-print/applicant-request.service';

// Constants
const dataImageBase64: string = 'data:image/jpeg;base64,';
const blankPage: string = `${dataImageBase64}R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==`;
const photoPlaceholder: string = '../../../assets/document.png';

@Component({
  selector: 'ngx-document-capture',
  templateUrl: './document-capture.component.html',
  styleUrls: ['./document-capture.component.css']
})
export class DocumentCaptureComponent implements OnInit, OnDestroy {
  @Input() isCompleted: any = false;
  @Input() instructionIcon: any;
  @Input() completionStatusIcon: any;

  public previousIcon: IconDefinition = faAngleLeft;
  public nextIcon: any = faAngleRight;
  public firstIcon: any = faAngleDoubleLeft;
  public lastIcon: any = faAngleDoubleRight;
  public captureIcon: any = faPlusCircle;
  public clearIcon: any = faTrash;
  public refreshIcon: any = faSyncAlt;

  public firstButtonEnabled = false;
  public previousButtonEnabled = false;
  public nextButtonEnabled = false;
  public lastButtonEnabled = false;
  public clearButtonEnabled = false;
  public captureButtonEnabled = false;
  public captureButtonText = "Capture";
  public reinitializeButtonEnabled = false;

  public currentPageNumber: number = 0;
  public totalNumberOfPages: number = 0;

  public currentDocument: DocumentInfo = null;
  private documents: DocumentInfo[] = [];

  private dataImageURL: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private dataImageURL$: Observable<string> = this.dataImageURL.asObservable();

  private onDeviceInitRef: Subscription = null;
  private onDeviceNotActiveRef: Subscription = null;
  private getImageSnapshotRef: Subscription = null;
  private startCaptureRef: Subscription = null;

  @Input() id: any;
  @Input() crudType: CrudType = CrudType.Update;
  @ViewChild('elementSize') elementSize: ElementRef; // Needed for method calculateScrollPanelHeight()

  public instructions: string[] = [
    'Select document type to be scanned.',
    'Place document to be scanned in scanner.',
    'Click "Capture" to scan document.'
  ];

  public constructor(
    private route: ActivatedRoute,
    private biometricService: BiometricService,
    private sessionDataService: SessionDataService,
    private applicantRequestService: ApplicantRequestService,
    private zone: NgZone,
    config: NgbCarouselConfig) {
    config.interval = 0;
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;

    sessionDataService.setItem('testKey', 'testValue');
  }

  private setupComponentIcons() {
    this.instructionIcon = this.documents.length > 0 ? faCheck : faGraduationCap;
    this.completionStatusIcon = faTasks;
  }

  private setupComponentButtons() {
    this.zone.run(() => {
      this.clearButtonEnabled = false;
      this.clearButtonEnabled = this.documents.length > 0 ? true : false;
      this.previousButtonEnabled = this.documents.length > 1 ? true : false;
      this.nextButtonEnabled = this.documents.length > 1 ? true : false;

      this.firstButtonEnabled = this.previousButtonEnabled;
      this.lastButtonEnabled = this.nextButtonEnabled;
    });
  }

  public async ngOnInit() {
    //this.stopCapture();
    //let listOfdocuments: DocumentInfo[];
    if (this.sessionDataService.getValue('documents')) {
      this.documents = this.sessionDataService.getValue('documents') as DocumentInfo[];

      let index: number = this.documents.findIndex((value) => value.isCurrent);

      this.currentDocument = this.documents[index];
      this.currentPageNumber = index + 1;
      this.totalNumberOfPages = this.documents.length;
    }

    if (this.documents.length < 1) {
      this.clearCapturedImages();
    } else {
      console.log('3.  this.documents.length = ' + this.documents.length);
    }

    this.setupComponentIcons();
    this.setupComponentButtons();

    this.biometricService.connectSignalR();
    await this.biometricService.initializeNewDevice('DOCUMENTSCANNING.STREAM.WIA');

    this.onDeviceInitRef = this.biometricService.onDeviceInit()
      .subscribe(() => {
        this.zone.run(() => {
          this.captureButtonEnabled = true;
          this.captureButtonText = "Capture";
          this.reinitializeButtonEnabled = true;
          console.log('Device Initialized');
        });
      });

    this.onDeviceNotActiveRef = this.biometricService.onDeviceNotActive()
      .subscribe(() => {
        this.zone.run(() => {
          this.captureButtonEnabled = true;
          this.reinitializeButtonEnabled = true;
          this.captureButtonText = "Capture";
        });
      });

    this.getImageSnapshotRef = this.biometricService.getImageSnapshot()
      .subscribe((img) => {
        this.zone.run(() => {
          if (img) {
            this.addDocument(new DocumentInfo(this.toDataImageBase64(img), '', true));
            this.toImageDataURL(this.toDataImageBase64(img));

            this.isCompleted = this.documents.length > 0 ? true : false;
            this.completionStatusIcon = this.isCompleted ? faCheck : faTasks;

            this.displayLastScannedPage();
            this.setupComponentButtons();
          }
        });
      });

    this.dataImageURL$.subscribe((thumbnail) => {
      if (thumbnail) {
        this.documents.find((value) => value.isCurrent).thumbnail = thumbnail;
        this.currentDocument = this.documents.find((value) => value.isCurrent);

        this.sessionDataService.setItem('documents', this.documents);
        console.log('Page moved to memory...');
      }
    })
  }

  private setParams(): void {
    this.route.params.subscribe((params) => this.id = params.id);
    console.log(`${this.id}`);
  }

  private getEnumValue(params: Params): CrudType {
    let crudType: CrudType = CrudType.None;
    if ('crudtype' in params) {
      crudType = CrudType[params.crudtype.replace(
        params.crudtype.charAt(0),
        params.crudtype.charAt(0).toUpperCase()).toString()] as CrudType;
    }
    return crudType;
  }

  private toImageDataURL(dataURI) {
    var image = new Image();
    image.crossOrigin = "Anonymous";

    let canvas: HTMLCanvasElement = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 500;
    var context = canvas.getContext("2d");

    image.onload = () => {
      context.drawImage(image, 0, 0, image.width, image.height, 0, 0, 400, 500);
      this.dataImageURL.next(canvas.toDataURL('image/jpeg'));
    }

    image.src = dataURI;
  }

  public startCapture() {
    this.startCaptureRef = this.biometricService.startCapture().subscribe(() => {
      console.log('startCapture');
    });
  }

  public stopCapture(): void {
    this.biometricService
      .stopCapture()
      .subscribe(() => {
        this.zone.run(() => {
          //this.reset();
        });
      });
  }

  public getImageSnaphot() {
    this.captureButtonEnabled = false;
    this.captureButtonText = 'Acquiring...';
    this.reinitializeButtonEnabled = false;
    this.startCapture();
  }

  public reinitializeDevice() {
    this.zone.run(() => {
      this.captureButtonEnabled = false;
      this.reinitializeButtonEnabled = false;
      this.captureButtonText = 'Initializing...';
      this.biometricService.initializeNewDevice('DOCUMENTSCANNING.STREAM.WIA');
    });
  }

  public firstCapturedImage() {
    let currentIndex: number = this.documents.findIndex((value) => value.isCurrent);
    this.documents[currentIndex].isCurrent = false;

    currentIndex = 0;

    this.documents[currentIndex].isCurrent = true;
    this.sessionDataService.setItem('documents', this.documents);
    this.currentDocument = this.documents[currentIndex];
    this.currentPageNumber = currentIndex + 1;
  }

  public lastCapturedImage() {
    this.displayLastScannedPage();
  }

  public previousCapturedImage() {
    let currentIndex: number = this.documents.findIndex((value) => value.isCurrent);
    this.documents[currentIndex].isCurrent = false;

    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = this.documents.length - 1;
    }

    this.documents[currentIndex].isCurrent = true;
    this.sessionDataService.setItem('documents', this.documents);
    this.currentDocument = this.documents[currentIndex];
    this.currentPageNumber = currentIndex + 1;
  }

  private displayLastScannedPage() {
    let currentIndex: number = this.documents.findIndex((value) => value.isCurrent);
    this.documents[currentIndex].isCurrent = false;

    currentIndex = this.documents.length - 1;

    this.documents[currentIndex].isCurrent = true;
    this.sessionDataService.setItem('documents', this.documents);
    this.currentDocument = this.documents[currentIndex];
    this.currentPageNumber = currentIndex + 1;
  }

  public nextCapturedImage() {
    let currentIndex: number = this.documents.findIndex((value) => value.isCurrent);
    this.documents[currentIndex].isCurrent = false;

    currentIndex++;

    if (currentIndex > this.documents.length - 1) {
      currentIndex = 0;
    }

    this.documents[currentIndex].isCurrent = true;
    this.sessionDataService.setItem('documents', this.documents);
    this.currentDocument = this.documents[currentIndex];
    this.currentPageNumber = currentIndex + 1;
  }

  public clearCapturedImages() {
    this.documents = [];
    this.sessionDataService.setItem('documents', this.documents);
    this.currentPageNumber = 0;
    this.totalNumberOfPages = 0;
    this.currentDocument = new DocumentInfo(blankPage, blankPage, true);

    this.isCompleted = this.documents.length > 0 ? true : false;
    this.completionStatusIcon = this.isCompleted ? faCheck : faTasks;

    this.setupComponentButtons();
  }

  public ngOnDestroy(): void {
    if (this.onDeviceInitRef) {
      this.onDeviceInitRef.unsubscribe();
    }

    if (this.onDeviceNotActiveRef) {
      this.onDeviceNotActiveRef.unsubscribe();
    }

    if (this.getImageSnapshotRef) {
      console.log('this.getImageSnapshotRef.unsubscribe();');
      this.getImageSnapshotRef.unsubscribe();
    }

    if (this.startCaptureRef) {
      this.startCaptureRef.unsubscribe();
    }
  }

  private addDocument(documentInfo: DocumentInfo): void {
    if (documentInfo) {
      if (documentInfo.isCurrent == true) {
        this.documents.forEach((value) => {
          value.isCurrent = false;
        });
      }

      this.documents.push(documentInfo);
      this.currentPageNumber = this.documents.length;
      this.totalNumberOfPages = this.documents.length;
    }
  }

  private toDataImageBase64(image: string): string {
    return `${dataImageBase64}${image}`;
  }

  public changeNotification(): void {
    this.clear();
    this.addDummyDocuments();
    this.documents.forEach((value, idx, array) => {
      console.log('ChangeNotification()');
      this.applicantRequestService.addApplicantDocument(new ApplicantDocumentRequest(null, idx, value.image));
    });
  }

  private addDummyDocuments(): void {
    this.documents.push(new DocumentInfo(photoPlaceholder, photoPlaceholder, false));
    this.documents.push(new DocumentInfo(photoPlaceholder, photoPlaceholder, false));
    this.documents.push(new DocumentInfo(photoPlaceholder, photoPlaceholder, false));
  }

  private clear(): void {
    this.documents.length = 0;
  }

  public calculatePreviewPageHeight(): number {
    let calculatedheight = this.elementSize.nativeElement.offsetHeight - 221;
    return calculatedheight < 200 ? 200 : calculatedheight; //608;
  }

  public calculatePreviewPageWidth(): number {
    let calculatedheight = this.elementSize.nativeElement.offsetHeight - 221;
    return calculatedheight < 200 ? 200 / 1.41429 : calculatedheight / 1.41429; //430;
  }
}
