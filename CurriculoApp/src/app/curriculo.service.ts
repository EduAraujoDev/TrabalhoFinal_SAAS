import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Curriculo } from './curriculo';

@Injectable()
export class CurriculoService {
	private baseUrl: string = 'http://localhost:8080';

	constructor(private http: Http) {}

	private getHeaders(){
		let headers = new Headers();
		headers.append('content-type', 'application/json');
		return headers;
	}

	save(curriculo: Curriculo): Observable<Response> {
		return this.http
			.post(this.baseUrl + "/curriculo", JSON.stringify(curriculo), {headers: this.getHeaders()});
	}

	getAll(): Observable<Curriculo[]> {
		let curriculos = this.http
			.get(this.baseUrl + "/curriculo",  {headers: this.getHeaders()})
			.map(mapCurriculos);
		return curriculos;
	}
}

function mapCurriculos(response:Response): Curriculo[]{
	return response.json().map(toCurriculo);
}

function toCurriculo(r:any): Curriculo{
	let curriculo = <Curriculo>({
	  id: parseInt(r.id),
	  usuario: r.usuario,
	  skill_summary: r.skill_summary,
	  competencies: r.competencies,
	  formal_education: r.formal_education,
	  work_experience: r.work_experience
	});
	console.log('Curriculo: ' + curriculo);
	return curriculo;
}