package org.adendrata.glossary.api.entity


import javax.persistence.*


@Entity
@Table(name = "term_domain")
data class TermDomain(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long,

        @ManyToOne(fetch = FetchType.EAGER)
        @JoinColumn(name = "term_id", insertable = false, updatable = false, foreignKey = ForeignKey(name = "fk_termDomain_term"))
        var term: Term?,

        @Column(name = "term_id")
        var termId: Long,

        @ManyToOne(fetch = FetchType.EAGER)
        @JoinColumn(name = "domain_id", insertable = false, updatable = false, foreignKey = ForeignKey(name = "fk_termDomain_domain"))
        var domain: Domain?,

        @Column(name = "domain_id")
        var domainId: Long,

        @Column(name = "definition")
        var definition: String
)