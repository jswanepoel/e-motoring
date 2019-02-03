import { Component, ElementRef, EventEmitter, Input, Output, Renderer, ViewChild, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'ngx-image-map-area',
  templateUrl: 'image-map-area.component.html',
  styleUrls: ['image-map-area.component.css']
})
export class ImageMapAreaComponent implements OnInit {

  @ViewChild('canvas') private canvas: ElementRef;
  @ViewChild('container') private container: ElementRef;
  @ViewChild('image') private image: ElementRef;

  @Input('newFingerStatus') set setNewFingerStatus(newfingerStatus: string) {
    this.newFingerStatus = newfingerStatus;
  }
  public newFingerStatus: string = ""; // When marker is clicked, change to this status.


  @Input('fingerStatuses') set setFingerStatuses(fingerStatuses: string[][]) {
    this.fingerStatuses = fingerStatuses;
  }
  public fingerStatuses: string[][] = [];

  @Input('markers') set setMarkers(markers: number[][]) {
    this.markerActive = null;
    this.markerHover = null;
    this.markers = markers;
    this.draw();
  }
  private markers: number[][] = [];

  @Input() markerRadius: number = 10;
  @Input() src: string;
  //@Output('change') changeEvent = new EventEmitter<number[]>();
  @Output('change') changeEvent = new EventEmitter<number>();
  @Output('mark') markEvent = new EventEmitter<number[]>();
  //@Output('fingerMarked') fingerMarkedEvent = new EventEmitter<string>(); // Finger was marked, notify parent component.

  private markerHover: number = null; // Index of the hover state marker.
  private pixels: number[][] = []; // Pixel position of markers.

  public markerActive: number; // Index of the active state marker.
  public menuItems: MenuItem[];


  public constructor(private renderer: Renderer) {
  }

  public ngOnInit(): void {
    this.menuItems = [{
      label: 'Mark Active',
      icon: 'pi pi-fw pi-plus'
    }, {
      label: 'Mark Inactive',
      icon: 'pi pi-fw pi-minus'
    }];
  }

  private change(): void {
    if (this.markerActive === null) {
      this.changeEvent.emit(null);
    } else {
      this.changeEvent.emit(this.markers.findIndex(markerItem => markerItem === this.markers[this.markerActive]));
    }
    this.draw();
  }

  /**
   * Get the cursor position relative to the canvas.
   */
  private cursor(event: MouseEvent): number[] {
    const rect = this.canvas.nativeElement.getBoundingClientRect();
    return [
      event.clientX - rect.left,
      event.clientY - rect.top
    ];
  }

  /**
   * Draw a marker.
   */
  private drawMarker(pixel: number[], type?: string): void {

    let normalOpacity: number = 0.3;
    let hoverOpacity: number = 0.3;
    let activeOpacity: number = 0;

    const context = this.canvas.nativeElement.getContext('2d');
    context.beginPath();
    context.arc(pixel[0], pixel[1], this.markerRadius, 0, 2 * Math.PI);

    switch (type) {
      case 'Available':
        context.fillStyle = 'rgba(0, 120, 247, ' + normalOpacity + ')'; // Blue
        break;
      case 'AvailableHover':
        context.fillStyle = 'rgba(0, 120, 247, ' + hoverOpacity + ')'; // Blue
        break;
      case 'AvailableActive':
        context.fillStyle = 'rgba(0, 120, 247, ' + activeOpacity + ')'; // Blue
        break;

      case 'Missing':
        context.fillStyle = 'rgba(255, 0, 0, ' + normalOpacity + ')'; // Red
        break;
      case 'MissingHover':
        context.fillStyle = 'rgba(255, 0, 0, ' + hoverOpacity + ')'; // Red
        break;
      case 'MissingActive':
        context.fillStyle = 'rgba(255, 0, 0, ' + activeOpacity + ')'; // Red
        break;

      case 'Injured':
      case 'NotRecognised':
        context.fillStyle = 'rgba(255, 140, 0, ' + normalOpacity + ')'; // Orange
        break;
      case 'InjuredHover':
      case 'NotRecognisedHover':
        context.fillStyle = 'rgba(255, 140, 0, ' + hoverOpacity + ')'; // Orange
        break;
      case 'InjuredActive':
      case 'NotRecognisedActive':
        context.fillStyle = 'rgba(255, 140, 0, ' + activeOpacity + ')'; // Orange
        break;

      case 'Recapture':
      case 'Capture': 
        context.fillStyle = 'rgba(0, 120, 247, 0.7)'; // 'rgba(204, 204, 0, 0.6)'; // Yellow
        break;
      case 'RecaptureHover':
      case 'CaptureHover':
        context.fillStyle = 'rgba(0, 120, 247, 0.7)'; // Blue
        break;
      case 'RecaptureActive':
      case 'CaptureActive':
        context.fillStyle = 'rgba(0, 120, 247, 0)'; // Blue
        break;

      case 'CapturedHighQuality':
        context.fillStyle = 'rgba(34,139,34, 1)'; // Green
        break;
      case 'CapturedMediumQuality':
        //context.fillStyle = 'rgba(255, 140, 0, 1)'; // Orange
        context.fillStyle = 'rgba(34,139,34, 1)'; // Green
        break;
      case 'CapturedLowQuality':
        context.fillStyle = 'rgba(255, 0, 0, 1)'; // Red
        break;

      default:
        console.log('"Type specified is incorrect : ' + type);
        context.fillStyle = 'rgba(0, 0, 0, 1)'; // Black
    }

    context.fill();
  }

