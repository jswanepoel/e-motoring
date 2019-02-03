import { Component } from '@angular/core';

@Component({
  selector: 'ngx-test-picklist-table',
  templateUrl: './test-picklist-table.component.html',
  styleUrls: ['./test-picklist-table.component.css']
})
export class TestPicklistTableComponent {

  public testHeader: string;
  public testDataSetSource: any; // { header: string, dataSet: Array<{ id: string, label: string }> }
  public testDataSetDestination: any; // { header: string, dataSet: Array<{ id: string, label: string }> }

  public constructor() {
    this.testHeader = 'Attendees';

    this.testDataSetSource =
      {
        header: 'Available Attendees',
        dataSet: [
          {
            "id": "1",
            "label": "Wesbank"
          },
          {
            "id": "2",
            "label": "ABSA"
          },
          {
            "id": "3",
            "label": "Outsurance"
          },
          {
            "id": "4",
            "label": "Queuing Agent"
          }
        ]
      }

    this.testDataSetDestination =
      {
        header: 'Selected Attendees',
        dataSet: [
        ]
      }
  }
}
