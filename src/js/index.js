//const proudOfThisFunc = () => {
   // console.log('🎉')
 // }

  const acc = document.getElementsByClassName("accordion");
const i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
   const containerResposta = this.nextElementSibling;
    if (containerResposta.style.display === "block") {
      containerResposta.style.display = "none";
    } else {
      containerResposta.style.display = "block";
    }
  });
}
