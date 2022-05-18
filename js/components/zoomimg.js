export default function zoomImages() {
    const zoomBackground = document.createElement("div");
    zoomBackground.id = "zoom-bg";
    document.body.appendChild(zoomBackground);
    const popupImages = document.querySelectorAll("#image-zoom");
    const oneImage = document.getElementById("image-zoom");
    const container = document.querySelector(".container");

    popupImages.forEach(image => {
        console.log(image, "her er jeg nå image");
        image.addEventListener("click", e => {
            // testing click
            // console.log("found target!");
    
            // console.log(zoomBackground);
            zoomBackground.classList.add("popup");
    
            // checking if i get the class list popup added
            // console.log(zoomBackground);
    
            const popupImage = document.createElement("img");
            popupImage.src = image.src;
            popupImage.id = "popupImage";
    
            // removing child so they dont stack on top of eachoter
            if (zoomBackground.firstChild) {
                zoomBackground.removeChild(zoomBackground.firstChild)
            }
            zoomBackground.appendChild(popupImage);
    
            
        })
    });
    // Closeing the popup
    zoomBackground.addEventListener("click", e => {
        zoomBackground.classList.remove("popup");
});
}



// const zoomBackground = document.createElement("div");
// zoomBackground.id = "zoom-bg";
// document.body.appendChild(zoomBackground);


// const popupImages = document.querySelectorAll("#image-zoom");
// const oneImage = document.getElementById("image-zoom");
// const container = document.querySelector(".container");

// console.log(popupImages);
// console.log(oneImage);
// console.log(container);

// popupImages.addEventListener('click', function(e) { console.log(this);});

// function testing() {
//     console.log("found target");
// }
// console.log(popupImages.src, "her er jeg");

// console.log(popupImages);

// popupImages.forEach(image => {
//     console.log(image, "her er jeg nå image");
//     image.addEventListener("click", e => {
//         // testing click
//         console.log("found target!");

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

// Closeing the popup
// zoomBackground.addEventListener("click", e => {
//     zoomBackground.classList.remove("popup");
// });


// map url 
// const galleryimg = document.querySelectorAll("#image-zoom");

// windowWidth = window.innerWidth;

// if (galleryimg) {
//     galleryimg.forEach(function(img) {
//         img.onclick = function() {
//             let getElement = window.getComputedStyle(img);
//             let getFullImageUrl = getElement.getPropertyValue(src);
//             let getImgUrlPos = getFullImageUrl.split();
//             alert(getFullImageUrl);

//         }
//     })
// }

// galleryimg
