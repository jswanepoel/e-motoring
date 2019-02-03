import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';

import { IPersonNext } from '../models/interfaces/person.interface';
import { PersonNext } from '../models/person';
import { PersonService } from '../person.service';

@Component({
  selector: 'ngx-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent {
  @Input() date: NgbDateStruct;
  private save$: Subscription;
  public person: IPersonNext = new PersonNext('Name', 'Surname', "", "", "", "", "", [], []);

  public constructor(
    private personService: PersonService,
    private router: Router) {
  }

  public onDateSelect(event: any): void {
    this.person.birthDate = this.toDate(this.date);
  }

  public toDate(date: NgbDateStruct): string {
    return `${date.year}-${date.month}-${date.day}`;
  }

  public onSave() {
     let result: boolean = false;
    this.personService.setDeails(this.person.firstname, this.person.lastname, this.person.birthDate);
    this.router.navigate(['/photos']);
  }
}
