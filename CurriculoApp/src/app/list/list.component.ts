import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CurriculoService } from '../curriculo.service';

import { Curriculo } from '../curriculo';


@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	curriculos: Curriculo[];

	constructor(private curriculoService: CurriculoService, private router: Router) {}

	ngOnInit() {
		this.getCurriculos();
	}

	add(): void {
		this.router.navigate(['/add']);
	}

	getCurriculos(): void {
		this.curriculoService
			.getAll()
			.subscribe(r => this.curriculos = r);
	}
}