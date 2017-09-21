import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RoutingModule } from './routing/routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CurriculoService } from './curriculo.service';
import { UsuarioService } from './usuario.service';
import { RoleService } from './role.service';

import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { ViewComponent } from './view/view.component';

@NgModule({
	declarations: [
		AppComponent,
		AddComponent,
		ListComponent,
		ViewComponent
  	],
  	imports: [
    	BrowserModule,
    	FormsModule,
		HttpModule,
		RoutingModule,
		NgbModule.forRoot()
  	],
  	providers: [CurriculoService, UsuarioService, RoleService],
  	bootstrap: [AppComponent]
})
export class AppModule { }
