import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSelectionComponent } from './org-selection.component';

describe('OrgSelectionComponent', () => {
  let component: OrgSelectionComponent;
  let fixture: ComponentFixture<OrgSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgSelectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrgSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
