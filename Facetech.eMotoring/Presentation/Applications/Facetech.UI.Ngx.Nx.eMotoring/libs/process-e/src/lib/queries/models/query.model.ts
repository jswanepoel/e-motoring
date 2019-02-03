/*
 * Provider a query object
 */
import { IQuery } from './interfaces/query.interface';
 
export class Query implements IQuery {
  constructor(public category: number, public description: string) {
  }
}

