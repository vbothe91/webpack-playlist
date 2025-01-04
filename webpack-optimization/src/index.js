import logo from "./assets/images/logo.avif";
import bgImage from "./assets/images/bg_image.webp";
import "./style/style.css";
import "./style/style.scss";
import "./assets/fonts/ProtestGuerrilla-Regular.ttf";

const element = document.getElementById("toast");
element.style.visibility = "hidden"; 

document.getElementById("title").addEventListener("click", () => {
    import("lodash").then(({ default: _ }) => {
        element.innerHTML = `Thank you for visit. Your bill is ${_.add(200,300)}.`
        element.style.visibility = "visible"; 
    })
});

document.getElementById('logo').src = logo;
document.getElementById("bg_image").src = bgImage;
