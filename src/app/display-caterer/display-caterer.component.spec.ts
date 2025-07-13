import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCatererComponent } from './display-caterer.component';

describe('DisplayCatererComponent', () => {
  let component: DisplayCatererComponent;
  let fixture: ComponentFixture<DisplayCatererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayCatererComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayCatererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
