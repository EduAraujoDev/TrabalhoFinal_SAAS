export class Usuario {
	id: number;
	id_regra: number;
	usuario: string;
	nome: string;
	senha: string;
	email: string;
	telefone: string;
	endereco: string;

	constructor(i: number, ir: number, u: string, n: string, s: string, e: string, t: string, end: string ) {
		this.id = i;
		this.id_regra = ir;
		this.usuario = u;
		this.nome = n;
		this.senha = s;
		this.email = e;
		this.telefone = t;
		this.endereco = end;
	}
}