const cosasQueAprendimos = [
  {
    tema: "terminal",
    class: "",
  },
  {
    tema: "node",
    class: "",
  },
  {
    tema: "oop",
    class: "",
  },
  {
    tema: "typescript",
    class: "",
  },
  {
    tema: "css",
    class: "",
  },
  {
    tema: "dom",
    class: "special",
  },
];

function main() {
	const listaEl = document.querySelector(".lista");
	const liEls = document.querySelectorAll(".lista li");
	// eliminar li
	for (let i = 0; i < liEls.length; i++) {
		liEls[i].remove();
		console.log("li eliminado");
	}
	// agregar li
	for (let i = 0; i < cosasQueAprendimos.length; i++) {
		const element = cosasQueAprendimos[i];
		const newLiEl = document.createElement("li");
		newLiEl.className = element.class;
		newLiEl.textContent = element.tema;
		listaEl.appendChild(newLiEl);
	}
}

main();
