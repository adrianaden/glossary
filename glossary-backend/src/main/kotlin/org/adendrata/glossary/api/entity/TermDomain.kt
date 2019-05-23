package org.adendrata.glossary.api.entity


import javax.persistence.*


@Entity
@Table(name = "term_domain")
data class TermDomain(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long,

        @Column(name = "term_id")
        var termId: Long,

        @Column(name = "domain_id")
        var domainId: Long,

        @Column(name = "definition")
        var definition: String
)