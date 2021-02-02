import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneradorSGAComponent } from './generador-sga.component';

describe('GeneradorSGAComponent', () => {
  let component: GeneradorSGAComponent;
  let fixture: ComponentFixture<GeneradorSGAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneradorSGAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneradorSGAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
