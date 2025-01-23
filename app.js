// Declaración del array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    amigos.push(nombre);
    input.value = '';
    actualizarLista();
}

// Función para actualizar la lista de amigos en la página
function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo, index) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Agrega al menos un nombre antes de realizar el sorteo.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos.splice(indiceAleatorio, 1)[0];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
    actualizarLista();
}
