import { Component, OnInit, OnDestroy, Directive } from '@angular/core';
import { Subscription } from 'rxjs';
import { SelectItemGroup } from 'primeng/api';

@Component({
  selector: 'ngx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public isNavbarCollapsed = true;
  private selectedOption: string;
  private profileOptions: SelectItemGroup[];

  public status: boolean = true;
  public subscription: Subscription;

  public constructor() {
  }

  public ngOnInit() {
    this.profileOptions = [
      {
        label: 'Themes',
        items: [
          { label: 'Red', value: 'Audi' },
          { label: 'Blue', value: 'BMW' },
          { label: 'Yellow', value: 'Mercedes' }
        ]
      },
      {
        label: 'Profile',
        items: [
          { label: 'Cadillac', value: 'Cadillac' },
          { label: 'Ford', value: 'Ford' }
        ]
      }
    ];
  }

  public ngOnDestroy() {
    // prevent memory leak when component is destroyed
    //this.subscription.unsubscribe();
  }

  public themeChange(val: string) {
    if (val == '1') {
      document.documentElement.style.setProperty('--main-bg-color', '#2d353c');
      document.documentElement.style.setProperty('--sub-bg-color', '#545b61');
      document.documentElement.style.setProperty('--font-color', 'white');
      document.documentElement.style.setProperty('--icon-color', 'white');
      document.documentElement.style.setProperty('--side-panel-color', 'whitesmoke');
      document.documentElement.style.setProperty('--side-panel-font-color', 'black');
      document.documentElement.style.setProperty('--bg-color', 'white');
    } else if (val == '2') {
      document.documentElement.style.setProperty('--main-bg-color', '#4e342e');
      document.documentElement.style.setProperty('--sub-bg-color', '#795548');
      document.documentElement.style.setProperty('--font-color', 'white');
      document.documentElement.style.setProperty('--icon-color', 'white');
      document.documentElement.style.setProperty('--side-panel-color', '#bcaaa4');
      document.documentElement.style.setProperty('--side-panel-font-color', 'white');
      // document.documentElement.style.setProperty('--bg-color', '#d7ccc8');
    } else if (val == '3') {
      document.documentElement.style.setProperty('--main-bg-color', '#303F9F');
      document.documentElement.style.setProperty('--sub-bg-color', '#3F51B5');
      // document.documentElement.style.setProperty('--bg-color', '#C5CAE9');
      document.documentElement.style.setProperty('--font-color', 'white');
      document.documentElement.style.setProperty('--side-panel-color', '#7986cb');
      document.documentElement.style.setProperty('--side-panel-font-color', 'white');
    } else if (val == '4') {
      document.documentElement.style.setProperty('--main-bg-color', '#558b2f');
      document.documentElement.style.setProperty('--sub-bg-color', '#689f38');
      document.documentElement.style.setProperty('--font-color', 'white');
      document.documentElement.style.setProperty('--icon-color', 'white');
      document.documentElement.style.setProperty('--side-panel-color', '#aed581');
      document.documentElement.style.setProperty('--side-panel-font-color', 'black');
      // document.documentElement.style.setProperty('--bg-color', '#c5e1a5');
    }
  }
}
