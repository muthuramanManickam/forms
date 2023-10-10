import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwcDetailsComponent } from './cwc-details.component';

describe('CwcDetailsComponent', () => {
  let component: CwcDetailsComponent;
  let fixture: ComponentFixture<CwcDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CwcDetailsComponent]
    });
    fixture = TestBed.createComponent(CwcDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
