import "./About.css";
import { cleanPage } from "../../utils/cleanPage";

export const About = () => {
  const app = document.querySelector("#app");
  cleanPage(app);
  const aboutFlex = document.createElement("div");
  aboutFlex.classList.add("aboutFlex");
  app.appendChild(aboutFlex);
  aboutFlex.innerHTML = `
  <div class="aboutDiv">
    <p class="aboutText">Welcome to What a Pic! A place where you can find inspiration for your next wallpaper pictures.
     Every time you reload the selection of pictures will be renewed in a completely random way.
    </p>

    <p class="aboutText">All images are part of Unplash© and have been used for educational purposes only.</p>
    
    <p class="aboutText">Thanks for visiting :)</p>
  </div>
  `;
};
