import "./style/explore.css";

document.getElementById("main_container").style.visibility = "hidden"; 

document.getElementById("explore_more").addEventListener("click", () => {
    document.getElementById("main_container").style.visibility = "visible"; 
});

document.getElementById('item1').src = "https://cdn.dummyjson.com/recipe-images/1.webp";
document.getElementById('item2').src = "https://cdn.dummyjson.com/recipe-images/2.webp";
document.getElementById('item3').src = "https://cdn.dummyjson.com/recipe-images/3.webp" ;
document.getElementById('item4').src = "https://cdn.dummyjson.com/recipe-images/4.webp";
