const accordion = document.getElementsByTagName("details");

for (let i = 1; i < accordion.length + 1; i++) {
  document.querySelector(`.q${i}`).addEventListener("click", function () {
    if (document.querySelector(`.d${i}`).open === false) {
      for (let i = 1; i < accordion.length + 1; i++) {
        if (document.querySelector(`.d${i}`).open === true) {
          document.querySelector(`.d${i}`).open = false;
        }
      }
    }
  });
}
