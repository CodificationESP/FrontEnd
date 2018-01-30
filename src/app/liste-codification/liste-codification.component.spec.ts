import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCodificationComponent } from './liste-codification.component';

describe('ListeCodificationComponent', () => {
  let component: ListeCodificationComponent;
  let fixture: ComponentFixture<ListeCodificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCodificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCodificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
