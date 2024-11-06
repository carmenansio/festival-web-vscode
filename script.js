// Cerrar el menú móvil al hacer clic en un enlace
document.querySelectorAll(".nav-links a").forEach((link) => {
	link.addEventListener("click", () => {
		document.getElementById("nav-toggle").checked = false;
	});
});

// Animación suave al desplazarse a las secciones
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth"
		});
	});
});
