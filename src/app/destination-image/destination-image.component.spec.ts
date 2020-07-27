import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationImageComponent } from './destination-image.component';

describe('DestinationImageComponent', () => {
  let component: DestinationImageComponent;
  let fixture: ComponentFixture<DestinationImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
