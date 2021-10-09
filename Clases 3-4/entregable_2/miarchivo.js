const DATOS_SOLICITADOS = ["nombre", "apellido", "edad", "gastos de la última semana", "presupuesto inicial"];

function get_datos() {
    let datos = new Array();
    let dato;

    for (let i = 0; i < DATOS_SOLICITADOS.length; i++) {
        do {
            dato = prompt(`Por favor, ingrese su ${DATOS_SOLICITADOS[i]}`);
            dato = check_dato(dato, i);
        } while (dato == false);
        datos.push(dato);
    }
    return datos;
}

function check_dato(dato, index) {
    const check_is_number = (valor, msg) => { if (isNaN(valor)) { alert(msg); return false; } else return true };

    if (dato == null) {
        alert("Debe ingresar un dato.")
        return false
    }
    if (DATOS_SOLICITADOS[index] == "nombre" || DATOS_SOLICITADOS[index] == "apellido") {
        if (dato.length > 1)
            return dato;
        else
            return false
    }
    else if (DATOS_SOLICITADOS[index] == "edad" || DATOS_SOLICITADOS[index] == "gastos de la última semana" || DATOS_SOLICITADOS[index] == "presupuesto inicial") {
        if (check_is_number(dato, "Debe ingresar un número.") == true) {
            if (DATOS_SOLICITADOS[index] == "edad")
                return parseInt(dato);
            else {
                console.log(parseFloat(dato))
                return parseFloat(dato);
            }
        }
        else
            return false
    }
    else {
        return false;
    }
}

function calcular_presupuesto_diario(presupuesto_restante) {
    let fecha = new Date();
    let dias = new Date(fecha.getFullYear(), fecha.getMonth() + 1, 0).getDate() - fecha.getDate();
    return presupuesto_restante / dias;
}
alert("Bienvenidx al gestor de gastos!")

let datos = get_datos()

const get_presupuesto_disponible = (gastos, presupuesto) => { return presupuesto - gastos }

let presupuesto_restante = get_presupuesto_disponible(datos[3], datos[4]);

alert(`Hola, ${datos[0]} ${datos[1]}, veo que tenés ${datos[2]} años.`);
alert(`Tus gastos de la última semana fueron \$ ${datos[3]}`);
alert(`Tu presupuesto disponible es: \$ ${presupuesto_restante}.`);
alert(`Tu presupuesto disponible por día para el resto del mes es: \$ ${calcular_presupuesto_diario(presupuesto_restante)}.`);
