import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { MessageService, SelectItem, MenuItem } from 'primeng/api';
import { BreadcrumbsService } from "../../../../../common-ui/src/lib/breadcrumbs/breadcrumbs.service";
import { QueryCategory } from '../models/query-category.enum';
import { IQuery } from '../models/interfaces/query.interface';
import { Query } from '../models/query.model';
import { QueryService } from '../service/query.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'ngx-create-customer-query',
  templateUrl: './create-customer-query.component.html',
  styleUrls: ['./create-customer-query.component.css'],
  providers: [MessageService]
})
export class CreateCustomerQueryComponent implements OnInit {

  public queryform: FormGroup;
  public isRequesting: boolean;
  public submitted: boolean;
  public categories: SelectItem[];
  private query: IQuery;
  
  private menuItems: MenuItem[];

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private breadcumbs: BreadcrumbsService,
    private queryService: QueryService) {
    this.menuItems = [];
    this.breadcumbs.setBreadCrumbs(this.menuItems);
  }

  ngOnInit() {
    this.queryform = this.fb.group({
      'description': new FormControl('', Validators.required),
      'category': new FormControl('', Validators.required)
    });

    this.categories = [];
    this.categories.push({ label: 'Select Category', value: QueryCategory.Undefined });
    this.categories.push({ label: 'General Query', value: QueryCategory.General });
    this.categories.push({ label: 'Vehicle Query', value: QueryCategory.Vehicle });
    this.categories.push({ label: 'Vehicle Owner Query', value: QueryCategory.VehicleOwner });
    this.categories.push({ label: 'Registered Entity Query', value: QueryCategory.RegisteredEntity });
  }

  /* form properties  */
  get description() { return this.queryform.get('description'); }
  get category() { return this.queryform.get('category'); }

  onSubmit() {
    console.log(this.query);

    if (this.queryform.valid) {
      this.query = this.queryform.value;
      this.isRequesting = true;

      this.queryService.add(this.query).pipe(finalize(() => this.isRequesting = false))
        .subscribe(result => {
          if (result) {
            this.messageService.add({ severity: 'info', summary: 'Success', detail: 'Query Submitted' });
            this.submitted = true;
          }
        },
        error => this.messageService.add({ severity: 'error', summary: 'Submit Failure', detail: error }));
    }
  }
}
