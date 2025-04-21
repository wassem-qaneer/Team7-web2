import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySaveJobComponent } from './my-save-job.component';

describe('MySaveJobComponent', () => {
  let component: MySaveJobComponent;
  let fixture: ComponentFixture<MySaveJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MySaveJobComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySaveJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
