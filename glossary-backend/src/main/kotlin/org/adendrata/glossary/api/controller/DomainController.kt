package org.adendrata.glossary.api.controller

import org.adendrata.glossary.api.entity.Domain
import org.adendrata.glossary.api.service.DomainService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("domain")
class DomainController(private val service: DomainService) {

    @GetMapping("{id}")
    fun getOne(@PathVariable id: Long) = ResponseEntity.ok(service.getOne(id))

    @PostMapping
    fun create(@RequestBody body: Domain) = ResponseEntity.ok(service.create(body))

    @PutMapping("{id}")
    fun update(@PathVariable id: Long, @RequestBody body: Domain) = ResponseEntity.ok(service.update(id, body))

    @DeleteMapping("{id}")
    fun delete(@PathVariable id: Long) = ResponseEntity.ok(service.delete(id))
}