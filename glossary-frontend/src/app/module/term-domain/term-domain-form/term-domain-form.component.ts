import { Component, OnInit } from '@angular/core';
import { FormGroupDirective, NgForm, FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DomainService } from 'src/app/shared/service/domain.service';
import { Domain } from 'src/app/shared/model/domain.model';
import { TermDomain } from 'src/app/shared/model/term-domain.model';
import { TermDomainService } from 'src/app/shared/service/term-domain.service';
import { TermService } from 'src/app/shared/service/term.service';
import { Term } from 'src/app/shared/model/term.model';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-term-domain-form',
  templateUrl: './term-domain-form.component.html',
  styleUrls: ['./term-domain-form.component.css']
})
export class TermDomainFormComponent implements OnInit {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  formGroup: FormGroup;
  termDomain: TermDomain;
  domains: Domain[];
  terms: Term[];

  constructor(
    private termService: TermService,
    private domainService: DomainService,
    private termDomainService: TermDomainService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.termDomain = new TermDomain();
    this.domains = [];
    this.terms = [];


    this.activatedRoute.queryParams
      .pipe(filter(params => params.id))
      .subscribe(params => {
        this.termDomainService.findById(params.id)
          .subscribe((response) => this.formGroup.setValue(response));
      });

    this.formGroup = this.formBuilder.group({
      'id': [this.termDomain.id, null],
      'termId': [this.termDomain.termId, Validators.required],
      'domainId': [this.termDomain.domainId, Validators.required],
      'definition': [this.termDomain.definition, Validators.required],
      'term': [null, null],
      'domain': [null, null],
    });

    this.domainService.findAll().subscribe((response) => this.domains = response)
    this.termService.findAll().subscribe((response) => this.terms = response)
  }

  onSubmit() {
    const body = this.formGroup.value;
    this.termDomainService.createOrUpdate(body)
      .subscribe((response) => history.back())
  }

  hasError(controlName: string, rule: string) {
    return this.formGroup.controls[controlName].hasError(rule);
  }

}
