import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogistycyComponent } from './logistycy.component';

describe('LogistycyComponent', () => {
  let component: LogistycyComponent;
  let fixture: ComponentFixture<LogistycyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogistycyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogistycyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
