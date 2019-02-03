import { Observable, throwError} from 'rxjs';

export abstract class BaseService {
  public constructor() {
  }

  protected handleError(error: any): Observable<any> {
    let applicationError: any = error.headers.get('Application-Error');

    // Either an applicationError in the header or a model error in the body
    if (applicationError) {
      return throwError(applicationError);
    }

    let modelStateErrors: string = '';
    let serverError: any = error.json();

    if (!serverError.type) {
      for (var key in serverError) {
        if (serverError[key]) {
          modelStateErrors += serverError[key] + '\n';
        }
      }
    }

    modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
    return throwError(modelStateErrors || 'Server error');
  }
}
