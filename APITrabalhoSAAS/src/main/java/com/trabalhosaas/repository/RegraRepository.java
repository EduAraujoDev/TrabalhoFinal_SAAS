package com.trabalhosaas.repository;

import com.trabalhosaas.model.Regra;
import org.springframework.data.repository.CrudRepository;

public interface RegraRepository extends CrudRepository<Regra, Integer> {
    Regra findByDescricao(String descricao);
}