package org.adendrata.glossary.api.controller

import org.adendrata.glossary.api.entity.TermDomain
import org.adendrata.glossary.api.service.TermDomainService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@CrossOrigin
@RestController
@RequestMapping("term-domain")
class TermDomainController(private val service: TermDomainService) {

    @GetMapping
    fun findAll() = ResponseEntity.ok(service.findAll())

    @GetMapping("{id}")
    fun getOne(@PathVariable id: Long) = ResponseEntity.ok(service.getOne(id))

    @PostMapping
    fun create(@RequestBody body: TermDomain) = ResponseEntity.ok(service.create(body))

    @PutMapping("{id}")
    fun update(@PathVariable id: Long, @RequestBody body: TermDomain) = ResponseEntity.ok(service.update(id, body))

    @DeleteMapping("{id}")
    fun delete(@PathVariable id: Long) = ResponseEntity.ok(service.delete(id))
}