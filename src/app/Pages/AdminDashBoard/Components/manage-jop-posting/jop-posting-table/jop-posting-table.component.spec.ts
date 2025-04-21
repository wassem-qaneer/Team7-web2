import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JopPostingTableComponent } from './jop-posting-table.component';

describe('JopPostingTableComponent', () => {
  let component: JopPostingTableComponent;
  let fixture: ComponentFixture<JopPostingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JopPostingTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JopPostingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
