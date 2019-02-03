import { ISessionData } from "./interfaces/session-data.interface";

export class SessionInfo implements ISessionData {
  public key: string;
  public value: any;

  public constructor(key: string, value: any) {
    this.key = key;
    this.value = value;
  }
}
