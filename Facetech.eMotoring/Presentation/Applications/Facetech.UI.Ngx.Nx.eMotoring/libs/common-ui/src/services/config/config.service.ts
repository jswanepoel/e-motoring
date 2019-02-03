import { Injectable } from '@angular/core';

@Injectable()
export class ConfigService {
  private apiURI: string;

  constructor() {
    this.apiURI = 'http://laptop-js.facegroup.co.za:8080/api';
  }

  public getApiURI() {
    return this.apiURI;
  }
}
