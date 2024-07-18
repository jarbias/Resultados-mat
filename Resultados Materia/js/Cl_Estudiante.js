export default class Cl_Estudiante {
    constructor(c, nF) {
        this.cedula = c;
        this.notaFinal = nF;
    }

    set cedula(c) {
        this._cedula = c;
    }
    get cedula() {
        return this._cedula;
    }
    set notaFinal(nF) {
        this._notaFinal = nF;
    }
    get notaFinal() {
        return this._notaFinal;
    }
}