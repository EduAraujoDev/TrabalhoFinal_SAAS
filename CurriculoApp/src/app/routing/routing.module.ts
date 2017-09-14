import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from '../add/add.component';

const routes: Routes = [
	{ path: '', redirectTo: '/add', pathMatch: 'full' },
	{ path: 'add', component: AddComponent }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forRoot(routes)
	],
	exports: [ RouterModule ],
	declarations: []
})
export class RoutingModule { }