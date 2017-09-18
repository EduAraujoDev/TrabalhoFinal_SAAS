import { Role } from './role';

export class Usuario {
	id: number;
	regra: Role;
	usuario: string;
	nome: string;
	senha: string;
	email: string;
	telefone: string;
	endereco: string;

	constructor(i: number, r: Role, u: string, n: string, s: string, e: string, t: string, end: string ) {
		this.id = i;
		this.regra = r;
		this.usuario = u;
		this.nome = n;
		this.senha = s;
		this.email = e;
		this.telefone = t;
		this.endereco = end;
	}
}