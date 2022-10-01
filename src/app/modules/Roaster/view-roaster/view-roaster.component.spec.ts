import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRoasterComponent } from './view-roaster.component';

describe('ViewRoasterComponent', () => {
  let component: ViewRoasterComponent;
  let fixture: ComponentFixture<ViewRoasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRoasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRoasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
