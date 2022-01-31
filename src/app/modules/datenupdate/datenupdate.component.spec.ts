import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatenupdateComponent } from './datenupdate.component';

describe('DatenupdateComponent', () => {
  let component: DatenupdateComponent;
  let fixture: ComponentFixture<DatenupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatenupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatenupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
