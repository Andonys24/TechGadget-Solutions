// Slider Header
let swiperHeader = new Swiper(".mySwiper-1", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Slider Productos
let swiperProductos = new Swiper(".mySwiper-2", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	// Slider Productos Responsivo
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		520: {
			slidesPerView: 2,
		},
		950: {
			slidesPerView: 3,
		},
	},
});

// Funcionamiento Agregar al carrito
const carrito = document.getElementById("carrito");
const elemetos1 = document.getElementById("lista-1");
const elemetos2 = document.getElementById("lista-2");
const elemetos3 = document.getElementById("lista-3");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar");

cargarEventListener();

function cargarEventListener() {
	elemetos1.addEventListener("click", comprarElmento);
	elemetos2.addEventListener("click", comprarElmento);
	elemetos3.addEventListener("click", comprarElmento);
	carrito.addEventListener("click", eleminarElemento);

	vaciarCarritoBtn.addEventListener("click", vaciarCarrito);
}

function comprarElmento(e) {
	e.preventDefault();
	if (e.target.classList.contains("agregar-carrito")) {
		const elemeto = e.target.parentElement.parentElement;
		leerDatosElemento(elemeto);
	}
}

function leerDatosElemento(elemeto) {
	const infoElemento = {
		imagen: elemeto.querySelector("img").src,
		titulo: elemeto.querySelector("h3").textContent,
		precio: elemeto.querySelector(".precio").textContent,
		id: elemeto.querySelector("a").getAttribute("data-id"),
	};
	insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
	const row = document.createElement("tr");
	row.innerHTML = `
    <td>
    <img src="${elemento.imagen}" alt="Imagen" width="100">
    </td>
    <td>
        ${elemento.titulo}
    </td>
    <td>
        ${elemento.precio}
    </td>
    <td>
        <a href="#" class="borrar" data-id="${elemento.id}"> X</a>
    </td>
    `;
    lista.appendChild(row);
}

function eleminarElemento(e) {
    e.preventDefault();
    let elemento, elementoId;

    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}
