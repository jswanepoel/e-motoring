import { IApplicant } from './interfaces/applicant.interface';

const photoPlaceholder: string = '../../../assets/no-id-photo.png';

export class Applicant implements IApplicant {
  public id: number;
  public firstName: string;
  public surname: string;
  public birthDate: string;
  public photo: string = photoPlaceholder;
  public fingerprint: string = photoPlaceholder;
  public signature: string = photoPlaceholder;
  public document: string = photoPlaceholder;

  public constructor() {
   this.birthDate = '2018-09-20';
  }
}
