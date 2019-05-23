package org.adendrata.glossary.api.entity

import javax.persistence.*

@Entity
@Table(name = "domain")
data class Domain(
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        var id: Long,

        @Column(name = "name")
        var name: String
)