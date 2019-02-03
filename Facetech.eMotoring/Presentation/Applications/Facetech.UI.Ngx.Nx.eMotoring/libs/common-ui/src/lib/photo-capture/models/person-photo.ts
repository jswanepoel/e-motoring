import { IPersonPhoto } from './interfaces/person-photo.interface';

export class PersonPhoto implements IPersonPhoto {
  public image: string;
  public isCurrent: boolean;

  public constructor(image: string, isCurrent: boolean) {
    this.image = image;
    this.isCurrent = isCurrent;
  }
}
