import { Component, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';

import { LoginService } from '../security/login.service';

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
  public status: boolean;
  public subscription: Subscription;
  public hamburger: boolean;
  public wt: any = window.innerHeight;
  public menuItems: MenuItem[];

  public constructor(
    private loginService: LoginService) {
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

  private home(): MenuItem[] {

    let menuItems: MenuItem[] = [
      {
        label: 'Home',
        icon: 'fa fa-home',
        routerLink: '/home'
      }
    ];

    return menuItems;
  }

  private processA(): MenuItem[] {

    let menuItems: MenuItem[] = [
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
      }
    ];

    return menuItems;
  }

  private processB(): MenuItem[] {

    let menuItems: MenuItem[] = [
      {
        label: 'Process B',
        icon: 'fa fa-pencil-square-o',
        items: [
          { routerLink: '/B1/vehicle-status', routerLinkActiveOptions: 'active', label: 'Vehicle Status', icon: 'fa  fa-check' },
          { routerLink: '/B2.1/update-vehicle-info', routerLinkActiveOptions: 'active', label: 'Update Vehicle Information', icon: 'fa  fa-times' },
          { routerLink: '/B2.2/request-number', routerLinkActiveOptions: 'active', label: 'Request for Specific Number in Series', icon: 'fa  fa-times' },
          { routerLink: '/schedule-calendar-testpage', routerLinkActiveOptions: 'active', label: 'Make Appointment to Visit DMT', icon: 'fa  fa-times' },
          { routerLink: '/report', routerLinkActiveOptions: 'active', label: 'Effecting Payment and Capture Details', icon: 'fa fa-times' }


        ]
      }
    ];

    return menuItems;
  }

  private processC(): MenuItem[] {

    let menuItems: MenuItem[] = [
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
      }
    ];

    return menuItems;
  }

  private processD(): MenuItem[] {

    let menuItems: MenuItem[] = [
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
      }
    ];

    return menuItems;
  }

  private processE(): MenuItem[] {

    let menuItems: MenuItem[] = [
      {
        label: 'Queries & Complaints',
        icon: 'fa fa-archive',
        items: [
          { routerLink: 'queries/create-customer-query', routerLinkActiveOptions: 'active', label: 'Create Customer Query', icon: 'fal  fa-question-square' },
        ]
      }
    ];

    return menuItems;
  }

  private production(): MenuItem[] {

    let menuItems: MenuItem[] = [
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
          { routerLink: '/B2.1/update-vehicle-info', routerLinkActiveOptions: 'active', label: 'View Trainees per Session (A1.9)', icon: 'fa fa-check' },
          { routerLink: '/A2.1/vehicle-attributes', routerLinkActiveOptions: 'active', label: 'Master Prototype Application (A2.1)', icon: 'fa fa-check' },
          { routerLink: '', routerLinkActiveOptions: 'active', label: 'DMT Prototype Certificate for Import (A2.2)', icon: 'fa fa-check' },
          { routerLink: '', routerLinkActiveOptions: 'active', label: 'Locally Assembled (A2.3)', icon: 'fa fa-check' }
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
      }
    ];

    return menuItems;
  }

  private commonUI(): MenuItem[] {

    let menuItems: MenuItem[] = [
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
      }
    ];

    return menuItems;
  }

  public ngOnInit() {

    this.hamburger = true;
    this.subscription = this.loginService.authNavStatus$.subscribe(status => this.status = status);

    this.menuItems = [];
    this.menuItems.push(this.home()[0]);
    this.menuItems.push(this.production()[0]);
    this.menuItems.push(this.commonUI()[0]);
    this.menuItems.push(this.processA()[0]);
    this.menuItems.push(this.processB()[0]);
    this.menuItems.push(this.processC()[0]);
    this.menuItems.push(this.processD()[0]);
    this.menuItems.push(this.processE()[0]);
    
  }
}










