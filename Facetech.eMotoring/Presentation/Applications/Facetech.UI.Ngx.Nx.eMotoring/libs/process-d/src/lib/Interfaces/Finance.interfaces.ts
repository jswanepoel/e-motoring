export namespace FinanceModels {
  export interface IFee {
    id: string,
    rootid: number,
    type_lookupvalue_id: number,
    feetype_lookupvalue_id?: number,
    currency_lookupvalue_id?: number,
    amount: number,
    taxpercentage?: number,
    feetotal?: number,
    feeeffectivedate: string,
    feeenddate?: string,
    recordstatus_lookupvalue_id?: number,
    capturedate: string,
    userauditdetail_id?: number,
    isactive: number,
    checksum?: string
  }

  export interface IFeeHistory {
    id: number,
    rootid: number,
    fee_id: number,
    type_lookupvalue_id?: number,
    currency_lookupvalue_id?: number,
    amount: number,
    taxpercentage?: number,
    recordstatus_lookupvalue_id?: number,
    capturedate: string,
    userauditdetail_id?: number,
    isactive: number,
    checksum?: string,
    historydate: string
  }
  export interface IFinancialTransaction {
    id: number,
    rootid: number,
    dossiernumber: number,
    status_lookupvalue_id: number,
    isactive: number,
    capturedate: string,
    recordstatus_lookupvalue_id?: number,
    userauditdetail_id?: number,
    checksum?: string
  }
  export interface IFinancialTransactionHistory {
    id: number,
    rootid: number,
    historydate: string,
    financialtransaction_id: number,
    dossiernumber: number,
    type_lookupvalue_id: number,
    status_lookupvalue_id: number,
    isactive: number,
    capturedate: string,
    recordstatus_lookupvalue_id?: number,
    userauditdetail_id?: number,
    checksum?: string
  }
  export interface IFinancialTransactionFee {
    id: number,
    rootid: number,
    historydate: string,
    financialtransaction_id: number,
    dossiernumber: number,
    type_lookupvalue_id: number,
    status_lookupvalue_id: number,
    isactive: number,
    capturedate: string,
    recordstatus_lookupvalue_id?: number,
    userauditdetail_id?: number,
    checksum?: string
  }

  export interface IShift {
    id: number,
    rootid: number,
    systemuserid: number,
    startdatetime: string,
    enddatetime?: string,
    issueuserid: number,
    isactive: number,
    capturedate: string,
    recordstatus_lookupvalue_id?: number,
    userauditdetail_id?: number,
    checksum?: string
  }
  export interface IShiftCash {
    id: number,
    rootid: number,
    shift_id: number,
    type_lookupvalue_id: number,
    floatamount: number,
    isactive: number,
    capturedate: string,
    recordstatus_lookupvalue_id?: number,
    userauditdetail_id?: number,
    checksum?: string
  }
  export interface IShiftCashDenomination {
    id: number,
    rootid: number,
    shiftcash_id: number,
    denomination_lookupvalue_id: number,
    currency_lookupvalue_id: number,
    denominationquantity: number,
    isactive: number,
    capturedate: string,
    recordstatus_lookupvalue_id?: number,
    userauditdetail_id?: number,
    checksum?: string
  }
}
