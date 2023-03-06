import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";
import { getData } from "../../services/services";
import { generateModal } from "../../components/photoDetail/photoDetail";

const printPics = async () => {
  const pics = await getData();
  const gridDiv = document.createElement("div");
  gridDiv.classList.add("gridDiv");
  pics.forEach((pic, index) => {
    const photoDiv = document.createElement("div");
    photoDiv.classList.add(`div_${index}`);
    const img = document.createElement("img");
    img.src = pic.urls.regular;
    photoDiv.appendChild(img);
    const modal = generateModal(pic);
    photoDiv.innerHTML += modal;
    gridDiv.appendChild(photoDiv);
    const app = document.querySelector("#app");
    app.appendChild(gridDiv);
    photoDiv.addEventListener("click", (ev) => {
      document.querySelector(`#modal-${pic.id}`).style.display = "block";
      document.querySelector(`#modal-${pic.id}`).classList.remove("hidden");
    });
    const modalClose = document.getElementById(`modal-close-${pic.id}`);
    modalClose.addEventListener("click", () => {
      document.getElementById(`modal-${pic.id}`).classList.add("hidden");
      document.getElementById(`modal-${pic.id}`).style.display = "none";
    });
  });
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    modal.addEventListener("click", (ev) => {
      ev.stopPropagation();
      if (ev.target === modal) {
        modal.classList.add("hidden");
        modal.style.display = "none";
      }
    });
  });
};

export const Home = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  printPics();
};
