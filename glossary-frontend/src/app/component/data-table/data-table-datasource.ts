import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
// export interface DataTableItem {
//   name: string;
//   id: number;
//   address: string;
// }

// TODO: replace this with real data from your application
const EXAMPLE_DATA: any[] = [
  {id: 1, name: 'Hydrogen' , address: ""},
  {id: 2, name: 'Helium',address: ""},
  {id: 3, name: 'Lithium',address: ""},
  {id: 4, name: 'Beryllium',address: ""},
  {id: 5, name: 'Boron',address: ""},
  {id: 6, name: 'Carbon',address: ""},
  {id: 7, name: 'Nitrogen',address: ""},
  {id: 8, name: 'Oxygen',address: ""},
  {id: 9, name: 'Fluorine',address: ""},
  {id: 10, name: 'Neon',address: ""},
  {id: 11, name: 'Sodium',address: ""},
  {id: 12, name: 'Magnesium',address: ""},
  {id: 13, name: 'Aluminum',address: ""},
  {id: 14, name: 'Silicon',address: ""},
  {id: 15, name: 'Phosphorus',address: ""},
  {id: 16, name: 'Sulfur',address: ""},
  {id: 17, name: 'Chlorine',address: ""},
  {id: 18, name: 'Argon',address: ""},
  {id: 19, name: 'Potassium',address: ""},
  {id: 20, name: 'Calcium',address: ""},
];

/**
 * Data source for the DataTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class DataTableDataSource extends DataSource<any> {
  data: any[] = EXAMPLE_DATA;
  paginator: MatPaginator;
  sort: MatSort;

  constructor(private dataSet: any[]) {
    super();
    this.data = dataSet || EXAMPLE_DATA;
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<any[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: any[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: any[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
