import { DocumentDetail } from './interfaces/document-detail.interface';

export class DocumentInfo implements DocumentDetail {
  public image: string;
  public thumbnail: string;
  public isCurrent: boolean;

  public constructor(image: string, thumbnail: string, isCurrent: boolean) {
    this.image = image;
    this.thumbnail = thumbnail;
    this.isCurrent = isCurrent;
  }

  public setIsCurrent(value: boolean): void {
    this.isCurrent = value;
  }
}
