import { Injectable } from '@angular/core';

import { Usuario } from './usuario';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

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

	save(usuario: Usuario) : Observable<Response> {
		console.log(usuario);

		return this
			.http
			.post(this.baseUrl + "/usuario", JSON.stringify(usuario), {headers: this.getHeaders()});
	}
}