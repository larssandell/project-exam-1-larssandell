import apiCall from "./components/getapi.js";
import zoomImages from "./components/zoomimg.js";
const wpApiService = "https://si.larssandell.no/wp-json/wp/v2/posts?categories=3";
const serviceContainer = document.querySelector(".services");
const loader = document.getElementsByClassName("loader");

// hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");


hamburgerMenu.addEventListener("click", () => {
    hamburgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
}));



async function wpServiceList() {
    try {
      const getService = await apiCall(wpApiService);
      // console.log(getPosts);
      for (let i = 0; i < getService.length; i++) {
          console.log(getService);
          serviceContainer.innerHTML += `<div class="card-container">
                                         <div class="card-image"><img id="image-zoom" class="image" src="${getService[i].featured_media_src_url}" alt="${getService[i].acf.alt_text}"></div>
                                         <div class="card-headline"><h2>${getService[i].title.rendered}</h2></div>
                                         <div class="card-text"><p>${getService[i].acf.paragraph}</p></div>
                                         </div>`;
      }
      zoomImages();
    } catch (err) {}
  }
  
  wpServiceList();