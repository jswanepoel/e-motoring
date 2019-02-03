import { IPersonNext } from './interfaces/person.interface';

export class PersonNext implements IPersonNext {
  public birthDate: string;
  public firstname: string;
  public lastname: string;
  public baseActionValue: string;
  public baseFunctionValue: string;
  public baseSecuritySessionId: string;
  public baseSessionValue: string;
  public baseRequiredDatabase: string[];
  public photos: string[];
  public fingerprints?: string[];
  public signatures?: string[];
  public documents?: string[];

  public constructor(
    firstname: string,
    lastname: string,
    birthDate: string,
    baseActionValue: string,
    baseFunctionValue: string,
    baseSecuritySessionId: string,
    baseSessionValue: string,
    baseRequiredDatabase: string[],
    photos: string[],
    fingerprints?: string[],
    signatures?: string[],
    documents?: string[]
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.birthDate = birthDate;
    this.baseActionValue = baseActionValue;
    this.baseFunctionValue = baseFunctionValue;
    this.baseSecuritySessionId = baseSecuritySessionId;
    this.baseSessionValue = baseSessionValue;
    this.baseRequiredDatabase = baseRequiredDatabase;
    this.photos = photos;
    this.fingerprints = fingerprints;
    this.signatures = signatures;
    this.documents = documents;
  }
}
