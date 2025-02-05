class Disco {

    constructor(nombre, grupo, publicacion, genero, localizacion, prestado, caratula) {

        this.nombre = nombre;
        this.grupo = grupo;
        this.publicacion = publicacion;
        this.genero = genero;
        this.localizacion = localizacion;
        this.prestado = prestado;
        this.caratula = caratula;

    }

    set nuevaLocalizacion(loc) {

        this.localizacion = loc;

    }

    set nuevoPrestado(pre) {

        this.prestado = pre;

    }

    get mostrarInfo() {

        let info = { "nombre": this.nombre, "grupo": this.grupo, "publicacion": this.publicacion, "genero": this.genero, "localizacion": this.localizacion, "prestado": this.prestado, "caratula": this.caratula };
        return info;

    }
    
}

export default Disco