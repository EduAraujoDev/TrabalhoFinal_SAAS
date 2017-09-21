import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }	from '@angular/router';

import { CurriculoService } from '../curriculo.service';

import { Curriculo } from '../curriculo';
import { Usuario } from '../usuario';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
	private curriculo: Curriculo;
	private id: number;
	private sub: any;

	constructor(private curriculoService: CurriculoService, private activatedRoute: ActivatedRoute,
		private router: Router) {

		}

	ngOnInit() {
		this.curriculo = new Curriculo(0, new Usuario(0, null, "", "", "", "", "", ""), "", "", "", "");

		this.sub = this.activatedRoute.params.subscribe(params => {
			this.id = +params['id'];
		});

		this.curriculoService
			.get(this.id)
			.subscribe(r => this.curriculo = r);
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}

	return(): void{
		this.router.navigate(['/list']);
	}
}