const usuarios = [];

const form = document.getElementById("formulario_usuario");
const lista = document.getElementById("lista_usuarios");
const total = document.getElementById("total_usuarios");
const buscador = document.getElementById("buscador");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const edad = document.getElementById("edad").value.trim();

    usuarios.push({ nombre, email, edad });
    form.reset();
    actualizarLista();
});

function actualizarLista(filtrados = usuarios) {
    lista.innerHTML = filtrados.map((user, index) =>
        `<li>
        <span><strong>${user.nombre}</strong> - ${user.email}, ${user.edad} años</span>
        <button onclick="eliminarUsuario(${index})" style="width: 80px">Eliminar</button>
        </li>`
    ).join("");

    total.textContent = `Total: ${usuarios.length}`;
}

function eliminarUsuario(index) {
    usuarios.splice(index, 1);
    actualizarLista();
}

buscador.addEventListener("input", (e) => {
    const valor = e.target.value.toLowerCase();
    const filtrados = usuarios.filter(user =>
        user.nombre.toLowerCase().includes(valor));
    actualizarLista(filtrados);
});
