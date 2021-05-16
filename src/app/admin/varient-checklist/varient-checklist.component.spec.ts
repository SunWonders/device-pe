import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VarientChecklistComponent } from './varient-checklist.component';

describe('VarientChecklistComponent', () => {
  let component: VarientChecklistComponent;
  let fixture: ComponentFixture<VarientChecklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VarientChecklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VarientChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
