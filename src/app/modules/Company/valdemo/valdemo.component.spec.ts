import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValdemoComponent } from './valdemo.component';

describe('ValdemoComponent', () => {
  let component: ValdemoComponent;
  let fixture: ComponentFixture<ValdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
