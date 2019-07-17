import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './module/admin/admin.component';
import { TermComponent } from './module/term/term.component';
import { DomainComponent } from './module/domain/domain.component';
import { TermDomainComponent } from './module/term-domain/term-domain.component';
import { DomainFormComponent } from './module/domain/domain-form/domain-form.component';
import { TermFormComponent } from './module/term/term-form/term-form.component';
import { TermDomainFormComponent } from './module/term-domain/term-domain-form/term-domain-form.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'domain', component: DomainComponent },
      { path: 'domain/form', component: DomainFormComponent },
      
      { path: 'term', component: TermComponent },
      { path: 'term/form', component: TermFormComponent },

      { path: 'term-domain', component: TermDomainComponent },
      { path: 'term-domain/form', component: TermDomainFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
