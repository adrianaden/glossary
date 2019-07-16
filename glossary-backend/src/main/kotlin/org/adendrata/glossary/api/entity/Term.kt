package org.adendrata.glossary.api.entity

import org.springframework.lang.Nullable
import javax.persistence.*

@Entity
@Table(name = "term")
data class Term(

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long,

        @Column(name = "name")
        var name: String,

        @Column(name = "pronoun")
        var pronoun: String,

        @Column(name = "definition")
        var definition: String,

        @Transient
        var termDomains: List<TermDomain>?

)