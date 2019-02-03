import { Injectable, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService implements OnInit, DoCheck {
  ngDoCheck(): void {
    if (this.menuItems.length == 0) {
      this.counter = 0;
    }
  }
  private menuItems: MenuItem[];
  private currentLocation: string;
  private counter: number = 0;

  public constructor(public router: Router) {
    this.menuItems = [{}];
  }

  public ngOnInit(): void {
  }

  public getBreadCrumbs(): MenuItem[] {
    return this.menuItems;
  }

  public setBreadCrumbs(menuItems: MenuItem[]): void {
    this.menuItems = menuItems;
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
