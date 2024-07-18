export default class Cl_Materia {
    constructor() {

        this.contEstu = 0;
        this.contAprob = 0;
        this.auxCedula = "";
        this.notamayor = 0;
    }

    procesarEstudiantes(es) {

        this.contEstu++;
        if (es.notaFinal >= 48) {
            this.contAprob++;
        }
        if (es.notaFinal > this.notamayor) {
            this.notamayor = es.notaFinal;
            this.auxCedula = es.cedula;
        }

    }


    porcAprob() {
        return (this.contAprob / this.contEstu) * 100;
    }


    mejorEstudiante() {
        return this.auxCedula;
    }
}