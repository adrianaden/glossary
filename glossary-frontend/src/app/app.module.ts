import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainNavComponent } from './component/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { 
  MatToolbarModule, 
  MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatListModule, 
  MatTableModule, 
  MatPaginatorModule, 
  MatSortModule,
  MatAutocompleteModule,
  MatProgressSpinnerModule,MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule
} from '@angular/material';
import { AdminComponent } from './module/admin/admin.component';
import { DomainService } from './shared/service/domain.service';
import { HttpClientModule } from '@angular/common/http';
import { TermComponent } from './module/term/term.component';
import { TermDomainComponent } from './module/term-domain/term-domain.component';
import { DomainComponent } from './module/domain/domain.component';
import { DataTableComponent } from './component/data-table/data-table.component';
import { TermService } from './shared/service/term.service';
import { TermDomainService } from './shared/service/term-domain.service';
import { DomainFormComponent } from './module/domain/domain-form/domain-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TermFormComponent } from './module/term/term-form/term-form.component';
import { TermDomainFormComponent } from './module/term-domain/term-domain-form/term-domain-form.component';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { BoldPipe } from './bold.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    AdminComponent,
    TermComponent,
    TermDomainComponent,
    DomainComponent,
    DataTableComponent,
    DomainFormComponent,
    TermFormComponent,
    TermDomainFormComponent,
    SearchBarComponent,
    BoldPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,MatFormFieldModule,MatOptionModule,MatSelectModule
  ],
  providers: [DomainService, TermService, TermDomainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
