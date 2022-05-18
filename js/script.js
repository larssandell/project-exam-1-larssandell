// // Zoom Popup image
// const zoomBackground = document.createElement("div");
// zoomBackground.id = "zoom-bg"
// document.body.appendChild(zoomBackground);


// const popupImages = document.querySelectorAll("#image-zoom");
// // console.log(popupImages);

// popupImages.forEach(image => {
//     image.addEventListener("click", e => {
//         // testing click
//         // console.log("found target!");

//         // console.log(zoomBackground);
//         zoomBackground.classList.add("popup");

//         // checking if i get the class list popup added
//         // console.log(zoomBackground);

//         const popupImage = document.createElement("img");
//         popupImage.src = image.src;
//         popupImage.id = "popupImage";

//         // removing child so they dont stack on top of eachoter
//         if (zoomBackground.firstChild) {
//             zoomBackground.removeChild(zoomBackground.firstChild)
//         }
//         zoomBackground.appendChild(popupImage);

        
//     })
// });

// // Closeing the popup
// zoomBackground.addEventListener("click", e => {
//     zoomBackground.classList.remove("popup");
// });


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


