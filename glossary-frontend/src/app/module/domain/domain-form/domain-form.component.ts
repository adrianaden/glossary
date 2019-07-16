import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material';
import { FormControl, NgForm, FormGroupDirective, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Domain } from 'src/app/shared/model/domain.model';
import { DomainService } from 'src/app/shared/service/domain.service';
import { ActivatedRoute, Params } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-domain-form',
  templateUrl: './domain-form.component.html',
  styleUrls: ['./domain-form.component.css']
})
export class DomainFormComponent implements OnInit, ErrorStateMatcher {

  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

  formGroup: FormGroup;
  domain: Domain;

  constructor(
    private domainService: DomainService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.domain = new Domain();
    this.activatedRoute.queryParams
      .pipe(filter(params => params.id))
      .subscribe(params => {
        this.domainService.findById(params.id)
          .subscribe((response) => this.formGroup.setValue(response));
      });

    this.formGroup = this.formBuilder.group({
      'id': [this.domain.id, null],
      'name': [this.domain.name, [Validators.required]]
    });
  }

  onSubmit() {
    const body = this.formGroup.value;
    this.domainService.createOrUpdate(body)
      .subscribe((response) => history.back())
  }

  hasError(controlName: string, rule: string) {
    return this.formGroup.controls[controlName].hasError(rule);
  }

}
