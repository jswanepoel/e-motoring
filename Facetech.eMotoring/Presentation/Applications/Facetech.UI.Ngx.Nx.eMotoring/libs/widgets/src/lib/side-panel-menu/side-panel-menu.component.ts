import { Component, HostListener } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-panel-menu',
  templateUrl: './side-panel-menu.component.html',
  styleUrls: ['./side-panel-menu.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('200ms', style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class SidePanelMenuComponent {
  public status: boolean = true;
  public subscription: Subscription;
  public hamburger: boolean;
  public wt: any = window.innerHeight;
  public menuItems: MenuItem[];

  public constructor() {
  }

  public ngOnInit() {
    this.hamburger = true;
    this.menuItems = [
      {
        label: 'Home',
        icon: 'fa fa-home',
        routerLink: '/home'
      },
      {
        label: 'Production',
        icon: 'fa fa-pencil-square-o',
        items: [
          { routerLink: '/A1.1/initial-entity-registration', routerLinkActiveOptions: 'active', label: 'Register Associated Entity (A1.1)', icon: 'fa fa-check' },
          { routerLink: '/C1.1/identify-new-owner', routerLinkActiveOptions: 'active', label: 'Biometrics (A1.2)', icon: 'fa fa-check' },
          { routerLink: '/A1.3/picklist-table/test-picklist-table', routerLinkActiveOptions: 'active', label: 'Schedule Training (A1.3a)', icon: 'fa fa-check' }, ///A1.3/select-attendees
          { routerLink: '/A1.3/picklist-table/test-picklist-table', routerLinkActiveOptions: 'active', label: 'Course Results (A1.3b)', icon: 'fa fa-check' }, ///A1.3/select-attendees
          { routerLink: '/A1.1/entity-detail', routerLinkActiveOptions: 'active', label: 'Annual Renewal (A1.6)', icon: 'fa fa-check' },
          { routerLink: '/B2.1/update-vehicle-info', routerLinkActiveOptions: 'active', label: 'Maintain Signatories (A1.8)', icon: 'fa fa-check' },
          { routerLink: '/B2.1/update-vehicle-info', routerLinkActiveOptions: 'active', label: 'View Trainees per Session (A1.9)', icon: 'fa fa-check' }
        ]
      },
      {
        label: 'Development',
        icon: 'fa fa-pencil-square-o',
        items: [
          {
            label: 'Common UI',
            items: [
              { routerLink: '/applicant/create-input', routerLinkActiveOptions: 'active', label: 'Create Applicant', icon: 'pi pi-pi pi-user-plus' },
              { routerLink: '/table', label: 'Table', icon: 'pi pi-pi pi-table' },
              { routerLink: '/blockUI', label: 'BlockUI', icon: 'pi pi-pi pi-minus-circle' },
              { routerLink: '/register', label: 'Register', icon: 'pi pi-pi pi-pencil' },
              { routerLink: '/transaction-list', label: 'Transaction list', icon: 'pi pi-list' },
              { routerLink: '/transaction-comments', label: 'Transaction Comments', icon: 'fa fa-comments-o' },
              { routerLink: '/schedule-calendar-testpage', label: 'Schedule Calendar', icon: 'fa fa-calendar' },
              { routerLink: '/document-upload', label: 'Document Upload (Simple)', icon: 'fa fa-file-pdf-o' },
              { routerLink: '/document-upload-complex', label: 'Document Upload (Complex)', icon: 'fa fa-file-pdf-o' },
              { routerLink: '/recommendation', label: 'Recommendation', icon: 'pi pi-tag' },
              { routerLink: '/pdfviewer', label: 'Document Preview', icon: 'pi pi-file' },
              { routerLink: '/repTransfer', label: 'Representitive Transfer', icon: 'pi pi-file' },
              { routerLink: '/trainingOverview', label: 'Training Overview', icon: 'pi pi-file' },
              { routerLink: '/numberplateOrders', label: 'Plate Orders', icon: 'pi pi-file' },
              { routerLink: '/captureSignatory', label: 'capture signatory', icon: 'pi pi-file' },
              { routerLink: '/template-client-messages', label: 'Template Editor', icon: 'fa  fa-puzzle-piece' }
            ]
          }
        ]
      },
      {
        label: 'Biometrics',
        icon: 'fa fa-shield',
        items: [
          { routerLink: '/photos', label: 'Photo', icon: 'fa fa-camera' },
          { routerLink: '/fingerprints', label: 'Fingerprint', icon: 'fa fa-hand-paper-o' },
          { routerLink: '/signature', label: 'Signature', icon: 'fa fa-pencil-square-o' },
          { routerLink: '/documents', label: 'Document Scanning', icon: 'fa fa-clone' },
          { routerLink: '/transaction-comments', label: 'QR Barcode', icon: 'fa fa-qrcode' },
          { routerLink: '/transaction-comments', label: '1D Barcode', icon: 'fa fa-barcode' }
        ]
      },
      {
        label: 'Templates',
        icon: 'fa fa-newspaper-o',
        items: [
          { routerLink: '/template-shell', label: 'Shell', icon: 'fa fa-square-o' },
        ]
      },
      {
        label: 'Process A',
        icon: 'fa fa-pencil',
        items: [
          { label: 'Register Associated Entity', routerLink: '/A1.1/initial-entity-registration', routerLinkActiveOptions: 'active', icon: 'fa fa-times' },
          { label: 'Initiate registration of vehicles', routerLink: '/A3.1/initiate-registration-of-vehicles', routerLinkActiveOptions: 'active', icon: 'fa fa-times' },
          { label: 'Registration of single vehicles', routerLink: '/A3.2/registration-of-single-vehicles', routerLinkActiveOptions: 'active', icon: 'fa fa-times' },
          { label: 'Schedule mobile office component', routerLink: '/A3.3/schedule-mobile-office-component', routerLinkActiveOptions: 'active', icon: 'fa fa-times' },
          { label: 'Release bulk vehicles', routerLink: '/A3.4/release-bulk-vehicles', routerLinkActiveOptions: 'active', icon: 'fa fa-times' },
          { label: 'Inspection of vehicles', routerLink: '/A3.5/inspection-of-vehicles', routerLinkActiveOptions: 'active', icon: 'fa fa-times' },
          { label: 'Inspection of assembled vehicle', routerLink: '/A3.6/inspection-of-assembled-vehicle', routerLinkActiveOptions: 'active', icon: 'fa fa-times' },
          { label: 'Inspection', routerLink: '/A3.7/inspection', routerLinkActiveOptions: 'active', icon: 'fa fa-times' },
          { label: 'Prototype-certificate', routerLink: '/A3.8/prototype-certificate', routerLinkActiveOptions: 'active', icon: 'fa fa-times' }
        ]
      },
      {
        label: 'Process B',
        icon: 'fa fa-pencil-square-o',
        items: [
          { routerLink: '/B1/vehicle-status', routerLinkActiveOptions: 'active', label: 'Vehicle Status', icon: 'fa  fa-check' },
          { routerLink: '/B2.1/update-vehicle-info', routerLinkActiveOptions: 'active', label: 'Update Vehicle Info', icon: 'fa  fa-times' },
          { routerLink: '/applicant/create-input', routerLinkActiveOptions: 'active', label: 'Vehicle Admin', icon: 'fa  fa-times' },
          { routerLink: '/applicant/create-input', routerLinkActiveOptions: 'active', label: 'Owner Info', icon: 'fa  fa-times' },
          { routerLink: '/applicant/create-input', routerLinkActiveOptions: 'active', label: 'Vehicle Additional', icon: 'fa fa-times' }
        ]
      },
      {
        label: 'Process C',
        icon: 'fa fa-pencil-square-o',
        items: [
          {
            label: 'C1 - Change of ownership',
            items: [
              { routerLink: '/C1.1/identify-vehicle-and-owner', routerLinkActiveOptions: 'active', label: 'Apply for voluntary change of ownership', icon: 'fa fa-times' },
              { routerLink: '/transferor', routerLinkActiveOptions: 'active', label: 'Intimation of CoC at death of owner', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Change of ownership by court order', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Change of ownership to entity with interest', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Removal of entity with interest', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Assigning non-DMT number plates', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Change of ownership due to auction (no 1st owner plate)', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Change of ownership due to auction (1st owner plate)', icon: 'fa fa-times' }
            ]
          },
          {
            label: 'C2 - Vehicle attribute change',
            items: [
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Temporary de-registration (condemned by DMT)', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Temporary de-registration (by owner)', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Re-registration by owner', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Request for exportation', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Voluntary change of registration number', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Registering/removing objection or blacklisting', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Change vehicle attribute: pre-modification approval', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Change vehicle attribute: post-modification approval', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Attribute modification by DMT', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Issue duplicate CR and plates', icon: 'fa fa-times' }
            ]
          },
          {
            label: 'C3 - Modification of detail',

            items: [
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Modification of detail by owner/entity', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Modification of detail by DMT', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Temporary assignment/re-assignment of vehicle', icon: 'fa fa-times' }
            ]
          },
          {
            label: 'C4 - Information',

            items: [
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Sharing of information with other relevant entities', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Receiving information from other relevant entities', icon: 'fa fa-times' }
            ]
          },
          {
            label: 'C - Other',
            items: [
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Order duplicate VIC', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Query status of number plate (portal)', icon: 'fa fa-times' },
              { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Transfer ownership of vehicle from importer to sales entity', icon: 'fa fa-times' }
            ]
          }
        ]
      },
      {
        label: 'Process D',
        icon: 'fa fa-money',
        items: [
          { routerLink: '/PayFees', routerLinkActiveOptions: 'active', label: 'Pay', icon: 'fa  fa-times' }
          //,
          //{ routerLink: '/D1.1/rce', routerLinkActiveOptions: 'active', label: 'RCE', icon: 'fa  fa-times' },
          //{ routerLink: '/D1.1/genStatement', routerLinkActiveOptions: 'active', label: 'Generate Statement', icon: 'fa  fa-times' },
          //{ routerLink: '/D1.1/viewStatement', routerLinkActiveOptions: 'active', label: 'View Statements', icon: 'fa  fa-times' },
          //{ routerLink: '/D1.1/captureTreasuryPayment', routerLinkActiveOptions: 'active', label: 'Treasury Transfer', icon: 'fa  fa-times' },
          //{ routerLink: '/D1.1/genTransferStatement', routerLinkActiveOptions: 'active', label: 'Treasury Transfer Statement', icon: 'fa  fa-times' }
        ]
      },
      {
        label: 'Queries & Complaints',
        icon: 'fa fa-archive',
        items: [
          { routerLink: 'queries/create-customer-query', routerLinkActiveOptions: 'active', label: 'Create Customer Query', icon: 'fal  fa-question-square' },
        ]
      }
    ];
  }

  //Please don't change the styling of the Panel Menu
  @HostListener('window:resize', ['$event'])
  public sizeWindow(event) {
    this.wt = event.target.innerHeight;
    this.sizeMenu(this.wt);
  }
  //Please don't change the styling of the Panel Menu
  public sizeMenu(wt: any): void {
    if (wt >= 800) {
      this.hamburger = true;
    } else if (wt < 800) {
      this.hamburger = false;
    }
  }
  //Please don't change the styling of the Panel Menu
  public sidePanelCalc() {
    return (this.wt - 47 + 'px');
  }
  //Please don't change the styling of the Panel Menu
  public trigger(): void {
    if (this.hamburger) {
      this.hamburger = false;
    } else {
      this.hamburger = true;
    }
  }

}
