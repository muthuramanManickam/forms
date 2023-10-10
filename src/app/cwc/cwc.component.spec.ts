import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CwcComponent } from './cwc.component';

describe('CwcComponent', () => {
  let component: CwcComponent;
  let fixture: ComponentFixture<CwcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CwcComponent]
    });
    fixture = TestBed.createComponent(CwcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
