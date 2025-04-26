const textarea = document.getElementById("texto");
const resultado = document.getElementById("resultado");
const contador = document.getElementById("contador");

document.getElementById("aplicar").addEventListener("click", () => {
    resultado.textContent = textarea.value;
});

textarea.addEventListener("input", () => {
    contador.textContent = `Caracteres: ${textarea.value.length}`;
});
