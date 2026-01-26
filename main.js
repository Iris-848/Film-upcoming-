const startTime = Date.now();
const minTime = 2500;

window.addEventListener("load", () => {

  const loading = document.querySelector(".loading")
  const elapsedTime = Date.now() - startTime;

  setTimeout(() => {
    loading.classList.add("loading_fadeout");

    setTimeout(() => {
      loading.style.display = "none";
    }, 500);
  }, minTime - elapsedTime);

});