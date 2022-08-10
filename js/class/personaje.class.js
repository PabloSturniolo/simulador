class Personaje {
    constructor(personaje) {
        this.id = personaje.id;
        this.imagen = personaje.imagen;
        this.nombre = personaje.nombre;
        this.clase = personaje.clase;
        this.nivel = personaje.nivel;
        this.fuerza = personaje.fuerza;
        this.destreza = personaje.destreza;
        this.constitucion = personaje.constitucion;
        this.inteligencia = personaje.inteligencia;
        this.sabiduria = personaje.sabiduria;
        this.carisma = personaje.carisma;
        this.danio = personaje.danio;
    }

    calcularPunteria() {
        return Math.floor((this.fuerza - 10) / 2);
    }

    calcularDefensa() {
        return Math.floor((this.destreza - 10) / 2);
    }

    calcularHitPoint() {
        return (20 + Math.floor((this.constitucion - 10) / 2) * 5 * this.nivel);
    }

    calcularMana() {
        return (Math.floor((this.sabiduria - 10) / 2) * 5 * this.nivel);
    }

    calcularDanio() {
        return this.danio;
    }
}