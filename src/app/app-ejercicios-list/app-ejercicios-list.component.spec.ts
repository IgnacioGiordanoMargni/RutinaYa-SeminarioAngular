import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEjerciciosListComponent } from './app-ejercicios-list.component';

describe('AppEjerciciosListComponent', () => {
  let component: AppEjerciciosListComponent;
  let fixture: ComponentFixture<AppEjerciciosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppEjerciciosListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppEjerciciosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
