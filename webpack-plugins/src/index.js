import logo from "./assets/images/logo.avif";
import bgImage from "./assets/images/bg_image.webp";
import "./style/style.css";
import "./style/style.scss";
import "./assets/fonts/ProtestGuerrilla-Regular.ttf";

document.getElementById("toast").style.visibility = "hidden"; 

document.getElementById("title").addEventListener("click", () => {
    document.getElementById("toast").style.visibility = "visible"; 
});

document.getElementById('logo').src = logo;
document.getElementById("bg_image").src = bgImage;

unused_function_1();

export function unused_function_1() {
    console.log("unused function 1");
}

export function unused_function_2() {
    console.log("unused function 2");
}
