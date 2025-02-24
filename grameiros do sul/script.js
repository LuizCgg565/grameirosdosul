function mudarMidia(indice) {
    const midias = document.querySelectorAll(".carousel img, .carousel video");
    midias.forEach(midia => midia.classList.remove("active"));
    midias[indice].classList.add("active");
}
