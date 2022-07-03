import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArborioComponent } from './arborio.component';

describe('ArborioComponent', () => {
  let component: ArborioComponent;
  let fixture: ComponentFixture<ArborioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArborioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArborioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
