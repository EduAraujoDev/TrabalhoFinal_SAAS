import { Usuario } from './usuario';

export class Curriculo {
	id: number;
	usuario: Usuario;
	skill_summary: string;
	competencies: string;
	formal_education: string;
	work_experience: string;

	constructor (i: number, u: Usuario, s: string, c: string, f: string, w: string) {
		this.id = i;
		this.usuario = u;
		this.skill_summary = s;
		this.competencies = c;
		this.formal_education = f;
		this.work_experience = w;
	}
}