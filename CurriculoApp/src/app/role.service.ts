import { Injectable } from '@angular/core';
import { Role } from './role';

@Injectable()
export class RoleService {
	constructor() { }

	getRoles(): Role[] {
		let a: Role[] = [
			new Role(1, "usuario"),
			new Role(2, "empresa")
		];

		return a;
	}
}