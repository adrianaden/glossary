import { Component, OnInit } from '@angular/core';
import { TermService } from 'src/app/shared/service/term.service';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit {


  public dataSource : any[];
  public columns : string[];

  constructor(private termService: TermService) { }

  ngOnInit() {
    this.columns = ['id', 'name', 'definition']
    this.termService.findAll().subscribe(
      (response) => this.dataSource = response,
      (error) => console.log('error', error),
      () => { }
    )
  }

}
