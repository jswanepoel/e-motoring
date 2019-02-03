import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'ngx-current-owner-interest',
  templateUrl: './current-owner-interest.component.html',
  styleUrls: ['./current-owner-interest.component.css']
})
export class CurrentOwnerInterestComponent implements OnInit, AfterViewInit {

  public includeFooter: boolean = true; // Base Template : Needed for 'offset' calculation in method calculateCardBodyHeight()
  public bodyCenter = true;

  //selectedEntityA: any = [];
  //selectedEntityB: any = [];

  selectedEntityA: { interestType: string, persons: Array<{ id: string, name: string }> } =
    {
      interestType: 'Available Interests',
      persons: [
        {
          "id": "1",
          "name": "Wesbank"
        },
        {
          "id": "2",
          "name": "ABSA"
        },
        {
          "id": "3",
          "name": "Outsurance"
        },
        {
          "id": "4",
          "name": "Queuing Agent"
        }
      ]
    }

  selectedEntityB: { interestType: string, persons: Array<{ id: string, name: string }> } =
    {
      interestType: 'Selected Interests',
      persons: [
      ]
    }

  //entities: {
  //  childEntities: Array<{
  //    interestType: string,
  //    persons: Array<{
  //      id: string,
  //      name: string,
  //      departmentName: string
  //    }>
  //  }>
  //} =
  //  {
  //    childEntities: [
  //      {
  //        interestType: 'Available Interests',
  //        persons: [
  //          {
  //            "id": "4",
  //            "name": "Wesbank",
  //            "departmentName": "Sales"
  //          },
  //          {
  //            "id": "1",
  //            "name": "ABSA",
  //            "departmentName": "Accounting"
  //          },
  //          {
  //            "id": "4",
  //            "name": "Outsurance",
  //            "departmentName": "Sales"
  //          }
  //        ]
  //      },
  //      {
  //        interestType: 'Selected Interests',
  //        persons: [
  //        ]
  //      }
  //    ]
  //  }

  constructor() {
  }

  ngOnInit(): void {
    //this.selectedEntityA = this.entities.childEntities.filter(ent => ent.interestType == 'Available Interests');
    //this.selectedEntityB = this.entities.childEntities.filter(ent => ent.interestType == 'Selected Interests');
    //this.selectedEntityA = this.entities.childEntities;
    //console.log(this.selectedEntityA);
  }

  ngAfterViewInit(): void {
    //this.selectedEntityA = [...this.selectedEntityA];
    //this.selectedEntityB = [...this.selectedEntityB];
  }
}
