import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { QuestionService } from 'libs/common-ui/src/lib/questions/question.service';
import { FinanceModels } from '../Interfaces';

@Injectable()
export class ProcessDService {
  entityData: any;
  Transactions: FinanceModels.IFee[];
  selectedTransactions: FinanceModels.IFee[];
  lookupVals: Array<{ lookupId: string, items: SelectItem[] }> = [];

  constructor(private questionService:QuestionService) {
    this.Transactions = null;
    this.selectedTransactions = null;
  }

  public GetEntityData(): any {
    return this.entityData;
  }

  public GetTransactions(): any {
    return this.Transactions;
  }

  public GetSelectedTransactions(): any {
    return this.selectedTransactions;
  }

  public SetEntityData(data) {
    this.entityData = data;
  }

  public SetTransactions(transactions: any) {
    this.Transactions = transactions;
  }

  public SetSelectedTransactions(selectedTransactions: any) {
    this.selectedTransactions = selectedTransactions;
  }

  public getLookup(lookupId: string): SelectItem[] {
    let lookup: SelectItem[];
    if (this.lookupVals.some(x => x.lookupId == lookupId)) {
      lookup = this.lookupVals.find(x => x.lookupId == lookupId).items;
    } else {
      lookup = this.questionService.getMultiOptions(lookupId);
      this.lookupVals.push({ lookupId: lookupId, items: lookup });
    }
    return lookup;
  }

  public getLookupLabel(id: string, lookupId: string): string {
    let label: string;
    label = this.getLookup(lookupId).find(x => x.value == id).label;

    return label;
  }

}
