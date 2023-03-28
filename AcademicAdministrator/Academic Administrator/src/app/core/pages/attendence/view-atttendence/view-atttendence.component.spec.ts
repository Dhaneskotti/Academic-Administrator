import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAtttendenceComponent } from './view-atttendence.component';

describe('ViewAtttendenceComponent', () => {
  let component: ViewAtttendenceComponent;
  let fixture: ComponentFixture<ViewAtttendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAtttendenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAtttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
