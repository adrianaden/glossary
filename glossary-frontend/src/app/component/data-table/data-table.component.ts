import { AfterViewInit, Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatTable, { static: false }) table: MatTable<any>;
  @Input() dataSet: any[]
  @Output() eventRecordClick: EventEmitter<any> = new EventEmitter();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  @Input() columns: string[];

  dataSource: DataTableDataSource;

  ngOnInit() {
    this.dataSource = new DataTableDataSource(this.dataSet);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  onRecordClick(record: any) {
    this.eventRecordClick.emit(record);
  }
}
