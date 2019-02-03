import { Injectable } from '@angular/core';

@Injectable()
export class ProcessBService {
  vehicle: any;
  person: any;

  constructor() {
    this.vehicle = null;
    this.person = null;
  }

  public GetVehicle():any
  {
    return this.vehicle;
  }

  public GetPerson(): any {
    return this.person;
  }


  public SetVehicle(_vehicle:any)
  {
    this.vehicle = _vehicle;
  }

  public SetPerson(_person: any) {
    this.person = _person;
  }



}
