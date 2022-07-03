import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnaroliComponent } from './carnaroli.component';

describe('CarnaroliComponent', () => {
  let component: CarnaroliComponent;
  let fixture: ComponentFixture<CarnaroliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarnaroliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarnaroliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
