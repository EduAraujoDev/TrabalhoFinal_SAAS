import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from '../add/add.component';
import { ListComponent } from '../list/list.component';

const routes: Routes = [
	{ path: '', redirectTo: '/list', pathMatch: 'full' },
	{ path: 'add', component: AddComponent },
	{ path: 'list', component: ListComponent }
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