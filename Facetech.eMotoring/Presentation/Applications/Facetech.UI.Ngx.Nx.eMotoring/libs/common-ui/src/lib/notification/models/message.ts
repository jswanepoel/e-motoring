import { IMessage } from "./interfaces/message.interface";

export class Message implements IMessage {
  public severity?: string;
  public summary?: string;
  public detail?: string;
  public id?: any;
  public key?: string;
  public life?: number;
  public sticky?: boolean;
  public closable?: boolean;
  public data?: any;

  private constructor(
    severity?: string,
    summary?: string,
    detail?: string,
    id?: any,
    key?: string,
    life?: number,
    sticky?: boolean,
    closable?: boolean,
    data?: any) {
    this.severity = severity;
    this.summary = summary;
    this.detail = detail;
    this.id = id;
    this.key = key;
    this.life = life;
    this.sticky = sticky;
    this.closable = closable;
    this.data = data;
  }

  public static create(
    severity?: string,
    summary?: string,
    detail?: string,
    id?: any,
    key?: string,
    life?: number,
    sticky?: boolean,
    closable?: boolean,
    data?: any): IMessage {

    return new Message(severity, summary, detail, id, key, life, sticky, closable, data);
  }
}
