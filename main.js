const startTime = Date.now();
const minTime = 2500;

window.addEventListener("load", () => {

  const loading = document.querySelector(".loading");
  const elapsedTime = Date.now() - startTime;

  setTimeout(() => {
    loading.classList.add("fadeout");

    setTimeout(() => {
      loading.style.display = "none";
    }, 500);
  }, minTime - elapsedTime);

});

const modalTrailerClose = document.querySelector(".modal_trailer_close")

modalTrailerClose.addEventListener("click", () => {

  const modalTrailer = document.querySelector(".modal_trailer");

  setTimeout(() => {
    modalTrailer.classList.add("fadeout");

    setTimeout(() => {
      modalTrailer.style.display = "none";
    }, 500);
  });
});
