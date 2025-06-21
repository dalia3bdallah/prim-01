import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePackagesComponent } from './price-packages.component';

describe('PricePackagesComponent', () => {
  let component: PricePackagesComponent;
  let fixture: ComponentFixture<PricePackagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricePackagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricePackagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
