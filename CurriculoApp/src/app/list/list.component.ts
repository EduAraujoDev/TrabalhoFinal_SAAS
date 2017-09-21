import { Component, OnInit } from '@angular/core';

import { CurriculoService } from '../curriculo.service';

import { Curriculo } from '../curriculo';


@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	curriculos: Curriculo[];

	constructor(private curriculoService: CurriculoService) {
	}

	ngOnInit() {
		this.getCurriculos();
	}

	getCurriculos(): void {
		this.curriculoService
			.getAll()
			.subscribe(r => this.curriculos = r);
	}
}