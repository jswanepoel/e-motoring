import { ICredential } from './interfaces/credential.interface';

export class Credential implements ICredential {
  public username: string;
  public detail: string;
  public userNameDTL: string;
  public detailDTL: string;
  public baseActionValue: string;
  public baseFunctionValue: string;
  public baseRequiredDatabase: any[];

  public constructor() {
  }
}
