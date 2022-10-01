import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoasterComponent } from './update-roaster.component';

describe('UpdateRoasterComponent', () => {
  let component: UpdateRoasterComponent;
  let fixture: ComponentFixture<UpdateRoasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRoasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRoasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