//{
//  label: 'Process C',
//    icon: 'fa fa-pencil-square-o',
//      items: [
//        {
//          label: 'Morne Test : A1.1 BC7 - BC12', items: [
//            { routerLink: '/A1.1/entity-detail-for-site-visit', routerLinkActiveOptions: 'active', label: 'Entity detail for site visit', icon: 'fa fa-check' },
//            { routerLink: '/A1.1/appoint-responsible-officer', routerLinkActiveOptions: 'active', label: 'Appoint responsible officer', icon: 'fa fa-check' },
//            { routerLink: '/A1.1/site-visit-detail', routerLinkActiveOptions: 'active', label: 'Site visit detail', icon: 'fa fa-check' },
//            { routerLink: '/A1.1/site-visit-results', routerLinkActiveOptions: 'active', label: 'Site visit results', icon: 'fa fa-check' },
//            { routerLink: '/A1.1/verify-transaction', routerLinkActiveOptions: 'active', label: 'Verify transaction', icon: 'fa fa-check' },
//            { routerLink: '/A1.1/request-new-site-visit', routerLinkActiveOptions: 'active', label: 'Request new site visit', icon: 'fa fa-check' },
//          ]
//        },
//        {
//          label: 'Morne Test : A1.6 BC1 - BC14', items: [
//            //{ routerLink: '/A1.1/', routerLinkActiveOptions: 'active', label: 'Confirm entity detail', icon: 'fa fa-check' },
//            { routerLink: '/document-upload', routerLinkActiveOptions: 'active', label: 'Document upload', icon: 'fa fa-check' },
//            //{ routerLink: '/A1.1/', routerLinkActiveOptions: 'active', label: 'Verify entity registration', icon: 'fa fa-check' },
//            { routerLink: '/A1.1/entity-detail-for-site-visit', routerLinkActiveOptions: 'active', label: 'Entity detail for site visit', icon: 'fa fa-check' },
//            { routerLink: '/A1.1/appoint-responsible-officer', routerLinkActiveOptions: 'active', label: 'Appoint responsible officer', icon: 'fa fa-check' },
//            { routerLink: '/A1.1/site-visit-detail', routerLinkActiveOptions: 'active', label: 'Site visit detail', icon: 'fa fa-check' },
//            { routerLink: '/A1.1/site-visit-results', routerLinkActiveOptions: 'active', label: 'Site visit results', icon: 'fa fa-check' },
//            { routerLink: '/A1.1/verify-transaction', routerLinkActiveOptions: 'active', label: 'Verify transaction', icon: 'fa fa-check' },
//            { routerLink: '/A1.1/request-new-site-visit', routerLinkActiveOptions: 'active', label: 'Request new site visit', icon: 'fa fa-check' },
//            { routerLink: '/A1.1/garage-plates', routerLinkActiveOptions: 'active', label: 'Garage plates', icon: 'fa fa-check' },
//            { routerLink: '/A1.1/generate-payment-instruction', routerLinkActiveOptions: 'active', label: 'Generate payment instruction', icon: 'fa fa-check' },
//            { routerLink: '/A1.1/schedule-appointment', routerLinkActiveOptions: 'active', label: 'Schedule appointment for finalization', icon: 'fa fa-check' },
//            { routerLink: '/A1.1/verify-documents', routerLinkActiveOptions: 'active', label: 'Verify documents', icon: 'fa fa-check' },
//            { routerLink: '/A1.1/final-review', routerLinkActiveOptions: 'active', label: 'Final review', icon: 'fa fa-check' }
//          ]
//        },
//        {
//          label: 'C1 - Change of ownership', items: [
//            { routerLink: '/C1.1/identify-vehicle-and-owner', routerLinkActiveOptions: 'active', label: 'Apply for voluntary change of ownership', icon: 'fa fa-times' },
//            { routerLink: '/transferor', routerLinkActiveOptions: 'active', label: 'Intimation of CoC at death of owner', icon: 'fa fa-times' },
//            { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Change of ownership by court order', icon: 'fa fa-times' },
//            { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Change of ownership to entity with interest', icon: 'fa fa-times' },
//            { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Removal of entity with interest', icon: 'fa fa-times' },
//            { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Assigning non-DMT number plates', icon: 'fa fa-times' },
//            { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Change of ownership due to auction (no 1st owner plate)', icon: 'fa fa-times' },
//            { routerLink: '/documents', routerLinkActiveOptions: 'active', label: 'Change of ownership due to auction (1st owner plate)', icon: 'fa fa-times' }
//          ]

//        },
