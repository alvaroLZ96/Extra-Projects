import "./style.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/HomeGallery";
import { About } from "./pages/About/About";
import { linkPage } from "./utils/linkPage";
const header = document.querySelector("header");
header.innerHTML = Navbar();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homeLink", Home);
Home();
linkPage("#aboutLink", About);
