import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TermDomain } from '../model/term-domain.model';

@Injectable()
export class TermDomainService{
    constructor(private httpClient: HttpClient){}

    findAll() : Observable<TermDomain[]> {
        return this.httpClient.get<TermDomain[]>('http://localhost:8080/glossary/api/term-domain');
    }

    findById(id: number): Observable<TermDomain> {
        return this.httpClient.get<TermDomain>('http://localhost:8080/glossary/api/term-domain/' + id);
    }
    create(domain: TermDomain): Observable<TermDomain> {
        return this.httpClient.post<TermDomain>('http://localhost:8080/glossary/api/term-domain', domain);
    }

    update(domain: TermDomain): Observable<TermDomain> {
        return this.httpClient.put<TermDomain>('http://localhost:8080/glossary/api/term-domain/' + domain.id, domain);
    }

    createOrUpdate(domain: TermDomain): Observable<TermDomain> {
        if (domain.id) {
            return this.update(domain)
        } else {
            return this.create(domain)
        }
    }
}