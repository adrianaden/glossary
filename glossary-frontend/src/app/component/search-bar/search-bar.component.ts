import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

import { SAMPLE_RESULTS } from './search-results';
import {startWith} from 'rxjs/operators'
import {map} from 'rxjs/operators'

@Component({
  selector: 'search-bar',
  styleUrls: [ './search-bar.component.css' ],
  templateUrl: './search-bar.component.html',
})

export class SearchBarComponent {

  searchControl: FormControl;

  filteredResults$: Observable<string[]>;

  results = SAMPLE_RESULTS;

  constructor() {
    this.searchControl = new FormControl('');
    this.filteredResults$ = this.searchControl.valueChanges
      .pipe(startWith(''))
      .pipe(map(val => this.filterResults(val)))
      .pipe(map(val => val.slice(0, 4)));
  }

  private filterResults(val: string): string[] {
    return val ? this.results.filter(v => v.toLowerCase().indexOf(val.toLowerCase()) === 0) : [];
  }

}
