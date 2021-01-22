import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracownicyComponent } from './pracownicy.component';

describe('PracownicyComponent', () => {
  let component: PracownicyComponent;
  let fixture: ComponentFixture<PracownicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracownicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracownicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
