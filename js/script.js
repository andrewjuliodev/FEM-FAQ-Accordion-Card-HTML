const accordion = document.getElementsByClassName("container");

for (let i = 1; i < accordion.length + 1; i++) {
  document.querySelector(`.row${i}`).addEventListener("click", function () {
    if (document.querySelector(`.cont${i}`).style.height === "55px") {
      for (let i = 1; i < accordion.length + 1; i++) {
        if (document.querySelector(`.cont${i}`).style.height === "100px") {
          document.querySelector(`.arrow${i}`).style.transform = "scaleY(1)";
          document.querySelector(`.cont${i}`).style.height = "55px";
          document.querySelector(`.a${i}`).style.display = "none";
        }
      }
      document.querySelector(`.arrow${i}`).style.transform = "scaleY(-1)";
      document.querySelector(`.cont${i}`).style.height = "100px";
      document.querySelector(`.a${i}`).style.display = "block";
    } else {
      document.querySelector(`.arrow${i}`).style.transform = "scaleY(1)";
      document.querySelector(`.cont${i}`).style.height = "55px";
      document.querySelector(`.a${i}`).style.display = "none";
    }
  });
}
