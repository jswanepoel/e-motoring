import { Component, OnInit, ViewChild, Input, ElementRef } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import { PDFDocumentProxy, PDFProgressData, PDFSource } from 'pdfjs-dist';
import { faExpand, faAngleDoubleDown, faUndoAlt, faUndo, faSearchPlus, faSearchMinus, faWindowMinimize } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft, faAngleRight, faAngleDoubleRight, faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';

import { NotificationService } from '../notification/notification.service';
import { IMessage } from '../notification/models/interfaces/message.interface';
import { Message } from '../notification/models/message';
import { MessageType } from '../notification/models/enums/message-type';

@Component({
  selector: 'ngx-pdf-viewer',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.css']
})
export class PdfViewComponent implements OnInit {
  @Input('PDFBlob') set PDFBlob(val: Blob) {
    if (val != undefined) {
      this.pdfSrc = window.URL.createObjectURL(val);
    } else {
    }
  };

  @ViewChild('mainContainer') mainDiv: HTMLElement;
  @ViewChild('elementSize') elementSize: ElementRef;
  _viewer: PdfViewerComponent;
  public pdfWidth: string;
  public pdfHeight: string;
  public pdfSrc: string | PDFSource | Uint8Array;
  private error: any;
  public page = 1;
  public rotation = 0;
  public zoom = 0.79;
  public pdf: PDFDocumentProxy;
  private progressData: PDFProgressData;
  public renderText = false;
  public isLoaded = false;
  public showAll = false;
  private outline: any[];

  public originalSize = true;
  public fitToPage = true;
  public autoresize = true;
  public fullWidth = true;

  public Icons = {
    previousIcon: faAngleLeft,
    nextIcon: faAngleRight,
    firstIcon: faAngleDoubleLeft,
    lastIcon: faAngleDoubleRight,
    zoomInIcon: faSearchPlus,
    zoomOutIcon: faSearchMinus,
    showAllIcon: faAngleDoubleDown,
    resizeIcon: faExpand,
    fitIcon: faWindowMinimize
  }

  public constructor(
    private notificationSvc: NotificationService) {
  }

  public ngOnInit() {
    let message: IMessage = Message.create(
      MessageType.Error,
      'Password Protected',
      'Password: ',
      'Pass',
      'input',
      0,
      true,
      true,
      { confirm: 'View Pdf', decline: 'Close' });
    this.notificationSvc.notify(message);
    const xhr = new XMLHttpRequest();
    xhr.open('GET', './assets/test.pdf', true);
    xhr.responseType = 'blob';

    xhr.onload = (e: any) => {
      if (xhr.status === 200) {
        this.pdfSrc = window.URL.createObjectURL(xhr.response);
        this.isLoaded = true;
      }
    };

    xhr.send();

    this.calculatePreviewPageWidth();
    this.calculatePreviewPageHeight();
  }

  public onExpand(event?) {
    this.fullWidth = !this.fullWidth;
    this.zoom = 0.79;
    this.doFit();
  }

  public onShowAll() {
    this.showAll = !this.showAll;
    this.doFit();
  }

  public doFit() {
    this.calculatePreviewPageWidth();
    this.calculatePreviewPageHeight();
    this.reloadPdf();
  }

  public reloadPdf() {
    this.isLoaded = false;
    let newSrc;
    if (this.pdfSrc instanceof ArrayBuffer) {
      newSrc = { data: this.pdfSrc };
    } else if (typeof this.pdfSrc === 'string') {
      newSrc = { url: this.pdfSrc };
    } else {
      newSrc = { ...this.pdfSrc };
    }
    this.pdfSrc = newSrc;
  }

  public incrementPage(amount: number) {
    this.page += amount;
  }

  public incrementZoom(amount: number) {
    this.zoom += amount;
  }

  public rotate(angle: number) {
    //this.rotation += angle;
    //if (this.rotation == 90 || this.rotation==270) {
    //  this.pdfWidth = '410px'; //(this.elementSize.nativeElement.offsetHeight - 221).toString()+'px';
    //  this.pdfHeight = '302px';// (this.elementSize.nativeElement.offsetWidth - 860).toString() + 'px';
    //  //let newSrc;
    //  //if (this.pdfSrc instanceof ArrayBuffer) {
    //  //  newSrc = { data: this.pdfSrc };
    //  //} else if (typeof this.pdfSrc === 'string') {
    //  //  newSrc = { url: this.pdfSrc };
    //  //} else {
    //  //  newSrc = { ...this.pdfSrc };
    //  //}
    //  //this.pdfSrc = newSrc;
    //  //alert(this.rotation);
    //} else {
    //  this.doFit(true);
    //}
  }

  public afterLoadComplete(pdf: PDFDocumentProxy) {
    this.pdf = pdf;
    this.loadOutline();
    this.isLoaded = true;
  }

  public loadOutline() {
    this.pdf.getOutline().then((outline: any[]) => {
      this.outline = outline;
    });
  }

  public onError(error: any) {
    this.error = error; // set error
    if (error.name === 'PasswordException') {
      let message: IMessage = Message.create(
        MessageType.Error,
        'Password Protected',
        'Password: ',
        'Pass',
        'input',
        0,
        true,
        true,
        { confirm: 'View Pdf', decline: 'Close' });
      this.notificationSvc.notify(message);
      let password;
      let sub = this.notificationSvc.notification();

      if (password) {
        this.error = null;
        // this.setPassword(password);
      }
    }
  }

  public setPassword(password: string) {
    let newSrc;
    if (this.pdfSrc instanceof ArrayBuffer) {
      newSrc = { data: this.pdfSrc };
    } else if (typeof this.pdfSrc === 'string') {
      newSrc = { url: this.pdfSrc };
    } else {
      newSrc = { ...this.pdfSrc };
    }

    newSrc.password = password;

    this.pdfSrc = newSrc;
  }

  public onProgress(progressData: PDFProgressData) {
    this.progressData = progressData;
    this.error = null;
  }

  public pageRendered(e) {
    //this.isLoaded = true;
  }

  public setFullpageZoom(): void {
    this.zoom = 0.485;
  }

  public calculatePreviewPageHeight(): string {
    let parentHeight = this.elementSize.nativeElement.offsetHeight - 160; //221
    this.pdfHeight = parentHeight < 315 ? '315px' : parentHeight.toString() + 'px';
    return this.pdfHeight;
  }

  public calculatePreviewPageWidth(): string {
    //let parentWidth = this.elementSize.nativeElement.offsetWidth - 1200; 
    //this.pdfWidth = this.fullWidth ? '100%' : ((parentWidth < 200) ? '200px' : parentWidth.toString() + 'px');
    //return this.pdfWidth;
    //return (this.elementSize.nativeElement.offsetWidth - 190) + "px"; //"400px"; //80%
    return (this.elementSize.nativeElement.offsetWidth - 50) + "px"; //"400px"; //80%
  }
}
