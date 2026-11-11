import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OlaTurma } from './ola-turma';

describe('OlaTurma', () => {
  let component: OlaTurma;
  let fixture: ComponentFixture<OlaTurma>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OlaTurma],
    }).compileComponents();

    fixture = TestBed.createComponent(OlaTurma);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
