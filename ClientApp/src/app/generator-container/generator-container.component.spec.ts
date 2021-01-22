import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorContainerComponent } from './generator-container.component';

describe('GeneratorContainerComponent', () => {
  let component: GeneratorContainerComponent;
  let fixture: ComponentFixture<GeneratorContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
