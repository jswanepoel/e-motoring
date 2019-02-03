import { Injectable, OnInit } from "@angular/core";
import { Observable, Subject, BehaviorSubject, Subscribable, Subscription } from "rxjs";
import { HubService, HubSubscription, HubWrapper, Hub } from 'ngx-signalr-hubservice';

@Injectable({
  providedIn: 'root'
})
@Hub({ hubName: 'devicehub' })
export class BiometricService {
  private hubWrapper: HubWrapper;
  private deviceInit: Subject<void> = new Subject<void>();
  private deviceNotActive: Subject<void> = new Subject<void>();
  private imageStream: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private imageSnapshot: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private imageQuality: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private error: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private intervalId: any;
  public connected: boolean = false;

  public constructor(
    private hubService: HubService) {
    this.hubWrapper = hubService.register(this);
  }

  public connectSignalR() {
    this.hubService.connect({
      url: 'http://localhost:8083/signalr',
      attemptReconnects: true
    }).subscribe(
      (con) => this.connected = con,
      (err) => console.log(`Error: ${err}`));
  }

  public initializeNewDevice(deviceName: string): Observable<boolean> {
    console.log(`Connected: ${this.connected}`);
    let result: Observable<boolean> = new Observable<boolean>();
    this.intervalId = setInterval(async () => {
      if (this.connected) {
        console.log('Connected: ' + this.connected);
        clearInterval(this.intervalId);
        result = this.hubWrapper.invoke<boolean>('InitializeNewDevice', deviceName);
      }
    }, 1000);

    return result;
  }

  private fingerPrintQualityAndMinutiae(image64: any): void {
    this.hubWrapper.invoke<boolean>('GetFingerprintQualityAndMinutiae', image64);
  }

  public startCapture(): Observable<boolean> {
    return this.hubWrapper.invoke<boolean>('StartCapture');
  }

  public stopCapture(release: boolean = false): Observable<boolean> {
    return this.hubWrapper.invoke<boolean>('StopCapture', release);
  }

  public releaseCurrentDevice(): Observable<boolean> {
    return this.hubWrapper.invoke<boolean>('ReleaseCurrentDevice');
  }

  public onDeviceInit(): Observable<void> {
    return this.deviceInit.asObservable();
  }

  public onDeviceNotActive(): Observable<void> {
    return this.deviceNotActive.asObservable();
  }

  public getImageStream(): Observable<string> {
    return this.imageStream.asObservable();
  }

  public getImageSnapshot(): Observable<string> {
    console.log('public getImageSnapshot(): Observable<string>');
    return this.imageSnapshot.asObservable();
  }

  public requestSnapShot(): Observable<boolean> {
    return this.hubWrapper.invoke<boolean>('RequestSnapShot');
  }

  public getImageQuality(): Observable<number> {
    return this.imageQuality.asObservable();
  }

  public onError(): Observable<string> {
    return this.error.asObservable();
  }

  @HubSubscription()
  public deviceInitialized() {
    this.deviceInit.next();
  }

  @HubSubscription()
  public deviceDeactivated() {
    this.deviceNotActive.next();
  }

  @HubSubscription()
  public addStreaming(image64: string, length: any) {
    this.imageStream.next(image64);
  }

  @HubSubscription()
  public addSnapShot(image64: string, length: any) {
    console.log('public async addSnapShot');
    this.fingerPrintQualityAndMinutiae(image64);
    this.imageSnapshot.next(image64);
    this.imageSnapshot.next(null);
  }

  @HubSubscription()
  public addQualityAndMinutiae(quality: any, minutiae: any) {
    this.imageQuality.next(quality);
  }

  @HubSubscription()
  public addError(error: string) {
    console.log(`Error: ${JSON.stringify(error)}`);
    this.error.next(error);
  }
}
