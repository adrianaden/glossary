import { Component, OnInit } from '@angular/core';
import { TermDomainService } from 'src/app/shared/service/term-domain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-term-domain',
  templateUrl: './term-domain.component.html',
  styleUrls: ['./term-domain.component.css']
})
export class TermDomainComponent implements OnInit {


  public dataSource: any[];
  public columns: string[];

  constructor(
    private termDomainService: TermDomainService, 
    private router: Router) { }

  ngOnInit() {
    this.columns = ['id', 'term', 'domain', 'definition']
    this.loadDataSource()
  }

  loadDataSource() {
    this.termDomainService.findAll().subscribe(
      (response) => {
        this.dataSource = [];
        response.forEach(x => {
          this.dataSource.push({ id: x.id, term: x.term.name, domain: x.domain.name, definition: x.definition })
        })
      },
      (error) => console.log('error', error),
      () => { }
    )
  }
  
  onRecordClick(record: any) {
    this.router.navigate(['/admin/term-domain/form'], { queryParams: { id: record.id }, queryParamsHandling: 'merge' })
  }

  onCreateClick() {
    this.router.navigate(['/admin/term-domain/form'])
  }


}
