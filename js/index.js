let per = sessionStorage.getItem("personajes");
const personajesGuardados = JSON.parse(per) || [
    {
        id: 1,
        imagen: "personaje.jpeg",
        nombre: "Pablo",
        clase: "Programador",
        nivel: 3,
        fuerza: 20,
        destreza: 20,
        constitucion: 20,
        inteligencia: 20,
        sabiduria: 20,
        carisma: 20,
        danio: 20
    },
    {
        id: 2,
        imagen: "personaje.jpeg",
        nombre: "David",
        clase: "Programador",
        nivel: 3,
        fuerza: 20,
        destreza: 20,
        constitucion: 20,
        inteligencia: 20,
        sabiduria: 20,
        carisma: 20,
        danio: 20
    }
]
let id = personajesGuardados.length + 1;
let personajes = [];
let personajeId;
let p;
let selecionados = [];
let intentos = 0;
let cargo = false;
for (const objeto of personajesGuardados) {
    personajes.push(new Personaje(objeto));
}
const catalogoPersonajes = new CatalogoPersonajes(personajes);
console.log("PERSONAJES GUARDADOS", catalogoPersonajes.personajes)

listarPersonajes();
let nombreBuscar;
let unoALaVez = false;
const btnMas = document.getElementById("mas");
btnMas.onclick = () => {
    if (unoALaVez == false) {
        unoALaVez = true;
        nuevoPersonaje();
        const formulario = document.getElementById("formulario");
        formulario.addEventListener("submit", function (e) {
            const nombre = document.getElementById("nombre").value;
            const clase = document.getElementById("clase").value;
            const nivel = Number(document.getElementById("nivel").value);
            const fuerza = Number(document.getElementById("fuerza").value);
            const destreza = Number(document.getElementById("destreza").value);
            const constitucion = Number(document.getElementById("constitucion").value);
            const inteligencia = Number(document.getElementById("inteligencia").value);
            const sabiduria = Number(document.getElementById("sabiduria").value);
            const carisma = Number(document.getElementById("carisma").value);
            const danio = Number(document.getElementById("danio").value);
            if (nombre == "" || clase == "" || nivel == "" || fuerza == "" || destreza == "" || constitucion == "" || inteligencia == "" || sabiduria == "" || carisma == "" || danio == "")
                e.preventDefault();
            else {
                p = {
                    id: id++,
                    imagen: "avatar.png",
                    nombre: nombre,
                    clase: clase,
                    nivel: nivel,
                    fuerza: fuerza,
                    destreza: destreza,
                    constitucion: constitucion,
                    inteligencia: inteligencia,
                    sabiduria: sabiduria,
                    carisma: carisma,
                    danio: danio
                };
                catalogoPersonajes.agregarPersonaje(new Personaje(p));
                listarPersonajes();
                const jsonCatalogo = JSON.stringify(catalogoPersonajes.personajes);
                sessionStorage.setItem("personajes", jsonCatalogo);
                unoALaVez = false;
            }
        });
        const btnCancelar = document.getElementById(`cancelar`);
        btnCancelar.onclick = () => {
            listarPersonajes();
            unoALaVez = false;
        }
    }
};

