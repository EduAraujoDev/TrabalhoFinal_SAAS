import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from '../add/add.component';
import { ListComponent } from '../list/list.component';
import { ViewComponent } from '../view/view.component';

const routes: Routes = [
	{ path: '', redirectTo: '/list', pathMatch: 'full' },
	{ path: 'add', component: AddComponent },
	{ path: 'list', component: ListComponent },
	{ path: 'view/:id', component: ViewComponent},
	{ path: '**', redirectTo: '/list'}
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