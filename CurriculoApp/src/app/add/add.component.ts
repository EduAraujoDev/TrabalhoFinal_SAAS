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
	isLoading: boolean = true;
	curriculo: Curriculo;
	usuario: Usuario;
	usuarioRet: Usuario;
	role: Role;

  	constructor(private curriculoService: CurriculoService, private usuarioService: UsuarioService) { }

  	ngOnInit() {
		this.curriculo = new Curriculo(0, null, "", "", "", "");
		this.usuario = new Usuario(0, null, "", "", "", "", "", "");
		this.usuarioRet = new Usuario(0, null, "", "", "", "", "", "");
	}
	
	save(): void {
		this.usuario.regra = new Role(1, "");
		this.curriculo.usuario = this.usuario;

		this.curriculoService
			.save(this.curriculo)
			.subscribe(r => console.log('salvo!!!! ' + JSON.stringify(this.curriculo)));
	}
}