import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, NgForm, FormGroupDirective, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Domain } from 'src/app/shared/model/domain.model';
import { DomainService } from 'src/app/shared/service/domain.service';
import { ActivatedRoute, Params } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TermService } from 'src/app/shared/service/term.service';
import { Term } from 'src/app/shared/model/term.model';

@Component({
  selector: 'app-term-form',
  templateUrl: './term-form.component.html',
  styleUrls: ['./term-form.component.css']
})
export class TermFormComponent implements OnInit {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  formGroup: FormGroup;
  term: Term;
  domains: Domain[];
  pronouns: string[];

  constructor(
    private domainService: DomainService,
    private termService: TermService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.term = new Term();
    this.pronouns = ["Noun", "Verb"];
    this.activatedRoute.queryParams
      .pipe(filter(params => params.id))
      .subscribe(params => {
        this.termService.findById(params.id)
          .subscribe((response) => this.formGroup.setValue(response));
      });

    this.formGroup = this.formBuilder.group({
      'id': [this.term.id, null],
      'name': [this.term.name, Validators.required],
      'pronoun': [this.term.pronoun, Validators.required],
      'definition': [this.term.definition, [Validators.required]],
      'termDomains': [this.term.termDomains, null]
    });

    // this.domains = [];
    // this.domainService.findAll()
    //   .subscribe(
    //     (response) => this.domains = response
    //   )
  }

  onSubmit() {
    const body = this.formGroup.value;
    this.termService.createOrUpdate(body)
      .subscribe((response) => history.back())
  }

  hasError(controlName: string, rule: string) {
    return this.formGroup.controls[controlName].hasError(rule);
  }

}
