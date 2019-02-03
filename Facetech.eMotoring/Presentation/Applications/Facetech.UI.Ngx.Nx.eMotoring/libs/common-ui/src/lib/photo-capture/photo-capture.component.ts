import { NgZone, Component, Input, ViewChild, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ImageCropperComponent, CropperSettings, ImageCropper } from 'ng2-img-cropper';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { IPersonPhoto } from '../photo-capture/models/interfaces/person-photo.interface';
import { PersonPhoto } from '../photo-capture/models/person-photo';
import { ApplicantPhotoRequest } from '../biometric-finger-print/models/applicant-request.interface';
import { IMessage, Message, MessageType } from '../notification/models/';
import { BiometricService, SessionDataService } from '../../services';
import { ApplicantRequestService } from '../biometric-finger-print';
import { NotificationService } from '../notification';
import { PersonService } from '../person';
import { BreadcrumbsService } from '../breadcrumbs/breadcrumbs.service';

const photoPlaceholder: string = 'data:image/png;base64,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'; // '../../../assets/no-id-photo.png';
//const photoDummy:string = 'data:image/png;base64,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';

@Component({
  selector: 'facetech-photo-capture',
  templateUrl: './photo-capture.component.html',
  styleUrls: ['./photo-capture.component.css']
})
export class PhotoCaptureComponent implements OnInit, OnDestroy {
  isCompleted = false;
  faHelp = faGraduationCap;
  faCompletionStatus = faTasks;

  @Input() streamingImage: any = null;
  @Input() photosCaptured: boolean[] = [false, false, false];
  @Input() photosSelected: string[] = ['Not Selected', 'Not Selected', 'Not Selected'];
  @ViewChild('cropper', null)
  cropper: ImageCropperComponent;
  @ViewChild("photoNode1", { read: ElementRef }) photoNode1: ElementRef;

  public imageStreamRef: Subscription = null;
  public photoNodeToPopulate: number = 0;
  public personPhotoModel: IPersonPhoto[] = [];
  public imageChangedEvent: any = '';
  public croppedImage: string = '';
  public cropperSettings: CropperSettings;

  public instructions: string[] = [
    '1.  Please ensure the client is the correct distance from the camera.',
    '2.  Move the cropping rectangle on the streaming image over the client`s face.',
    '3.  Click "Capture" and "Photo X" will be populated.',
    '4.  Click populated photo to select photo for transaction.',
  ];

  public breadcrumbItems: any; 

  public constructor(
    public biometricService: BiometricService,
    public sessionDataService: SessionDataService,
    public applicantRequestService: ApplicantRequestService,
    public notificationService: NotificationService,
    private personService: PersonService,
    public zone: NgZone,
    private router: Router) {

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 400;
    this.cropperSettings.height = 300;

    this.cropperSettings.croppedWidth = 100;
    this.cropperSettings.croppedHeight = 75;

    //this.cropperSettings.canvasWidth = 400;
    //this.cropperSettings.canvasHeight = 300;

    //this.cropperSettings.minWidth = 100;
    //this.cropperSettings.minHeight = 100;

    this.cropperSettings.rounded = false;

    this.cropperSettings.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
    this.cropperSettings.cropperDrawSettings.strokeWidth = 2;

    this.cropperSettings.noFileInput = true;

    this.streamingImage = {};

    //this.cropper = new ImageCropper(this.cropperSettings);
    //this.cropper.image = this.streamingImage;
  }

  public fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  public imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  public async ngOnInit() {   
    this.populateFromSession();
    this.zone.run(() => {
      this.streamingImage = {};
      this.streamingImage = '../../../assets/bg-white.jpg';
    });

    this.biometricService.onDeviceInit()
      .subscribe(() => {
        console.log('Device Initialised');
        this.messageNotification(Message.create(
          MessageType.Success,
          'Photo Capture',
          'Photo Capture Device Initialised.'));
        this.startCapture();
      });

    this.biometricService.onDeviceNotActive()
      .subscribe(() => {
        this.messageNotification(Message.create(
          MessageType.Warning,
          'Photo Capture',
          'Photo Capture Device is not active.'));
      });

     this.biometricService.getImageStream()
      .subscribe(img => {
        this.zone.run(() => {
          if (img) {
            this.streamingImage = new Image();
            this.streamingImage.addEventListener('load', () => {
              this.cropper.setImage(this.streamingImage);
            });
            this.streamingImage.src = `data:image/jpg;base64,${img}`;
          }
        });
      });

    this.biometricService.connectSignalR();
    await this.biometricService.initializeNewDevice('PHOTO.STREAM.DIRECTSHOWCAMERA');

    this.biometricService.getImageSnapshot()
      .subscribe((img) => {
        this.zone.run(() => {
          if (img) {
            if (this.photoNodeToPopulate > 2) {
              this.photoNodeToPopulate = 0;
            }
            this.personService.setPhoto(`data:image/jpeg;base64,${img}`);
            this.personPhotoModel[this.photoNodeToPopulate].image = `data:image/jpeg;base64,${img}`;
            this.photosCaptured[this.photoNodeToPopulate] = true;
            this.photoNodeToPopulate++;

            this.messageNotification(Message.create(
              MessageType.Info,
              'Photo Capture',
              `Photos capture: ${JSON.stringify(this.personPhotoModel)}`));
          }
        });
      });
  }

