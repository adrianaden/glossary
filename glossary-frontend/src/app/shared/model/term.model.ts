import { TermDomain } from './term-domain.model';

export class Term{
    id : number
    name: string
    pronoun: string
    definition: string
    termDomains: TermDomain[]
}