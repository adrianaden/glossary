package org.adendrata.glossary.api.controller

import org.adendrata.glossary.api.entity.TermRelation
import org.adendrata.glossary.api.service.TermRelationService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("term-relation")
class TermRelationController(private val service: TermRelationService) {

    @GetMapping("{id}")
    fun getOne(@PathVariable id: Long) = ResponseEntity.ok(service.getOne(id))

    @PostMapping
    fun create(@RequestBody body: TermRelation) = ResponseEntity.ok(service.create(body))

    @PutMapping("{id}")
    fun update(@PathVariable id: Long, @RequestBody body: TermRelation) = ResponseEntity.ok(service.update(id, body))

    @DeleteMapping("{id}")
    fun delete(@PathVariable id: Long) = ResponseEntity.ok(service.delete(id))
}