function eventoModificar() {
    const elementosTabla = document.getElementsByClassName("card");
    for (let i = 1; i <= elementosTabla.length; i++) {
        btnModificar = document.getElementById(`modificar${i}`);
        btnModificar.onclick = () => {
            if (unoALaVez == false) {
                unoALaVez = true;
                inputNombre = document.getElementById(`nombre${i}`);
                inputClase = document.getElementById(`clase${i}`);
                inputNivel = document.getElementById(`nivel${i}`);
                inputFuerza = document.getElementById(`fuerza${i}`);
                inputDestreza = document.getElementById(`destreza${i}`);
                inputConstitucion = document.getElementById(`constitucion${i}`);
                inputInteligencia = document.getElementById(`inteligencia${i}`);
                inputSabiduria = document.getElementById(`sabiduria${i}`);
                inputCarisma = document.getElementById(`carisma${i}`);
                inputDanio = document.getElementById(`danio${i}`);
                nombreBuscar = inputNombre.innerText;

                // Modifico nombre
                const nodoInputNombre = document.createElement("input");
                nodoInputNombre.value = inputNombre.innerText;
                inputNombre.innerText = "Nombre: ";
                nodoInputNombre.setAttribute("id", "nombre");
                nodoInputNombre.setAttribute("type", "text");
                nodoInputNombre.setAttribute("placeholder", "Nombre");
                inputNombre.appendChild(nodoInputNombre);
                // Modifico clase
                const nodoInputClase = document.createElement("input");
                nodoInputClase.value = inputClase.innerText.split(" ")[1];
                inputClase.innerText = "Clase: ";
                nodoInputClase.setAttribute("id", "clase");
                nodoInputClase.setAttribute("type", "text");
                nodoInputClase.setAttribute("placeholder", "Clase");
                inputClase.appendChild(nodoInputClase);
                // Modifico nivel
                const nodoInputNivel = document.createElement("input");
                nodoInputNivel.value = inputNivel.innerText.split(" ")[1];
                inputNivel.innerText = "Nivel: ";
                nodoInputNivel.setAttribute("id", "nivel");
                nodoInputNivel.setAttribute("type", "number");
                nodoInputNivel.setAttribute("placeholder", "Nivel");
                inputNivel.appendChild(nodoInputNivel);
                // Modifico fuerza
                const nodoInputFuerza = document.createElement("input");
                nodoInputFuerza.value = inputFuerza.innerText.split(" ")[1];
                inputFuerza.innerText = "Fuerza: ";
                nodoInputFuerza.setAttribute("id", "fuerza");
                nodoInputFuerza.setAttribute("type", "number");
                nodoInputFuerza.setAttribute("placeholder", "Fuerza");
                inputFuerza.appendChild(nodoInputFuerza);
                // Modifico destreza
                const nodoInputDestreza = document.createElement("input");
                nodoInputDestreza.value = inputDestreza.innerText.split(" ")[1];
                inputDestreza.innerText = "Destreza: ";
                nodoInputDestreza.setAttribute("id", "destreza");
                nodoInputDestreza.setAttribute("type", "number");
                nodoInputDestreza.setAttribute("placeholder", "Destreza");
                inputDestreza.appendChild(nodoInputDestreza);
                // Modifico constitucion
                const nodoInputConstitucion = document.createElement("input");
                nodoInputConstitucion.value = inputConstitucion.innerText.split(" ")[1];
                inputConstitucion.innerText = "Constitucion: ";
                nodoInputConstitucion.setAttribute("id", "constitucion");
                nodoInputConstitucion.setAttribute("type", "number");
                nodoInputConstitucion.setAttribute("placeholder", "Constitucion");
                inputConstitucion.appendChild(nodoInputConstitucion);
                // Modifico inteligencia
                const nodoInputInteligencia = document.createElement("input");
                nodoInputInteligencia.value = inputInteligencia.innerText.split(" ")[1];
                inputInteligencia.innerText = "Inteligencia: ";
                nodoInputInteligencia.setAttribute("id", "inteligencia");
                nodoInputInteligencia.setAttribute("type", "number");
                nodoInputInteligencia.setAttribute("placeholder", "Inteligencia");
                inputInteligencia.appendChild(nodoInputInteligencia);
                // Modifico sabiduria
                const nodoInputSabiduria = document.createElement("input");
                nodoInputSabiduria.value = inputSabiduria.innerText.split(" ")[1];
                inputSabiduria.innerText = "Sabiduria: ";
                nodoInputSabiduria.setAttribute("id", "sabiduria");
                nodoInputSabiduria.setAttribute("type", "number");
                nodoInputSabiduria.setAttribute("placeholder", "Sabiduria");
                inputSabiduria.appendChild(nodoInputSabiduria);
                // Modifico carisma
                const nodoInputCarisma = document.createElement("input");
                nodoInputCarisma.value = inputCarisma.innerText.split(" ")[1];
                inputCarisma.innerText = "Carisma: ";
                nodoInputCarisma.setAttribute("id", "carisma");
                nodoInputCarisma.setAttribute("type", "number");
                nodoInputCarisma.setAttribute("placeholder", "Carisma");
                inputCarisma.appendChild(nodoInputCarisma);
                // Modifico danio
                const nodoInputDanio = document.createElement("input");
                nodoInputDanio.value = inputDanio.innerText.split(" ")[1];
                inputDanio.innerText = "Danio: ";
                nodoInputDanio.setAttribute("id", "danio");
                nodoInputDanio.setAttribute("type", "number");
                nodoInputDanio.setAttribute("placeholder", "Danio");
                inputDanio.appendChild(nodoInputDanio);

                // Agrego botones aceptar y cancelar
                btnModificar.remove();
                btoneraCard = document.getElementById(`btn-card-${i}`)
                // Aceptar
                const nodoAceptar = document.createElement("input");
                nodoAceptar.setAttribute("id", "aceptar");
                nodoAceptar.setAttribute("class", "btn btn-primary");
                nodoAceptar.setAttribute("type", "submit");
                nodoAceptar.setAttribute("value", "Aceptar");
                btoneraCard.appendChild(nodoAceptar);
                // Cancelar
                const nodoCancelar = document.createElement("input");
                nodoCancelar.setAttribute("id", `cancelar`);
                nodoCancelar.setAttribute("class", "btn btn-primary");
                nodoCancelar.setAttribute("type", "button");
                nodoCancelar.setAttribute("value", "Cancelar");
                btoneraCard.appendChild(nodoCancelar);

                const btnCancelar = document.getElementById(`cancelar`);
                btnCancelar.onclick = () => {
                    listarPersonajes();
                    unoALaVez = false;
                }
            }
        }

        let formulario = document.getElementById(`formulario${i}`);
        formulario.addEventListener("submit", function (e) {
            const nombre = document.getElementById("nombre").value;
            const clase = document.getElementById("clase").value;
            const nivel = Number(document.getElementById("nivel").value);
            const fuerza = Number(document.getElementById("fuerza").value);
            const destreza = Number(document.getElementById("destreza").value);
            const constitucion = Number(document.getElementById("constitucion").value);
            const inteligencia = Number(document.getElementById("inteligencia").value);
            const sabiduria = Number(document.getElementById("sabiduria").value);
            const carisma = Number(document.getElementById("carisma").value);
            const danio = Number(document.getElementById("danio").value);
            if (nombre.value == "" || clase.value == "" || nivel.value == "" || fuerza.value == "" || destreza.value == "" || constitucion.value == "" || inteligencia.value == "" || sabiduria.value == "" || carisma.value == "" || danio.value == "")
                e.preventDefault();
            else {
                p = {
                    id: i,
                    imagen: "avatar.png",
                    nombre: nombre,
                    clase: clase,
                    nivel: nivel,
                    fuerza: fuerza,
                    destreza: destreza,
                    constitucion: constitucion,
                    inteligencia: inteligencia,
                    sabiduria: sabiduria,
                    carisma: carisma,
                    danio: danio
                };
                catalogoPersonajes.modificarPersonaje(nombreBuscar, new Personaje(p));
                listarPersonajes();
                const jsonCatalogo = JSON.stringify(catalogoPersonajes.personajes);
                sessionStorage.setItem("personajes", jsonCatalogo);
                unoALaVez = false;
            }
        });
    }
}

