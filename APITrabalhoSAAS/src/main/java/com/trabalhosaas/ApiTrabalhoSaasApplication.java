package com.trabalhosaas;

import com.trabalhosaas.model.Regra;
import com.trabalhosaas.repository.RegraRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class ApiTrabalhoSaasApplication implements CommandLineRunner {
	private static final Logger logger = LoggerFactory.getLogger(ApiTrabalhoSaasApplication.class);

	@Autowired
	private RegraRepository regraRepository;

	public static void main(String[] args) {
		SpringApplication.run(ApiTrabalhoSaasApplication.class, args);
	}

	@Override
	public void run(String... strings) throws Exception {
		logger.info("*****Verificando regras....");

		List<Regra> regras = new ArrayList<>();

		Regra regra1 = new Regra("usuario");
		Regra regra2 = new Regra("empresa");

		regras.add(regra1);
		regras.add(regra2);

		for(Regra regra : regras) {
			if (regraRepository.findByDescricao(regra.getDescricao()) == null) {
				logger.info("*****Gravando regra: " + regra.getDescricao());
				regraRepository.save(regra);
			} else {
				logger.info("*****Regra: '" + regra.getDescricao() +"' a existe");
			}
		}
	}
}