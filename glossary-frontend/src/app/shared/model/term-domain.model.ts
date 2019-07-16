import { Domain } from './domain.model';
import { Term } from './term.model';

export interface TermDomain{
    id : number
    term : Term
    termId :number
    domain : Domain
    domainId: number
    definition: string
}