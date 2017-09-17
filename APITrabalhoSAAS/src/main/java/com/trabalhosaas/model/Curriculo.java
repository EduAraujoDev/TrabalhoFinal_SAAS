package com.trabalhosaas.model;

import javax.persistence.*;

@Entity
public class Curriculo {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_usuario")
    private Usuario usuario;

    private String skill_summary;
    private String competencies;
    private String formal_education;
    private String work_experience;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public String getSkill_summary() {
        return skill_summary;
    }

    public void setSkill_summary(String skill_summary) {
        this.skill_summary = skill_summary;
    }

    public String getCompetencies() {
        return competencies;
    }

    public void setCompetencies(String competencies) {
        this.competencies = competencies;
    }

    public String getFormal_education() {
        return formal_education;
    }

    public void setFormal_education(String formal_education) {
        this.formal_education = formal_education;
    }

    public String getWork_experience() {
        return work_experience;
    }

    public void setWork_experience(String work_experience) {
        this.work_experience = work_experience;
    }
}