import { AfterViewInit, Component, DoCheck, ElementRef, HostListener, Injector, OnInit, ViewChild } from '@angular/core';
import { AppInjectorService } from '@facetech/common-ui';
import { BreadcrumbsService } from '@facetech/widgets';
import { MenuItem } from 'primeng/primeng';
import { Subscription, Observable, noop } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter, tap } from 'rxjs/operators';

@Component({
  selector: 'ngx-app-content',
  templateUrl: './app-content.component.html',
  styleUrls: ['./app-content.component.css']
})
export class AppContentComponent implements AfterViewInit, OnInit {
  @ViewChild('breadcrumbContainer') breadcrumbContainerRef: ElementRef;
  private breadcrumbContainer: any;
  public breadcrumbs$: Observable<MenuItem[]>;

  public menuItems: MenuItem[];


  private title = 'e-motoring';
  private height: number = window.innerHeight;
  private width: number = window.innerWidth - 50;

  //private menu: boolean = false;
  //private status: boolean = true;
  public activated: boolean = true;
  //public subscription: Subscription;
  //public offset: number = 300;
  //public bOffset: number = 165;

  public constructor(
    private router: Router,
    private injector: Injector,
    private breadcrumbsService: BreadcrumbsService) {
    AppInjectorService.setInjector(this.injector);

    this.breadcrumbs$ = this.breadcrumbsService.observeBreadCrumbs();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      tap((event: NavigationEnd) => {
        this.breadcrumbsService.setCurrentLocation(event.url);
        console.log(event.url);
      })
    ).subscribe(
      noop,
      (error) => console.log(error));


    //if (this.menuItems != null) {
    //  document.documentElement.style.setProperty('--div-size', (this.height - this.offset) + 'px');
    //} else {
    //  document.documentElement.style.setProperty('--div-size', (this.height - this.bOffset) + 'px');
    //}
  }

  public ngAfterViewInit() {
    this.breadcrumbContainer = this.breadcrumbContainerRef.nativeElement;
  }

  public ngOnInit(): void {
    //if (this.menuItems != null) {
    //  document.documentElement.style.setProperty('--div-size', (this.height - this.offset) + 'px');
    //} else {
    //  document.documentElement.style.setProperty('--div-size', (this.height - this.bOffset) + 'px');
    //}
  }

  //public ngDoCheck(): void {
  //  this.menuItems = this.breadcrumbsService.getBreadCrumbs();
  //}

  public calculatePreviewPageHeight(): number {
    return this.menuItems == null ? this.height - 90 : this.height - 170;
  }

  public calculatePreviewPageWidth(): number {
    return this.width - 250;
  }

  //private async delay(ms: number) {
  //  await new Promise(resolve => setTimeout(() => resolve(), ms));
  //}

  //@HostListener('window:resize', ['$event'])
  //public onResize(event) {
  //  this.height = event.target.innerHeight;
  //  this.width = this.breadcrumbContainer.offsetWidth;
  //  document.documentElement.style.setProperty('--div-size', (this.height - this.offset) + 'px');
  //}

  //@HostListener('document:click', ['$event'])
  //public onClick(event) {
  //  if (this.menuItems != null) {
  //    document.documentElement.style.setProperty('--div-size', (this.height - this.offset) + 'px');
  //  } else {
  //    document.documentElement.style.setProperty('--div-size', (this.height - this.bOffset) + 'px');
  //  }

  //  if (event.target.className == "pi pi-bars hamb") {
  //    this.width = this.breadcrumbContainer.offsetWidth;
  //    if (!this.menu) {
  //      this.delay(400).then(any => {
  //        this.width = this.breadcrumbContainer.offsetWidth + 240;
  //        this.menu = true;
  //        console.log(this.menu);
  //      });
  //    } else {
  //      this.delay(10).then(any => {
  //        this.width = this.breadcrumbContainer.offsetWidth + 210;
  //        this.menu = false;
  //        console.log(this.menu);
  //      });
  //    }
  //  }
  //}
}
