import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodificationComponent } from './codification.component';

describe('CodificationComponent', () => {
  let component: CodificationComponent;
  let fixture: ComponentFixture<CodificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
