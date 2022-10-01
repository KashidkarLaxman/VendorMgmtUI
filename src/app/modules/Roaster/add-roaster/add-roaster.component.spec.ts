import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoasterComponent } from './add-roaster.component';

describe('AddRoasterComponent', () => {
  let component: AddRoasterComponent;
  let fixture: ComponentFixture<AddRoasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
