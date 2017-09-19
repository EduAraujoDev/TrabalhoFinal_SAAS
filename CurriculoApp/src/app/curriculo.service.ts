import { Injectable } from '@angular/core';

import { Curriculo } from './curriculo';

import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CurriculoService {
	private baseUrl: string = 'http://localhost:8080';

	constructor(private http: Http) {
	}

	private getHeaders(){
		let headers = new Headers();
		headers.append('content-type', 'application/json');
		return headers;
	}

	save(curriculo: Curriculo): Observable<Response> {
		return this
			.http
			.post(this.baseUrl + "/curriculo", JSON.stringify(curriculo), {headers: this.getHeaders()});
	}
}