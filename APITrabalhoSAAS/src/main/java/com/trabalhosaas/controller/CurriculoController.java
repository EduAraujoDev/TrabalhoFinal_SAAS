package com.trabalhosaas.controller;

import com.trabalhosaas.model.Curriculo;
import com.trabalhosaas.repository.CurriculoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/curriculo")
public class CurriculoController {

    @Autowired
    private CurriculoRepository curriculoRepository;

    @GetMapping
    private Iterable<Curriculo> findAll() {
        return curriculoRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    private Curriculo findById(@PathVariable(value = "id") int id) {
        return curriculoRepository.findOne(id);
    }

    @PostMapping
    private void save(@RequestBody Curriculo curriculo) {
        curriculoRepository.save(curriculo);
    }
}