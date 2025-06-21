import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientViewsComponent } from './client-views.component';

describe('ClientViewsComponent', () => {
  let component: ClientViewsComponent;
  let fixture: ComponentFixture<ClientViewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientViewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientViewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
