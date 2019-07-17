import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Term } from '../model/term.model';

@Injectable()
export class TermService{
    constructor(private httpClient: HttpClient){}

    findAll() : Observable<Term[]> {
        return this.httpClient.get<Term[]>('http://localhost:8080/glossary/api/term');
    }
    findById(id: number): Observable<Term> {
        return this.httpClient.get<Term>('http://localhost:8080/glossary/api/term/' + id);
    }
    create(domain: Term): Observable<Term> {
        return this.httpClient.post<Term>('http://localhost:8080/glossary/api/term', domain);
    }

    update(domain: Term): Observable<Term> {
        return this.httpClient.put<Term>('http://localhost:8080/glossary/api/term/' + domain.id, domain);
    }

    createOrUpdate(domain: Term): Observable<Term> {
        if (domain.id) {
            return this.update(domain)
        } else {
            return this.create(domain)
        }
    }
}