import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageMapAreaComponent } from './image-map-area.component';

describe('ImageMapAreaComponent', () => {
  let component: ImageMapAreaComponent;
  let fixture: ComponentFixture<ImageMapAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageMapAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageMapAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
