import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { IPersonNext } from '../person/models/interfaces/person.interface';
import { PersonNext } from '../person/models/person';
import { BaseService } from '../../services/base.service';
import { ConfigService } from '../../services/config/config.service';
import { SessionSecurity } from '../security/session-security';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BaseService {
  private session: SessionSecurity;
  private baseUrl: string = '';
  private person: IPersonNext = new PersonNext('Name', 'Surname', "", "", "", "", "", [], [])

  public constructor(
    private http: Http,
    private configService: ConfigService) {
    super();
    this.baseUrl = this.configService.getApiURI();
    this.session = JSON.parse(sessionStorage.getItem('security'));
  }

  public setDeails(_firstName: string, _lastname: string, _birthDate: string): void {
    this.person.firstname = _firstName;
    this.person.lastname = _lastname;
    this.person.birthDate = _birthDate;
  }

  public setPhoto(_image: string): any {
    this.person.photos.push(_image);
  }

  public getPerson(): any {
    return this.person;
  }

  public save(): Observable<boolean> {
    let headers: Headers = this.getHeaders();
    return this.http.post(`${this.baseUrl}/persons/save`,
      JSON.stringify({
        baseActionValue: 'SAVE',
        baseFunctionValue: 'SAVE',
        baseRequiredDatabase: ['IdentificationDBID'],
        baseSecuritySessionId: this.session.baseSecuritySessionId,
        baseSessionValue: this.session.baseSessionValue,
        birthDate: '1976/08/11 00:00:00',
        firstName: 'Jacques7775',
        id: null,
        surname: null,
        photos: [],
        fingerprints: [],
        signatures: [],
        documents: []

      }),
      { headers }).pipe(
        map(response => {
          console.log(JSON.stringify(response));
          return true;
        }),
        catchError(error => {
          return this.handleError(error);
        }));
  }

  public saveAlt(): Observable<boolean> {
    let headers: Headers = this.getHeaders();
    return this.http.post(`${this.baseUrl}/persons/save`,
      JSON.stringify({
        baseActionValue: 'SAVE',
        baseFunctionValue: 'SAVE',
        baseRequiredDatabase: ['IdentificationDBID'],
        baseSecuritySessionId: this.session.baseSecuritySessionId,
        baseSessionValue: this.session.baseSessionValue,
        birthDate: this.person.birthDate,
        firstName: this.person.firstname,
        id: null,
        surname: this.person.lastname,
        photos: [
          {
            id: null,
            image: 'image_1',
            identifier: 1
          },
          {
            id: null,
            image: 'image_2',
            identifier: 2
          },
          {
            id: null,
            image: 'image_3',
            identifier: 3
          }],
        fingerprints: [
          //{
          //  id: null,
          //  image: 'finger_1',
          //  identifier: 1,
          //  qualifier: 68
          //},
          //{
          //  id: null,
          //  image: 'finger_2',
          //  identifier: 2,
          //  qualifier: 78
          //},
          //{
          //  id: null,
          //  image: 'finger_3',
          //  identifier: 3,
          //  qualifier: 88
          //}
        ],
        signatures: [
          //{
          //  id: null,
          //  image: 'signatures_1'
          //}
        ],
        documents: [
          //{
          //  id: null,
          //  image: 'documents_1',
          //  identifier: 1
          //},
          //{
          //  id: null,
          //  image: 'documents_2',
          //  identifier: 2
          //},
          //{
          //  id: null,
          //  image: 'documents_3',
          //  identifier: 3
          //}
        ]

      }),
      { headers }).pipe(
        map(response => {
          console.log(JSON.stringify(response));
          return true;
        }),
        catchError(error => {
          return this.handleError(error);
        }));
  }

  private getHeaders(): Headers {
    let headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', `Bearer ${this.getJwtAuthToken()}`);

    return headers;
  }

  private getJwtAuthToken(): string {
    return 'auth_token' in sessionStorage ? sessionStorage.getItem('auth_token') : '';
  }
}
