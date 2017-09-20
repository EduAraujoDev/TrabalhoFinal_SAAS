import { Usuario } from './usuario';

export class Curriculo {
	id: number;
	usuario: Usuario;
	objetivo: string;
    curso: string;
    formacao: string;
    experiencia: string;

	constructor (i: number, u: Usuario, o: string, c: string, f: string, e: string) {
		this.id = i;
		this.usuario = u;
		this.objetivo = o;
		this.curso = c;
		this.formacao = f;
		this.experiencia = e;
	}
}