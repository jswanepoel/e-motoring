import { Component } from '@angular/core';

@Component({
  selector: 'ngx-representative-transfer',
  templateUrl: './representative-transfer.component.html',
  styleUrls: ['./representative-transfer.component.css']
})
/** representative-transfer component*/
export class RepresentativeTransferComponent {
  selectedRep: any = {};
  selectedEntity: any = {};
  selectedDepartment: any = {};
  displayDialog: boolean;

  entityAOptions: any = [];
  entityBOptions: any = [];

  selectedEntityA: any = [];
  selectedEntityB: any = [];

  entities: {//get from db
    parentEntityName: string,
    childEntities: Array<{
      EntityName: string,
      persons: Array<{
        id: string,
        username: number,
        name: string,
        email: string,
        departmentName: string,
        trainingRequired: boolean
      }>
    }>
  } = {
      parentEntityName: 'BMW',
      childEntities: [
        {
          EntityName: 'BMW HQ',
          persons: [{
            "id": "4",
            "username": 19273994,
            "name": "Ronald mac Donald",
            "email": "donquote@bmw.com",
            "departmentName": "Sales",
            "trainingRequired": false
          },
          {
            "id": "1",
            "username": 15773334,
            "name": "Robles Chang",
            "email": "robleschang@bmw.com",
            "departmentName": "Accounting",
            "trainingRequired": false
          }, {
            "id": "4",
            "username": 19273994,
            "name": "Ronald mac Donald",
            "email": "donquote@bmw.com",
            "departmentName": "Sales",
            "trainingRequired": false
          }, {
            "id": "4",
            "username": 19273994,
            "name": "Ronald mac Donald",
            "email": "donquote@bmw.com",
            "departmentName": "Sales",
            "trainingRequired": false
          }]
        },
        {
          EntityName: 'BMW PTA',
          persons: [{
            "id": "4",
            "username": 19273994,
            "name": "Ronald mac Donald",
            "email": "donquote@bmw.com",
            "departmentName": "Sales",
            "trainingRequired": false
          },
          {
            "id": "4",
            "username": 19273994,
            "name": "Ronald mac Donald",
            "email": "donquote@bmw.com",
            "departmentName": "Accounting",
            "trainingRequired": false
          },
          {
            "id": "6",
            "username": 19273994,
            "name": "Ronald mac Donald",
            "email": "donquote@bmw.com",
            "departmentName": "Accounting",
            "trainingRequired": false
          },
          {
            "id": "4",
            "username": 19273994,
            "name": "Ronald mac Donald",
            "email": "donquote@bmw.com",
            "departmentName": "Sales",
            "trainingRequired": false
          }]
        },
        {
          EntityName: 'BMW JHB',
          persons: [
            {
              "id": "4",
              "username": 19273994,
              "name": "Ronald mac Donald",
              "email": "donquote@bmw.com",
              "departmentName": "Accounting",
              "trainingRequired": false
            },
            {
              "id": "4",
              "username": 19273994,
              "name": "Ronald mac Donald",
              "email": "donquote@bmw.com",
              "departmentName": "Sales",
              "trainingRequired": false
            }
          ]
        }
      ]
    }

  public constructor() {
    this.setEntityDropOptions();
  }

  public setEntityDropOptions() {
    this.entityAOptions = this.entities.childEntities.filter(ent => ent.EntityName != this.selectedEntityB.EntityName);
    this.entityBOptions = this.entities.childEntities.filter(ent => ent.EntityName != this.selectedEntityA.EntityName);
  }
}
