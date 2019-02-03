import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import {
  IApplicantPhotoRequest,
  IApplicantFingerprintRequest,
  IApplicantSignatureRequest,
  IApplicantDocumentRequest,
  IApplicantInfoRequest,
  IApplicantRequest,
  ApplicantRequest
} from './models/applicant-request.interface';

@Injectable({
  providedIn: 'root'
})
export class ApplicantRequestService implements OnInit {
  private applicantRequest: IApplicantRequest;
  private request: BehaviorSubject<IApplicantRequest> = new BehaviorSubject<IApplicantRequest>(null);
  private request$: Observable<IApplicantRequest> = this.request.asObservable();

  public constructor() {
    console.log('ApplicantRequestService Contructor()');
    let applicantInfo: IApplicantInfoRequest = {
      id: null,
      firstName: '',
      surname: '',
      birthDate: '2018-09-20'
    };
    this.applicantRequest = ApplicantRequest.create(applicantInfo);
    this.changeNotification();
  }

  public ngOnInit(): void {
    console.log('ApplicantRequestService NgOnInit()');
  }

  public addApplicantInfo(
    applicantInfo: IApplicantInfoRequest): void {
    this.applicantRequest.id = applicantInfo.id;
    this.applicantRequest.firstName = applicantInfo.firstName;
    this.applicantRequest.surname = applicantInfo.surname;
    this.applicantRequest.birthDate = applicantInfo.birthDate;
  }

  public addApplicantPhoto(
    applicantPhoto: IApplicantPhotoRequest): void {
    this.applicantRequest.photos.push(applicantPhoto);
    this.changeNotification();
  }

  public addApplicantFingerprint(
    applicantFingerprint: IApplicantFingerprintRequest): void {
    this.applicantRequest.fingerprints.push(applicantFingerprint);
    this.changeNotification();
  }

  public addApplicantSignature(
    applicantSignature: IApplicantSignatureRequest): void {
    this.applicantRequest.signatures.push(applicantSignature);
    this.changeNotification();
  }

  public addApplicantDocument(
    applicantDocument: IApplicantDocumentRequest): void {
    this.applicantRequest.documents.push(applicantDocument);
    this.changeNotification();
  }

  public onApplicantRequestChange(): Observable<IApplicantRequest> {
    return this.request$;
  }

  public changeNotification(): void {
    this.request.next(this.applicantRequest);
  }
}
