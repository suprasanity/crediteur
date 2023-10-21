import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelEmpruntComponent } from './nouvel-emprunt.component';

describe('NouvelEmpruntComponent', () => {
  let component: NouvelEmpruntComponent;
  let fixture: ComponentFixture<NouvelEmpruntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NouvelEmpruntComponent]
    });
    fixture = TestBed.createComponent(NouvelEmpruntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
