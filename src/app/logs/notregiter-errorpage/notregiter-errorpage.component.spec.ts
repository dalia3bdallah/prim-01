import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotregiterErrorpageComponent } from './notregiter-errorpage.component';

describe('NotregiterErrorpageComponent', () => {
  let component: NotregiterErrorpageComponent;
  let fixture: ComponentFixture<NotregiterErrorpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotregiterErrorpageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotregiterErrorpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
