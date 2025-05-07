
document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector(".chat-input input");
  const button = document.querySelector(".chat-input button");
  const messages = document.querySelector(".chat-messages");

  function agregarMensaje() {
    const texto = input.value.trim();
    if (texto === "") return;

    const mensaje = document.createElement("div");
    mensaje.classList.add("message", "you");
    mensaje.innerHTML = \`
      \${texto}
      <div class="date">\${new Date().toLocaleDateString()}</div>
    \`;
    messages.appendChild(mensaje);
    messages.scrollTop = messages.scrollHeight;
    input.value = "";
  }

  button.addEventListener("click", agregarMensaje);
  input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") agregarMensaje();
  });
});
