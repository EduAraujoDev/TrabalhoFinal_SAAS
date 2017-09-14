import { Injectable } from '@angular/core';
import { Curriculo } from './curriculo';

@Injectable()
export class CurriculoService {

	constructor() { }

	save(curriculo: Curriculo): void {
		console.log(curriculo);
	}
}