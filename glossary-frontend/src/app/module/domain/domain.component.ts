import { Component, OnInit } from '@angular/core';
import { DomainService } from 'src/app/shared/service/domain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  public dataSource: any[];
  public columns: string[];

  constructor(private domainService: DomainService, private router: Router) { }

  ngOnInit() {
    this.columns = ['id', 'name']
    this.domainService.findAll()
      .subscribe(
        (response) => this.dataSource = response,
        (error) => console.log('error', error),
        () => { }
      )
  }

  onRecordClick(record: any) {
    this.router.navigate(['/admin/domain/form'], { queryParams: { id: record.id }, queryParamsHandling: 'merge' })
  }

  onCreateClick() {
    this.router.navigate(['/admin/domain/form'])
  }



}
