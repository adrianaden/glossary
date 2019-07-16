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
}