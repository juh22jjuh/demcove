import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseregistrationComponent } from './caseregistration.component';

describe('CaseregistrationComponent', () => {
  let component: CaseregistrationComponent;
  let fixture: ComponentFixture<CaseregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaseregistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaseregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
