package com.trabalhosaas.controller;

import com.trabalhosaas.model.Regra;
import com.trabalhosaas.repository.RegraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/regra")
public class RegraController {
    @Autowired
    private RegraRepository regraRepository;

    @GetMapping
    private Iterable<Regra> findAll() {
        return regraRepository.findAll();
    }

    @GetMapping(value = "/{id}")
    private Regra findById(@PathVariable(value = "id") int id) {
        return regraRepository.findOne(id);
    }
}