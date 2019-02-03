import { DoCheck, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService implements OnInit, DoCheck {
  private menuItems: MenuItem[] = [];
  private breadcrumbs: BehaviorSubject<MenuItem[]> = new BehaviorSubject<MenuItem[]>(null);  

  private currentLocation: string;
  private counter: number = 0;

  public constructor(
    public router: Router) {
    this.menuItems = [];
  }

  public ngOnInit(): void {
  }

  public ngDoCheck(): void {
    if (this.menuItems.length == 0) {
      this.counter = 0;
    }
  }

  public observeBreadCrumbs(): Observable<MenuItem[]> {
    return this.breadcrumbs.asObservable();
  }

  public nextBreadCrumbs(breadcrumbs: MenuItem[]) {
    this.breadcrumbs.next(breadcrumbs);
    console.log(breadcrumbs);
  }
  
  public getBreadCrumbs(): MenuItem[] {
    return this.menuItems;
  }

  public setBreadCrumbs(menuItems: MenuItem[]): void {
    this.menuItems = menuItems;
    console.log(this.menuItems);
  }

  public setCurrentLocation(location: string): void {
    this.currentLocation = location;
  }

  public getCurrentLocation(): string {
    return this.currentLocation;
  }

  public next(): void {
    if (this.counter < this.menuItems.length) {
      this.counter++;
      this.router.navigate([this.menuItems[this.counter].routerLink]);
      this.menuItems[this.counter - 1].disabled = true;
    }
  }

  public prev(): void {
    if (this.counter >= 0) {
      this.counter--;
      this.router.navigate([this.menuItems[this.counter].routerLink]);
      this.menuItems[this.counter + 1].disabled = false;
    }
  }
}
