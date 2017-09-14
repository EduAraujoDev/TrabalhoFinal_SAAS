import { Component, OnInit } from '@angular/core';

import { CurriculoService } from '../curriculo.service';

import { Curriculo } from '../curriculo';

@Component({
  	selector: 'app-add',
  	templateUrl: './add.component.html',
  	styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
	curriculo: Curriculo;

  	constructor(private curriculoService: CurriculoService) { }

  	ngOnInit() {
		this.curriculo = new Curriculo(0, 0, "", "", "", "");
	}
	
	save(): void {
		this.curriculoService.save(this.curriculo);
	}
}