import { Injector, Injectable, Inject, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppInjectorService {
  private static injector: Injector = null;
  private static injectorReady: BehaviorSubject<Injector> = new BehaviorSubject<Injector>(null);
  public static injectorReady$: Observable<Injector> = new Observable<Injector>();

  public static setInjector(injector: Injector) {
    this.injector = injector;
    this.injectorReady$ = this.injectorReady.asObservable();
    this.injectorReady.next(this.injector);
  }

  public static getInjector(): Observable<Injector> {
    //return this.injectorReady$;
    return new Observable<Injector>();
  }
}
