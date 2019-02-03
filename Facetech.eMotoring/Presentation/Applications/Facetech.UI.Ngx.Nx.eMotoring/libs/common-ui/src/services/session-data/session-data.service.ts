import { Injectable } from '@angular/core';

import { SessionInfo } from '../../models/session-info';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {
  private dictionary: SessionInfo[] = [];

  public constructor() {
  }

  public setItem(key: string, value: any) {
    let index: number = this.dictionary.findIndex((value) => value.key == key);
    if (index >= 0) {
      this.dictionary[index] = new SessionInfo(key, this.toJson(value));
    } else {
      this.dictionary[this.dictionary.length] = new SessionInfo(key, this.toJson(value));
    }
  }

  public getValue(key: string): any {
    let index: number = this.dictionary.findIndex((value) => value.key == key);
    return index >= 0 ? this.toObject(this.dictionary[index].value) : null;
  }

  private toObject(item: any): any {
    return JSON.parse(item);
  }

  private toJson(value: any): string {
    return JSON.stringify(value);
  }
}
