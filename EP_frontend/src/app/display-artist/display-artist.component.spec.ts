import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayArtistComponent } from './display-artist.component';

describe('DisplayArtistComponent', () => {
  let component: DisplayArtistComponent;
  let fixture: ComponentFixture<DisplayArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayArtistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
