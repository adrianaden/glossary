import { Component, Input, OnChanges, SimpleChange, AfterContentChecked } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MenuList } from 'src/app/shared/model/menu-list.model';

@Component({
  selector: 'main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  private _menuList: MenuList[];

  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }

  @Input() set menuList(menuList: MenuList[]) {
    this._menuList = menuList || [];
  }

  get menuList() {
    return this._menuList;
  }

  onMenuClick(index: number) {
    this.router.navigate([this._menuList[index].link]);
  }
}
