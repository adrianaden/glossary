import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermDomainComponent } from './term-domain.component';

describe('TermDomainComponent', () => {
  let component: TermDomainComponent;
  let fixture: ComponentFixture<TermDomainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermDomainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
