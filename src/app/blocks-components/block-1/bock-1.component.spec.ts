import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bock1Component } from './bock-1.component';

describe('Bock1Component', () => {
  let component: Bock1Component;
  let fixture: ComponentFixture<Bock1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bock1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
