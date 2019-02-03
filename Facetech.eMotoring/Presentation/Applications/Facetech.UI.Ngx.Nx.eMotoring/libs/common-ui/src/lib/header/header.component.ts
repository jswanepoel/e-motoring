import { Component, OnInit, OnDestroy, Directive } from '@angular/core';
import { Subscription } from 'rxjs';
import { SelectItemGroup } from 'primeng/api';

import { LoginService } from '../security/login.service';

@Component({
  selector: 'ngx-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public status: boolean;
  public subscription: Subscription;
  public isNavbarCollapsed = true;
  public selectedOption: string;
  public profileOptions: SelectItemGroup[];
  public color: string;


  public constructor(
    private loginService: LoginService) {
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
    this.subscription = this.loginService
      .authNavStatus$
      .subscribe(status => this.status = status);
  }

  public ngOnDestroy() {
    // prevent memory leak when component is destroyed
    this.subscription.unsubscribe();
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
    else if (val == '5') {
      document.documentElement.style.setProperty('--main-bg-color', this.color);
      document.documentElement.style.setProperty('--sub-bg-color', this.LightenDarkenColor(this.color, 40));

      document.documentElement.style.setProperty('--icon-color', 'white');
      document.documentElement.style.setProperty('--side-panel-color', this.LightenDarkenColor(this.color, 80));
      document.documentElement.style.setProperty('--bg-color', 'white');
    }

  }

  public LightenDarkenColor(col, amt): string {

    var usePound = false;

    if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
    }

    var num = parseInt(col, 16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00FF) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000FF) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    console.log((r + b + g))
    if ((r + b + g) > 400)
    {
      document.documentElement.style.setProperty('--font-color', 'white');
      document.documentElement.style.setProperty('--side-panel-font-color', 'white');
    }
    else {
    document.documentElement.style.setProperty('--font-color', 'black');
    document.documentElement.style.setProperty('--side-panel-font-color', 'black');
    }
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);

  }
  public logout() {
    this.loginService.logout();
  }
}
