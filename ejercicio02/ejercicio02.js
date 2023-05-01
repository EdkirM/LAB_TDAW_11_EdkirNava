const imagenes = document.querySelectorAll('.imagen');
const sectionnn = document.querySelectorAll('.nueva_img');

var filtro = document.getElementById("filtro");
var tabla = document.getElementById("tabla");
var filtroForm = document.getElementById("filtroForm");

var titulo = document.querySelectorAll("tr td:nth-child(3)");
var artista = document.querySelectorAll("tr td:nth-child(4)");
var year = document.querySelectorAll("tr td:nth-child(5)");
var genero = document.querySelectorAll("tr td:nth-child(6)");

const secEdit = document.createElement("section");
secEdit.className = "secEdit"
const edit = document.createElement("div");
edit.className = "edit";
const contenido = document.createElement("div");
contenido.className = "contenido";
const closee = document.createElement("span");
closee.className = "close";
closee.textContent = "X";
const title = document.createElement("h1");
title.className = "title";
title.textContent = "Editar";
const editImg = document.createElement("img");
const editTitulo = document.createElement("input");
editTitulo.type="text";
const editArtista = document.createElement("input");
editArtista.type="text"; 
const editYear = document.createElement("input");
editYear.type="text"; 
const editGenero = document.createElement("input");
editGenero.type="text"; 
const btns = document.querySelectorAll("tr td button")

document.body.appendChild(secEdit);
secEdit.appendChild(edit)
edit.appendChild(title)
edit.appendChild(closee)
edit.appendChild(contenido)
contenido.appendChild(editImg)
contenido.appendChild(editTitulo)
contenido.appendChild(editArtista)
contenido.appendChild(editYear)
contenido.appendChild(editGenero)

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", () => {
    editImg.src = imagenes[i].src;
    editTitulo.value = titulo[i].textContent;
    editArtista.value = artista[i].textContent;
    editYear.value = year[i].textContent;
    editGenero.value = genero[i].textContent;
    secEdit.style.display = "block";
  });
}

closee.addEventListener("click", () => {
  secEdit.style.display = "none";
});



filtroForm.addEventListener("submit", function(event) {
  event.preventDefault(); 
  var valorFiltro = filtro.value;
  console.log(valorFiltro)
  for (var i = 0; i < tabla.rows.length; i++) {
    var fila = tabla.rows[i];
    console.log(fila)
      var valorCelda = fila.cells[5].innerHTML;
    console.log(valorCelda)

      if (valorFiltro == "Género" || valorFiltro === valorCelda ) {
        
      console.log(valorCelda)

      fila.style.display = "";
    } else {
      fila.style.display = "none";
    }
  }
});


function copiasrc(imagenes,nuevaImagen){
  const src = imagenes.src;
  nuevaImagen.src = src;
}

for (let i = 0; i < imagenes.length; i++) {
imagenes[i].addEventListener('mouseover', function() {
  const nuevaImagen = document.createElement('img');
  const sectionimg = document.createElement('section');
  nuevaImagen.className = 'nuevaImagen';
  sectionimg.className = 'secimg';
  copiasrc(this,nuevaImagen)

  sectionimg.appendChild(nuevaImagen)
  this.parentElement.appendChild(sectionimg)


  this.addEventListener('mouseleave', function() {
    sectionimg.remove();
  });
});
}