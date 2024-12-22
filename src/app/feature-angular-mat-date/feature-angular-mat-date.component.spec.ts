import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureAngularMatDateComponent } from './feature-angular-mat-date.component';

describe('FeatureAngularMatDateComponent', () => {
  let component: FeatureAngularMatDateComponent;
  let fixture: ComponentFixture<FeatureAngularMatDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureAngularMatDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureAngularMatDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
