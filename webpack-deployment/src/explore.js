import "./style/explore.css";

document.getElementById("main_container").style.visibility = "hidden"; 

document.getElementById("explore_more").addEventListener("click", () => {
    document.getElementById("main_container").style.visibility = "visible"; 
});