function eventoSelecionar() {
    const nodoCard = document.getElementsByClassName("card");
    for (let nodo of nodoCard) {
        nodo.onclick = () => {
            personajeId = nodo.children[1].id.split("formulario")[1];
            if (selecionados.includes(personajeId)) {
                nodo.setAttribute("style", "width: 100%;");
                selecionados.indexOf(personajeId) != -1 && selecionados.splice(selecionados.indexOf(personajeId), 1);
            }
            else {
                if (selecionados.length < 2 && !selecionados.includes(personajeId)) {
                    nodo.setAttribute("style", "border: solid 3px #1eff00");
                    selecionados.push(personajeId);
                }
            }
        }
    }
}

const btnLuchar = document.getElementById("luchar");
btnLuchar.onclick = () => {
    [a, b] = selecionados;
    if (selecionados.length === 2) {
        resolucionDeConflictosLaborales(catalogoPersonajes.personajes.find(x => x.id == a), catalogoPersonajes.personajes.find(x => x.id == b));
        intentos = intentos === 0 ? intentos : --intentos;
    }
    else {
        if (intentos === 0) {
            Swal.fire({
                title: `No seleciono trabajadores suficientes`,
                text: `Selecione 2 trabajadores para enfrentarse`,
                icon: `error`,
                confirmButtonText: `Ya entendí`
            });
            intentos++;
        }
        else {
            if (intentos < 2) {
                Swal.fire({
                    title: `No seleciono trabajadores suficientes`,
                    text: `Usted no ha entendido!! selecione 2 trabajadores (luchadores) primero.`,
                    icon: `error`,
                    confirmButtonText: `Ahora creo que entendí!`
                });
                intentos++;
            }
            else {
                Swal.fire({
                    title: `No seleciono trabajadores suficientes`,
                    text: `Usted debe ser un tester (debería crear su personaje), selecionaré los luchadores por usted`,
                    icon: `error`,
                    confirmButtonText: `Ahora si`
                });
                const nodoCard = document.getElementsByClassName("card");
                if (selecionados.length == 1) {
                    Swal.fire({
                        title: `No señor`,
                        imageUrl: `../imagenes/agujero_trampa.png`,
                        text: `Se lo que estas pensando pero no funcionara. Selecionaré el faltante`,
                        confirmButtonText: `Caer en la trampa`
                    });
                }
                for (let i = 0; selecionados.length < 2; i++) {
                    personajeId = nodoCard[i].children[1].id.split("formulario")[1];
                    nodoCard[i].setAttribute("style", "border: solid 3px #1eff00");
                    !selecionados.includes(personajeId) && selecionados.push(personajeId);
                }
            }
        }
    }
}

