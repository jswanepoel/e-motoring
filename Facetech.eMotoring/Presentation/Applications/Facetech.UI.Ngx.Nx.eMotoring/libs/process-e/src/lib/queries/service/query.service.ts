import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { BaseService, ConfigService } from '@facetech/common-ui';
import { IQuery } from '../models/interfaces/query.interface';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class QueryService extends BaseService {

  public baseUrl: string = '';

  constructor(private http: HttpClient, private configService: ConfigService) {
    super();

    this.baseUrl = this.configService.getApiURI();
  }
  
  public add(query: IQuery): Observable<IQuery> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    var queryUrl: string = `${this.baseUrl}/query/save`;
     
    return this.http.post<IQuery>(queryUrl, query, httpOptions)
      .pipe(
      catchError(error => this.handleError(error))
    );
  }
}
