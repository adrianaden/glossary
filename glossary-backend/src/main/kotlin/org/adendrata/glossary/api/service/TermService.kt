package org.adendrata.glossary.api.service

import org.adendrata.glossary.api.entity.Term
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service

@Repository
interface TermRepository : JpaRepository<Term, Long>

@Service
class TermService(private val repository: TermRepository) {
    fun getOne(id: Long) = repository.getOne(id)

    fun create(term: Term) = repository.save(term)

    fun update(id: Long, term: Term) = repository.save(term.copy(id = id))

    fun delete(id: Long) = repository.deleteById(id)
}