const btnCargar = document.getElementById("cargar");
btnCargar.onclick = async () => {
    if (!cargo) {
        cargo = true;
        let res = await fetch("../js/json/personajes.json");
        let json = await res.json();
        for (const objeto of json) {
            objeto.id = id++;
            personajes.push(new Personaje(objeto));
        }
        listarPersonajes();
    }
}

function nuevoPersonaje() {
    selecionados = [];
    const nodoTabla = document.getElementById("tabla");
    const tablaElemento = document.createElement("div");
    tablaElemento.innerHTML = `<div class="card" style="width: 100%;">
                                    <img src="../imagenes/avatar.png" class="card-img-top" alt="imagen del personaje">
                                    <form id="formulario">
                                        <div class="card-body">
                                            <h5 class="card-title">Nombre: <input id="nombre" type="text" placeholder="Nombre"></h5>
                                            <p class="card-text">Clase: <input id="clase" type="text" placeholder="Clase"  value = "Tester"></p>
                                            <p class="card-text">Nivel: <input id="nivel" type="number" placeholder="Nivel" value = "1"></p>
                                        </div>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Fuerza: <input id="fuerza" type="number" placeholder="Fuerza" value = "8"></li>
                                            <li class="list-group-item">Destreza: <input id="destreza" type="number" placeholder="Destreza" value = "8"></li>
                                            <li class="list-group-item">Constitucion: <input id="constitucion" type="number" placeholder="Constitucion" value = "8"></li>
                                            <li class="list-group-item">Inteligencia: <input id="inteligencia" type="number" placeholder="Inteligencia" value = "8"></li>
                                            <li class="list-group-item">Sabiduria: <input id="sabiduria" type="number" placeholder="Sabiduria" value = "8"></li>
                                            <li class="list-group-item">Carisma: <input id="carisma" type="number" placeholder="Carisma" value = "8"></li>
                                            <li class="list-group-item">Danio: <input id="danio" type="number" placeholder="Danio" value = "10"></li>
                                        </ul>
                                        <div class="card-body">
                                            <input id="aceptar" class="btn btn-primary" type="submit" value="Aceptar">
                                            <input id="cancelar" class="btn btn-primary" type="button" value="Cancelar">
                                        </div>
                                    </form>
                                </div>`;

    nodoTabla.appendChild(tablaElemento);
}

