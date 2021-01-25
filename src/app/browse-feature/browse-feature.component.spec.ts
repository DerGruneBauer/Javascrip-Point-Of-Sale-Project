import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseFeatureComponent } from './browse-feature.component';

describe('BrowseFeatureComponent', () => {
  let component: BrowseFeatureComponent;
  let fixture: ComponentFixture<BrowseFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
