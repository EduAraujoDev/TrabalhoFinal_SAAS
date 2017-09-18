import { Component, OnInit } from '@angular/core';

import { CurriculoService } from '../curriculo.service';
import { UsuarioService } from '../usuario.service';

import { Curriculo } from '../curriculo';
import { Usuario } from '../usuario';
import { Role } from '../role';

@Component({
  	selector: 'app-add',
  	templateUrl: './add.component.html',
  	styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
	curriculo: Curriculo;
	usuario: Usuario;
	role: Role;

  	constructor(private curriculoService: CurriculoService, private usuarioService: UsuarioService) { }

  	ngOnInit() {
		this.curriculo = new Curriculo(0, 0, "", "", "", "");
		this.usuario = new Usuario(0, null, "", "", "", "", "", "");
	}
	
	save(): void {
		this.usuario.regra = new Role(1, "");

		this.curriculoService.save(this.curriculo);
		this.usuarioService
			.save(this.usuario)
			.subscribe(r => console.log('salvo!!!' + JSON.stringify(this.usuario)));
	}
}