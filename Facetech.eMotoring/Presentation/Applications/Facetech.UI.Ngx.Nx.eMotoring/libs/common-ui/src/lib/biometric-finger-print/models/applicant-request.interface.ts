export interface IApplicantRequest extends IApplicantInfoRequest {
  photos: IApplicantPhotoRequest[];
  fingerprints: IApplicantFingerprintRequest[];
  signatures: IApplicantSignatureRequest[];
  documents: IApplicantDocumentRequest[];
}

export interface IApplicantInfoRequest {
  id: number;
  firstName: string;
  surname: string;
  birthDate: string;
}

export interface IImage {
  id: number;
  image: string;
}

export interface IPhotoRequest extends IImage {
  identifier: number;
}

export interface IApplicantPhotoRequest extends IPhotoRequest {
}

export class ApplicantPhotoRequest implements IApplicantPhotoRequest {
  public identifier: number;
  public id: number;
  public image: string;

  public constructor(id: number, identifier: number, image: string) {
    this.id = id;
    this.identifier = identifier;
    this.image = image;
  }
}

export interface IApplicantFingerprintRequest extends IPhotoRequest {
  qualifier: number;
}

export class ApplicantFingerprintRequest implements IApplicantFingerprintRequest {
  id: number;
  identifier: number;
  image: string;
  qualifier: number;

  public constructor(
    id: number,
    identifier: number,
    image: string,
    qualifier: number) {
    this.id = id;
    this.identifier = identifier;
    this.image = image;
    this.qualifier = qualifier;
  }

}

export interface IApplicantSignatureRequest extends IImage {
}

export class ApplicantSignatureRequest implements IApplicantSignatureRequest {
  public id: number;
  public image: string;

  public constructor(
    id: number,
    image: string) {
    this.id = id;
    this.image = image;
  }
}

export interface IApplicantDocumentRequest extends IPhotoRequest {
}


export class ApplicantDocumentRequest implements IApplicantDocumentRequest {
  public id: number;
  public identifier: number;
  public image: string;

  public constructor(
    id: number,
    identifier: number,
    image: string) {
    this.id = id;
    this.identifier = identifier;
    this.image = image;
  }
}

export class ApplicantRequest implements IApplicantRequest {
  private photoPlaceholder: string = '../../../assets/no-id-photo.png';

  public id: number;
  public firstName: string;
  public surname: string;
  public birthDate: string;
  public photos: IApplicantPhotoRequest[];
  public fingerprints: IApplicantFingerprintRequest[];
  public signatures: IApplicantSignatureRequest[];
  public documents: IApplicantDocumentRequest[];

  protected constructor(
    applicantInfo: IApplicantInfoRequest) {
    this.id = applicantInfo.id;
    this.firstName = applicantInfo.firstName;
    this.surname = applicantInfo.surname;
    this.birthDate = applicantInfo.birthDate;

    this.photos = [];
    this.fingerprints = [];
    this.signatures = [];
    this.documents = [];
  }

  public static create(applicantInfo: IApplicantInfoRequest): IApplicantRequest {
    return new ApplicantRequest(applicantInfo);
  }
}
