import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KierowcyGeneratorComponent } from './kierowcy-generator.component';

describe('KierowcyGeneratorComponent', () => {
  let component: KierowcyGeneratorComponent;
  let fixture: ComponentFixture<KierowcyGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KierowcyGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KierowcyGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
