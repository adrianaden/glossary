package org.adendrata.glossary.api.service

import org.adendrata.glossary.api.entity.Domain
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import org.springframework.stereotype.Service

@Repository
interface DomainRepository : JpaRepository<Domain, Long>

@Service
class DomainService(private val repository: DomainRepository) {
    fun getOne(id: Long) = repository.getOne(id)

    fun findAll() : List<Domain> = repository.findAll()

    fun create(domain: Domain) = repository.save(domain)

    fun update(id: Long, domain: Domain) = repository.save(domain.copy(id = id))

    fun delete(id: Long) = repository.deleteById(id)
}