  /**
   * Check if a position is inside a marker.
   */
  private insideMarker(pixel: number[], coordinate: number[]): boolean {
    return Math.sqrt((coordinate[0] - pixel[0]) * (coordinate[0] - pixel[0]) + (coordinate[1] - pixel[1]) * (coordinate[1] - pixel[1])) < this.markerRadius;
  }

  /**
   * Convert a percentage position to a pixel position.
   */
  private markerToPixel(marker: number[]): number[] {
    const image: HTMLImageElement = this.image.nativeElement;
    return [
      (image.clientWidth / 100) * marker[0],
      (image.clientHeight / 100) * marker[1]
    ];
  }

  /**
   * Convert a pixel position to a percentage position.
   */
  private pixelToMarker(pixel: number[]): number[] {
    const image: HTMLImageElement = this.image.nativeElement;
    return [
      (pixel[0] / image.clientWidth) * 100,
      (pixel[1] / image.clientHeight) * 100
    ];
  }

  /**
   * Sets the new marker position.
   */
  private mark(pixel: number[]): void {
    this.markerActive = this.markers.length;
    this.markers.push(this.pixelToMarker(pixel));
    this.draw();
    this.markEvent.emit(this.markers[this.markerActive]);
  }

  /**
   * Sets the marker pixel positions.
   */
  private setPixels(): void {
    this.pixels = [];
    this.markers.forEach(marker => {
      this.pixels.push(this.markerToPixel(marker));
    });
  }

  /**
   * Clears the canvas and draws the markers.
   */
  public draw(): void {

    const canvas: HTMLCanvasElement = this.canvas.nativeElement;
    const container: HTMLDivElement = this.container.nativeElement;
    const image: HTMLImageElement = this.image.nativeElement;
    const height = image.clientHeight;
    const width = image.clientWidth;
    this.renderer.setElementAttribute(canvas, 'height', `${height}`);
    this.renderer.setElementAttribute(canvas, 'width', `${width}`);
    this.renderer.setElementStyle(container, 'height', `${height}px`);
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, width, height);
    this.setPixels();

