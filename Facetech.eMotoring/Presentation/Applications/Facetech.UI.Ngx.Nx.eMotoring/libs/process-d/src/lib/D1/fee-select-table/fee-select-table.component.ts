import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QuestionService } from '@facetech/common-ui';
import { SelectItem } from 'primeng/api';
import { FinanceModels } from '../../Interfaces/Finance.interfaces';

@Component({
  selector: 'ngx-fee-select-table',
  templateUrl: './fee-select-table.component.html',
  styleUrls: ['./fee-select-table.component.css']
})
export class FeeSelectTableComponent implements OnInit {
  @Input() transactions;
  @Input() headers;
  @Input() disableSelection: boolean;

  @Output() transactionSelected = new EventEmitter<FinanceModels.IFee[]>();

  public selectedTransactions: FinanceModels.IFee[] = [];

  LookupVals: Array<{ lookupId: string, items: SelectItem[] }> = [];

  constructor(private questionService: QuestionService) {

  }

  ngOnInit() {
  }

  public rowSelected() {
    this.transactionSelected.next(this.selectedTransactions);
  }

  public getLookup(lookupId: string): SelectItem[] {
    let lookup: SelectItem[];
    if (this.LookupVals.some(x => x.lookupId == lookupId)) {
      lookup = this.LookupVals.find(x => x.lookupId == lookupId).items;
    } else {
      lookup = this.questionService.getMultiOptions(lookupId);
      this.LookupVals.push({ lookupId: lookupId, items: lookup });
    }
    return lookup;
  }

  public getLookupLabel(id: string, lookupId: string): string {
    let label: string;
    label = this.getLookup(lookupId).find(x => x.value == id).label;

    return label;
  }

  public getTotalTax(): number {
    let totTax = 0;

    this.selectedTransactions.forEach(tx =>
      totTax += tx.amount * (tx.taxpercentage / 100)
    );
    return totTax;
  }

  public getTotalAmount(): number {
    let totInclTax = 0;
    this.selectedTransactions.forEach(tx =>
      totInclTax += tx.amount + tx.amount * (tx.taxpercentage / 100)
    );
    return totInclTax;
  }
}
