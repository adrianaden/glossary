import { Component, OnInit } from '@angular/core';
import { TermService } from 'src/app/shared/service/term.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit {


  public dataSource : any[];
  public columns : string[];

  constructor(private termService: TermService, private router: Router) { }

  ngOnInit() {
    this.columns = ['id', 'name', 'pronoun', 'definition']
    this.termService.findAll().subscribe(
      (response) => this.dataSource = response,
      (error) => console.log('error', error),
      () => { }
    )
  }

  onRecordClick(record: any) {
    this.router.navigate(['/admin/term/form'], { queryParams: { id: record.id }, queryParamsHandling: 'merge' })
  }

  onCreateClick() {
    this.router.navigate(['/admin/term/form'])
  }

}
