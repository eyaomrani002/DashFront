import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynthesePersonnelComponent } from './synthese-personnel.component';

describe('SynthesePersonnelComponent', () => {
  let component: SynthesePersonnelComponent;
  let fixture: ComponentFixture<SynthesePersonnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynthesePersonnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SynthesePersonnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