function listarPersonajes() {
    const nodoTabla = document.getElementById("tabla");
    nodoTabla.innerHTML = "";
    catalogoPersonajes.personajes.forEach((personaje) => {
        const tablaElemento = document.createElement("div");
        tablaElemento.innerHTML = `<div class="card" style="width: 100%;">
                                        <img src="../imagenes/${personaje.imagen}" class="card-img-top" alt="imagen del personaje">
                                        <form id="formulario${personaje.id}">
                                            <div class="card-body">
                                                <h5 id="nombre${personaje.id}" class="card-title">${personaje.nombre}</h5>
                                                <p id="clase${personaje.id}" class="card-text">Clase: ${personaje.clase}</p>
                                                <p id="nivel${personaje.id}" class="card-text">Nivel: ${personaje.nivel}</p>
                                            </div>
                                            <ul class="list-group list-group-flush">
                                                <li id="fuerza${personaje.id}" class="list-group-item">Fuerza: ${personaje.fuerza}</li>
                                                <li id="destreza${personaje.id}" class="list-group-item">Destreza: ${personaje.destreza}</li>
                                                <li id="constitucion${personaje.id}" class="list-group-item">Constitucion: ${personaje.constitucion}</li>
                                                <li id="inteligencia${personaje.id}" class="list-group-item">Inteligencia: ${personaje.inteligencia}</li>
                                                <li id="sabiduria${personaje.id}" class="list-group-item">Sabiduria: ${personaje.sabiduria}</li>
                                                <li id="carisma${personaje.id}" class="list-group-item">Carisma: ${personaje.carisma}</li>
                                                <li id="danio${personaje.id}" class="list-group-item">Danio: ${personaje.danio}</li>
                                            </ul>
                                            <div id="btn-card-${personaje.id}" class="card-body">
                                                <a id="modificar${personaje.id}" class="btn btn-primary modificar">Modificar</a>
                                            </div>
                                        </form>
                                    </div>`;

        nodoTabla.appendChild(tablaElemento);
    })
    eventoModificar();
    eventoSelecionar();
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function targetHit(hit, def) {
    tirada20 = getRandom(1, 20);
    if (tirada20 === 1) {
        console.log(`MALA SUERTE`);
        return false;
    }
    if (tirada20 === 20) {
        console.log(`GOLPE CRITICO`);
        return true;
    }
    if ((tirada20 + hit) > (10 + def)) {
        console.log(`HIT: ${(tirada20 + hit)} VS ${(10 + def)} `);
        return true;
    }
    else {
        console.log(`MISS: ${(tirada20 + hit)} VS ${(10 + def)} `);
        return false;
    }
}

function removeHp(hp, damage) {
    if ((hp - damage) >= 0) {
        return hp - damage;
    }
    else {
        return 0;
    }
}

function resolucionDeConflictosLaborales(personaje1, personaje2) { // resolución de conflictos laborales por medio de peleas con cuchillos
    const nodoResultado = document.getElementById("resultado");
    nodoResultado.innerHTML = "";
    const imagen = document.createElement("img");
    imagen.setAttribute("src", "../imagenes/resolucion.PNG");
    imagen.setAttribute("alt", "imagen que muestra como se resulven los conflictos");
    const comentarios = ["COMIENZA EL COMBATE!!"];
    const comentaristaPela = [];
    comentaristaPela.push(document.createElement("p"));
    nodoResultado.appendChild(imagen);

    let hp1 = personaje1.calcularHitPoint();
    let hp2 = personaje2.calcularHitPoint();

    comentaristaPela.push(document.createElement("p"));
    comentarios.push(`HP ${personaje1.nombre}: ${hp1}`);
    console.log(`HP ${personaje1.nombre}: ${hp1}`);
    comentaristaPela.push(document.createElement("p"));
    comentarios.push(`HP ${personaje2.nombre}: ${hp2}`);
    console.log(`HP ${personaje2.nombre}: ${hp2}`);

    let hit1 = personaje1.calcularPunteria();
    let hit2 = personaje2.calcularPunteria();

    let def1 = personaje1.calcularDefensa();
    let def2 = personaje2.calcularDefensa();

    let damage1 = personaje1.calcularDanio();
    let damage2 = personaje2.calcularDanio();
    ronda = 1;
    while (hp1 != 0 && hp2 != 0) {
        console.log(`RONDA: ${ronda}`);
        comentaristaPela.push(document.createElement("p"));
        comentarios.push(`RONDA: ${ronda}`);
        if (targetHit(hit1, def2)) {
            comentaristaPela.push(document.createElement("p"));
            comentarios.push(`${personaje1.nombre} ACIERTA GOLPE`);
            console.log(`${personaje1.nombre} ACIERTA GOLPE`);
            hp2 = removeHp(hp2, damage1);
            comentaristaPela.push(document.createElement("p"));
            comentarios.push(`HP ${personaje2.nombre}: ${hp2}`);
            console.log(`HP ${personaje2.nombre}: ${hp2}`);
        }
        else {
            comentaristaPela.push(document.createElement("p"));
            comentarios.push(`${personaje1.nombre} FALLA`);
            console.log(`${personaje1.nombre} FALLA`);
        }
        if (targetHit(hit2, def1)) {
            comentaristaPela.push(document.createElement("p"));
            comentarios.push(`${personaje2.nombre} ACIERTA GOLPE`);
            console.log(`${personaje2.nombre} ACIERTA GOLPE`);
            hp1 = removeHp(hp1, damage2);
            comentaristaPela.push(document.createElement("p"));
            comentarios.push(`HP ${personaje1.nombre}: ${hp1}`);
            console.log(`HP ${personaje1.nombre}: ${hp1}`);
        }
        else {
            comentaristaPela.push(document.createElement("p"));
            comentarios.push(`${personaje2.nombre} FALLA`);
            console.log(`${personaje2.nombre} FALLA`);
        }
        ronda++;
    }
    if (hp1 > hp2) {
        comentaristaPela.push(document.createElement("p"));
        comentarios.push(`${personaje1.nombre} Win`);
        console.log(`${personaje1.nombre} Win`);
        Swal.fire({
            title: `${personaje1.nombre} Win`,
            text: `${personaje1.nombre} es quien tiene la razón, en la ronda ${ronda} con ${hp1} HP de sobra.`,
            icon: `success`,
            confirmButtonText: `Felicitar`
        })
    }
    else {
        if (hp2 > hp1) {
            comentaristaPela.push(document.createElement("p"));
            comentarios.push(`${personaje2.nombre} Win`);
            console.log(`${personaje2.nombre} Win`);
            Swal.fire({
                title: `${personaje2.nombre} Win`,
                text: `${personaje2.nombre} es quien tiene la razón, en la ronda ${ronda} con ${hp2} HP de sobra.`,
                icon: `success`,
                confirmButtonText: `Felicitar`
            })
        }
        else {
            comentaristaPela.push(document.createElement("p"));
            comentarios.push("Empate");
            console.log("Empate");
            Swal.fire({
                title: `Empate`,
                text: `ambos tienen la razón, en la ronda ${ronda}`,
                icon: `info`,
                confirmButtonText: `Buuu`
            })
        }
    }

    for (comment of comentaristaPela) {
        comment.innerText = comentarios[0];
        comentarios.shift();
        nodoResultado.appendChild(comment);
    }
}