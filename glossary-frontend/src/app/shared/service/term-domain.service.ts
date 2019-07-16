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
}