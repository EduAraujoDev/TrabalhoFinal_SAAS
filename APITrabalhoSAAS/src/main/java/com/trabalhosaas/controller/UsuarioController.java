package com.trabalhosaas.controller;

import com.trabalhosaas.model.Usuario;
import com.trabalhosaas.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value = "/usuario")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping(value = "/{id}")
    private Usuario findById(@PathVariable(value = "id") int id) {
        return usuarioRepository.findOne(id);
    }

    @GetMapping
    private Iterable<Usuario> findAll() {
        return usuarioRepository.findAll();
    }

    @PostMapping
    private void save(@RequestBody Usuario usuario) {
        usuarioRepository.save(usuario);
    }
}