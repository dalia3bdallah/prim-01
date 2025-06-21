import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenfitsComponent } from './benfits.component';

describe('BenfitsComponent', () => {
  let component: BenfitsComponent;
  let fixture: ComponentFixture<BenfitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenfitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenfitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