  public populateFromSession() {
    if (this.sessionDataService.getValue('personPhotoModel') != null) {
      this.personPhotoModel = this.sessionDataService.getValue('personPhotoModel') as PersonPhoto[];
    } else {
      this.personPhotoModel = [
        new PersonPhoto(photoPlaceholder, false),
        new PersonPhoto(photoPlaceholder, false),
        new PersonPhoto(photoPlaceholder, false)];
      this.sessionDataService.setItem('personPhotoModel', this.personPhotoModel);
    }
  }

  // Was for testing?
  //public Sumbitter() {
  //  this.router.navigate(['/person-list']);
  //}

  public clearComponent(): void {
    this.personPhotoModel = [
      new PersonPhoto(photoPlaceholder, false),
      new PersonPhoto(photoPlaceholder, false),
      new PersonPhoto(photoPlaceholder, false)];
    this.sessionDataService.setItem('personPhotoModel', this.personPhotoModel);
  }

  //public loadBase64Image(imageBase64: string) {
  //  this.originalImage = new Image();
  //  this.originalImage.onload = () => {
  //    this.originalSize.width = this.originalImage.width;
  //    this.originalSize.height = this.originalImage.height;
  //    this.cd.markForCheck();
  //  };
  //  this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageBase64);
  //  this.originalImage.src = imageBase64;
  //}

  public startCapture() {
    this.biometricService.startCapture().subscribe(() => {
      this.messageNotification(Message.create(
        MessageType.Success,
        'Photo Capture',
        'Photo Capturing Started.'));
    });
  }

  public stopCapture() {
    this.biometricService.stopCapture().subscribe(() => {
      this.messageNotification(Message.create(
        MessageType.Success,
        'Photo Capture',
        'Photo Capturing Stopped.'));
    });
  }

  //public cropped(bounds: Bounds) {
  //console.log(bounds);
  //}

  public getImageSnaphot() {
    this.biometricService.requestSnapShot();
  }

  public setSelectedImage(index) {
    if (this.photosCaptured[index]) {
      this.personPhotoModel.forEach((value) => {
        value.isCurrent = false;
        this.personPhotoModel[index].isCurrent = true;
        this.sessionDataService.setItem('personPhotoModel', this.personPhotoModel);
      });

      this.isCompleted = true;
      this.faCompletionStatus = faCheck;
      this.imageStreamRef = this.biometricService.getImageStream()
        .subscribe(img => {
          this.zone.run(() => {
            if (img) {
              this.streamingImage = '../../../assets/bg-white.jpg';
            }
          });
        });

      this.stopCapture();
    }
  }

  public fileChangeListener($event) {
    console.log('Event fired ' + $event.target.src);
    //var image: any = new Image();
    //var file: File = $event.target.files[0];
    //var myReader: FileReader = new FileReader();
    //var that = this;
    //myReader.onloadend = function (loadEvent: any) {
    //  image.src = loadEvent.target.result;
    //  that.cropper.setImage(image);

    //};

    //myReader.readAsText(file);
  }

  public ngOnDestroy(): void {
    //this.imageStreamRef.unsubscribe();
    this.biometricService.stopCapture(true);
   // this.biometricService.releaseCurrentDevice();
  }

  public changeNotification(): void {
    //this.messageNotification(Message.create(
    //  MessageType.Info,
    //  'Photo Capture',
    //  `Populate Photos from stored session. ${JSON.stringify(this.personPhotoModel)}`));

    //this.clear();
    //this.addDummyPhotos();
    this.personPhotoModel.forEach((value, idx, array) => {
      this.applicantRequestService.addApplicantPhoto(new ApplicantPhotoRequest(null, idx, value.image));
    });
  }

  //public addDummyPhotos(): void {
  //  this.personPhotoModel.push(new PersonPhoto(photoDummy, false));
  //  this.personPhotoModel.push(new PersonPhoto(photoDummy, false));
  //  this.personPhotoModel.push(new PersonPhoto(photoDummy, false));
  //}

  public clear(): void {
    this.personPhotoModel.length = 0;
  }

  public messageNotification(message: IMessage): void {
    this.notificationService.notify(message);
  }
}
