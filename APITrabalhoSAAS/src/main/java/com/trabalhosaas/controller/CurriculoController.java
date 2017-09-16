package com.trabalhosaas.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/usuario")
public class CurriculoController {

    @GetMapping(value = "/{teste}")
    private void save(@PathVariable(value = "teste") String teste) {
        System.out.println(teste);
    }
}