package org.adendrata.glossary.api.service

import org.adendrata.glossary.api.entity.TermRelation
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service

@Repository
interface TermRelationRepository : JpaRepository<TermRelation, Long>

@Service
class TermRelationService(private val repository: TermRelationRepository) {
    fun getOne(id: Long) = repository.getOne(id)

    fun create(term: TermRelation) = repository.save(term)

    fun update(id: Long, term: TermRelation) = repository.save(term.copy(id = id))

    fun delete(id: Long) = repository.deleteById(id)
}