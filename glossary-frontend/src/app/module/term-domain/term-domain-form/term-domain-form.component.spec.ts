import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermDomainFormComponent } from './term-domain-form.component';

describe('TermDomainFormComponent', () => {
  let component: TermDomainFormComponent;
  let fixture: ComponentFixture<TermDomainFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermDomainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermDomainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