    this.pixels.forEach((pixel, index) => {

      if (this.markerActive === index) {
        if (this.fingerStatuses[index][1].toString() == 'Missing') {
          this.drawMarker(pixel, 'MissingActive');
        }
        else if (this.fingerStatuses[index][1].toString() == 'Injured') {
          this.drawMarker(pixel, 'InjuredActive');
        }
        else if (this.fingerStatuses[index][1].toString() == 'Capture') {
          this.drawMarker(pixel, 'CaptureActive');
        }
        else if (this.fingerStatuses[index][1].toString() == 'Recapture') {
          this.drawMarker(pixel, 'RecaptureActive');
        }
        else if (this.fingerStatuses[index][1].toString() == 'NotRecognised') {
          this.drawMarker(pixel, 'NotRecognisedActive');
        }
        else if (this.fingerStatuses[index][1].toString() == 'CapturedHighQuality') {
          this.drawMarker(pixel, 'CapturedHighQuality');
        }
        else if (this.fingerStatuses[index][1].toString() == 'CapturedMediumQuality') {
          this.drawMarker(pixel, 'CapturedMediumQuality');
        }
        else if (this.fingerStatuses[index][1].toString() == 'CapturedLowQuality') {
          this.drawMarker(pixel, 'CapturedLowQuality');
        }
        else {
          this.drawMarker(pixel, 'AvailableActive');
        }
      }

      if (this.markerHover === index) {
        if (this.fingerStatuses[index][1].toString() == 'Missing') {
          this.drawMarker(pixel, 'MissingHover');
        }
        else if (this.fingerStatuses[index][1].toString() == 'Injured') {
          this.drawMarker(pixel, 'InjuredHover');
        }
        else if (this.fingerStatuses[index][1].toString() == 'Capture') {
          this.drawMarker(pixel, 'CaptureHover');
        }
        else if (this.fingerStatuses[index][1].toString() == 'Recapture') {
          this.drawMarker(pixel, 'RecaptureHover');
        }
        else if (this.fingerStatuses[index][1].toString() == 'NotRecognised') {
          this.drawMarker(pixel, 'NotRecognisedHover');
        }
        else {
          this.drawMarker(pixel, 'AvailableHover');
        }
      }
      else {
        this.drawMarker(pixel, this.fingerStatuses[index][1].toString());
      }

    });
  }

  private resetStatusesToAvailable(): void {
    if ((this.newFingerStatus == 'Recapture') || (this.newFingerStatus == 'Capture') || (this.newFingerStatus == 'NotRecognised')) {
      for (var i = 0; i < 10; i++) {
        if ((this.fingerStatuses[i][1].toString() === "Recapture") || (this.fingerStatuses[i][1].toString() === "Capture")) {
          this.fingerStatuses[i][1] = "Available";
        }
      }
    }
  }

  private changeFingerStatus(index: number): boolean {
    if (this.newFingerStatus) {
      if ((this.fingerStatuses[index][1] == this.newFingerStatus) && (this.newFingerStatus != 'Recapture') && (this.newFingerStatus != 'NotRecognised')) {
        this.fingerStatuses[index][1] = "Available";
      }
      else {
        this.fingerStatuses[index][1] = this.newFingerStatus;
      }
      this.markerActive = index;
      return true;
    }
    else {
      return false;
    }
  }

  public onClick(event: MouseEvent): void {

    const cursor = this.cursor(event);
    var active = false;

    this.resetStatusesToAvailable()

    if (this.changeEvent.observers.length) {
      var change = true;

      this.pixels.forEach((pixel, index) => {
        if (this.insideMarker(pixel, cursor)) {
          active = true;
          change = this.changeFingerStatus(index);
        }
      });

      //if (!active && this.markerActive !== null) {
      //  this.markerActive = null;
      //  change = true;
      //}

      if (change) {
        this.change();
      }
    }
  }

  public onLoad(event: UIEvent): void {
    this.draw();
  }

  public onMouseMove(event: MouseEvent): void {
    if (this.changeEvent.observers.length) {
      const cursor = this.cursor(event);
      var hover = false;
      var draw = false;
      this.pixels.forEach((pixel, index) => {
        if (this.insideMarker(pixel, cursor)) {
          hover = true;
          this.canvas.nativeElement.style.cursor = "pointer";
          if (this.markerHover === null || this.markerHover !== index) {
            this.markerHover = index;
            draw = true;
          }
        }
      });

      if (!hover && this.markerHover !== null) {
        this.canvas.nativeElement.style.cursor = "default";
        this.markerHover = null;
        draw = true;
      }

      if (draw) {
        this.draw();
      }
    }
  }

  public onMouseOut(event: MouseEvent): void {
    if (this.markerHover) {
      this.canvas.nativeElement.style.cursor = "default";
      this.markerHover = null;
      this.draw();
    }
  }

  public onResize(event: UIEvent): void {
    this.draw();
  }
}
