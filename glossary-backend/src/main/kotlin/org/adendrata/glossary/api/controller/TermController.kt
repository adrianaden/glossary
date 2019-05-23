package org.adendrata.glossary.api.controller

import org.adendrata.glossary.api.entity.Term
import org.adendrata.glossary.api.service.TermService
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("term")
class TermController(private val service: TermService) {

    @GetMapping("{id}")
    fun getOne(@PathVariable id: Long) = ResponseEntity.ok(service.getOne(id))

    @PostMapping
    fun create(@RequestBody body: Term) = ResponseEntity.ok(service.create(body))

    @PutMapping("{id}")
    fun update(@PathVariable id: Long, @RequestBody body: Term) = ResponseEntity.ok(service.update(id, body))

    @DeleteMapping("{id}")
    fun delete(@PathVariable id: Long) = ResponseEntity.ok(service.delete(id))
}