import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KierowcyComponent } from './kierowcy.component';

describe('KierowcyComponent', () => {
  let component: KierowcyComponent;
  let fixture: ComponentFixture<KierowcyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KierowcyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KierowcyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
