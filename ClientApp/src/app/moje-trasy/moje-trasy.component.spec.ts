import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojeTrasyComponent } from './moje-trasy.component';

describe('MojeTrasyComponent', () => {
  let component: MojeTrasyComponent;
  let fixture: ComponentFixture<MojeTrasyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojeTrasyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojeTrasyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
