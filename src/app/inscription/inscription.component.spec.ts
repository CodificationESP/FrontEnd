import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionComponent } from './inscription.component';

describe('AccueilComponent', () => {
  let component:InscriptionComponent;
  let fixture: ComponentFixture<InscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
