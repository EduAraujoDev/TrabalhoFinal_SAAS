import { Injectable } from '@angular/core';

import { Usuario } from './usuario';
import { Role } from './role'

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Injectable()
export class UsuarioService {
	private baseUrl: string = 'http://localhost:8080';

	constructor(private http: Http) {

	}

	private getHeaders(){
		let headers = new Headers();
		headers.append('content-type', 'application/json');
		return headers;
	}

	save(usuario: Usuario) : Observable<Usuario> {
		return this
			.http
			.post(this.baseUrl + "/usuario", JSON.stringify(usuario), {headers: this.getHeaders()})
			.map(mapUsuario);
	}
}

function toUsuario(r: any): Usuario {
	let usuario = <Usuario>({
		id: Number.parseInt(r.id),
	});
	return usuario;
}

function mapUsuario(response: Response): Usuario {
	return toUsuario(response.json());
}