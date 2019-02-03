import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IPersonNext } from '../models/interfaces/person.interface';
import { PersonService } from '../person.service';

@Component({
  selector: 'ngx-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  cols: any[];
  item: any[];
  indiv: boolean = true;
  image: string = "";

  private save$: Subscription;
  public applicant: IPersonNext;
  public constructor(
    private personService: PersonService) {
    this.applicant = this.personService.getPerson();
  }

  public ngOnInit(): void {
    this.cols = [
      { field: 'firstname', header: 'Firstname' },
      { field: 'lastname', header: 'Lastname' },
      { field: 'birthDate', header: 'Birthdate' },
      { field: 'image', header: 'Image' }
    ];
    this.item = [];
    this.item.push({ 'firstname': 'Name', 'lastname': 'Surname', 'birthDate': 'Date', 'image': 'Base64' });
    this.image = this.applicant.photos[0];
  }

  public viewTable(): void {
    this.onSave();
    this.indiv = false;
  }

  private onSave() {
    let result: boolean = false;
    this.save$ = this.personService.saveAlt()
      .subscribe(value => result = value);
  }
}
