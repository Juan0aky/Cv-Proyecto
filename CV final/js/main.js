/*para fijar el navegador y anvlas en la zona zuperior*/
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
})