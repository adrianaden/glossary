import { Component, OnInit } from '@angular/core';
import { DomainService } from 'src/app/shared/service/domain.service';
import { MenuList } from 'src/app/shared/model/menu-list.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public menuList: MenuList[];
  public isDisplay: boolean = true;

  constructor(private domainService: DomainService) { }



  ngOnInit() {
    this.menuList = [
      { name: "Domain", link: "./admin/domain" },
      { name: "Term", link: "./admin/term" },
      { name: "Term Domain", link: "./admin/term-domain" }
    ];
  }
}
