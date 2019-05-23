package org.adendrata.glossary.api.service

import org.adendrata.glossary.api.entity.TermDomain
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service

@Repository
interface TermDomainRepository : JpaRepository<TermDomain, Long>

@Service
class TermDomainService(private val repository: TermDomainRepository) {
    fun getOne(id: Long) = repository.getOne(id)

    fun create(term: TermDomain) = repository.save(term)

    fun update(id: Long, term: TermDomain) = repository.save(term.copy(id = id))

    fun delete(id: Long) = repository.deleteById(id)
}