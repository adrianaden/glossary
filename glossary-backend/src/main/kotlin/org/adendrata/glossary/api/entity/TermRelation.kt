package org.adendrata.glossary.api.entity

import javax.persistence.*


@Entity
@Table(name = "term_domain")
data class TermRelation(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long,

        @Column(name = "term_id")
        var termId: Long,

        @Column(name = "link_id")
        var linkId: Long,

        @Column(name = "relation")
        var relation: String
)