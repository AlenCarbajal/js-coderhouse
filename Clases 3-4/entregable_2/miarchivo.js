const saludos = ["Hola", "Hello", "Salut", "Ciao", "привет", "Namaste"]

let cant = prompt("Ingrese cantidad de veces que quiere ser saludadx:")
for (let i = 0; i < cant; i++) {
    console.log(String(i + 1) + " - " + saludos[i % saludos.length])
}