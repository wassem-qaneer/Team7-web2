import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageJopPostingComponent } from './manage-jop-posting.component';

describe('ManageJopPostingComponent', () => {
  let component: ManageJopPostingComponent;
  let fixture: ComponentFixture<ManageJopPostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageJopPostingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageJopPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
