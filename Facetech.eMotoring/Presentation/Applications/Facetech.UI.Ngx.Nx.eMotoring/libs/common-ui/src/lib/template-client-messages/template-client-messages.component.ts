import { Component } from '@angular/core';

//const url = 'https://cdn.ckeditor.com/4.7.1/full/ckeditor.js';

@Component({
  selector: 'ngx-template-client-messages',
  templateUrl: './template-client-messages.component.html',
  styleUrls: ['./template-client-messages.component.css']
})
export class TemplateClientMessagesComponent {
  //loadAPI: Promise<any>;
  public editorValue: string = '';

  public constructor() {
  }

  public ngOnInit() {
    //this.loadAPI = new Promise((resolve) => {
    //  console.log('resolving promise...');
    //  this.loadScript();
    //});
  }

  //public loadScript() {
  //  console.log('preparing to load...')
  //  let node = document.createElement('script');
  //  node.src = url;
  //  node.type = 'text/javascript';
  //  node.async = true;
  //  node.charset = 'utf-8';
  //  document.getElementsByTagName('head')[0].appendChild(node);
  //  console.log('Script loaded.')
  //}
}
