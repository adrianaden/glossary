import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Domain } from '../model/domain.model';

@Injectable()
export class DomainService {
    constructor(private httpClient: HttpClient) { }

    findAll(): Observable<Domain[]> {
        return this.httpClient.get<Domain[]>('http://localhost:8080/glossary/api/domain');
    }
    findById(id: number): Observable<Domain> {
        return this.httpClient.get<Domain>('http://localhost:8080/glossary/api/domain/' + id);
    }
    create(domain: Domain): Observable<Domain> {
        return this.httpClient.post<Domain>('http://localhost:8080/glossary/api/domain', domain);
    }

    update(domain: Domain): Observable<Domain> {
        return this.httpClient.put<Domain>('http://localhost:8080/glossary/api/domain/' + domain.id, domain);
    }

    createOrUpdate(domain: Domain): Observable<Domain> {
        if (domain.id) {
            return this.update(domain)
        } else {
            return this.create(domain)
        }
    }

}