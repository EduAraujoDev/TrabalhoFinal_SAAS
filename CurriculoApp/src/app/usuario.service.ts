import { Injectable } from '@angular/core';
import { Usuario } from './usuario';

@Injectable()
export class UsuarioService {

	constructor() { }

	save(usuario: Usuario): void {
		console.log(usuario);
	}
}