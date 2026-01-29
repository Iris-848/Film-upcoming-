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

modalTrailerClose.addEventListener("click", () => {

  const heroContentsLogo = document.querySelector(".hero_contents_logo");
  const heroContentsCopy = document.querySelector(".hero_contents_copy");
  const heroContentsDate = document.querySelector(".hero_contents_date");

  setTimeout(() => {
    heroContentsLogo.classList.add("slidedown");
    setTimeout(() => {
      heroContentsCopy.classList.add("slidedown");
      setTimeout(() => {
        heroContentsDate.classList.add("slidedown");
      }, 1300);
    }, 1000);
  }, 500);
}, {once: true});


document.addEventListener("change", () => {
  const ticketAdult = document.querySelector("#ticket_adult").value;
  const ticketChild = document.querySelector("#ticket_child").value;
  const sum = ticketAdult * 2000 + ticketChild * 1300;
  document.querySelector(".sum").innerHTML = "¥ " + sum.toLocaleString();
});
