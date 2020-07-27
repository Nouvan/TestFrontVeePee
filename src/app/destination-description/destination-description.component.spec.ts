import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationDescriptionComponent } from './destination-description.component';

describe('DestinationDescriptionComponent', () => {
  let component: DestinationDescriptionComponent;
  let fixture: ComponentFixture<DestinationDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinationDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
