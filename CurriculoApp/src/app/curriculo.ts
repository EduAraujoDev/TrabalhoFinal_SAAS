export class Curriculo {
	id: number;
	id_user: number;
	skill_summary: string;
	competencies: string;
	formal_education: string;
	work_experience: string;

	constructor (i: number, iu: number, s: string, c: string, f: string, w: string) {
		this.id = i;
		this.id_user = iu;
		this.skill_summary = s;
		this.competencies = c;
		this.formal_education = f;
		this.work_experience = w;
	}
}