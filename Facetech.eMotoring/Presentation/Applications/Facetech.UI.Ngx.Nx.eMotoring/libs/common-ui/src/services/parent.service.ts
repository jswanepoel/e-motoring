import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Parent, Transaction } from '../domain/grid';
import { Vehicle } from '../models/interfaces/vehicle.interface';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  public constructor(
    private http: HttpClient) {
  }

  public getPeople() {
    return this.http.get<any>('./../assets/People.json')
      .toPromise()
      .then(res => <Parent[]>res.data)
      .then(data => { return data; });
  }


  public getModel(JSON: any) {

    return JSON;
  }

  public getTrans() {
    return this.http.get<any>('./../assets/Transaction.json')
      .toPromise()
      .then(res => <Transaction[]>res.data)
      .then(data => { return data; });
  }

  public getVehicle() {
    return this.http.get<any>('./../assets/vehicles.json')
      .toPromise()
      .then(res => <Vehicle[]>res.data)
      .then(data => { return data; });
  }

  public getTrainingSchedual() {
    return this.http.get<any>('./../assets/trainingAppointments.json')
      .toPromise()
      .then(res => <Array<IParentData<TrainingSessionData, TrainingAttendeeData>>>res.data).then(data => { return data });
  }
}

export interface IParentData<T, U> {
  data: T,
  children?: Array<IChildData<U>>
}

export interface IChildData<T> {
  data: T
}

export interface TrainingSessionData {
  id: string,
  location: string,
  date: Date,
  hasChildren: boolean,
  available: number
}

export interface TrainingAttendeeData {
  id: string,
  username: string,
  name: string,
  company: string,
  email: string,
  response: string
}
