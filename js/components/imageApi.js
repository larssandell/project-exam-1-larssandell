/* card image api call */
import apiCall from "./getapi.js";


const wpApiImage = "https://si.larssandell.no/wp-json/wp/v2/media/";
const CardImageBox = document.getElementsByClassName("card-image");
// const CardImage = document.getElementsByClassName("card-image")
const test = "https://si.larssandell.no/wp-content/uploads/2022/05/";
const imageLocation = "https://si.larssandell.no/wp-content/uploads/2022/05?per_page=100";
// const imageLocationID = "https://si.larssandell.no/wp-content/uploads/2022/05/" + id;
const allImages = "https://si.larssandell.no/wp-json/wp/v2/media/?per_page=100";
console.log(allImages);
// console.log(test);
// https://si.larssandell.no/wp-content/uploads/2022/05/img_content_¤{GetImage[i].}.jpg

const cardContainer = document.getElementsByClassName("card-container");


// async function getApiSlides() {
//     try {
//       const getSlides = await apiCall(wpApiNewest);
//       for (let i = 0; i < getSlides.length; i++) {
//         slideArray.forEach(element => 
//           element.innerHTML = `<a href="/projectpost.html?id=${getSlides[i].id}">
//           <img class="slide-image" src="${getSlides[i].featured_media_src_url}"/>
//           <h2 class="carousel-h2">${getSlides[i].title.rendered}</h2></a>`
//         )
  
//         if (i === 0) {
//           // console.log(getSlides[i].id);
//           // console.log(getSlides[i]);
//           slideOne.innerHTML += `<a href="/projectpost.html?id=${getSlides[i].id}">
//           <img class="slide-image" src="${getSlides[i].featured_media_src_url}"/>
//           <h2 class="carousel-h2">${getSlides[i].title.rendered}</h2></a>`
//         } else if (i === 1) {
//           slideTwo.innerHTML += `<a href="/projectpost.html?id=${getSlides[i].id}">
//           <img class="slide-image" src="${getSlides[i].featured_media_src_url}"/>
//           <h2 class="carousel-h2">${getSlides[i].title.rendered}</h2></a>`
//         }else if (i === 2) {
//           slideThree.innerHTML += `<a href="/projectpost.html?id=${getSlides[i].id}">
//           <img class="slide-image" src="${getSlides[i].featured_media_src_url}"/>
//           <h2 class="carousel-h2">${getSlides[i].title.rendered}</h2></a>`
//         }else if (i === 3) {
//           slideFour.innerHTML += `<a href="/projectpost.html?id=${getSlides[i].id}">
//           <img class="slide-image" src="${getSlides[i].featured_media_src_url}"/>
//           <h2 class="carousel-h2">${getSlides[i].title.rendered}</h2></a>`
//         }else if (i === 4) {
//           slideFive.innerHTML += `<a href="/projectpost.html?id=${getSlides[i].id}">
//           <img class="slide-image" src="${getSlides[i].featured_media_src_url}"/>
//           <h2 class="carousel-h2">${getSlides[i].title.rendered}</h2></a>`
//         }
//       }
//     }catch (e) {}
//   }
//   getApiSlides()


// const newImage = document.querySelector(".new-img");
// const card = document.querySelector(".card");
// const testDiv = document.querySelector(".test");
// const testContainer = document.querySelector(".test-container");
// const testDivArray = Array.from(testContainer.children);
// console.log(testDivArray);
const testCard = document.querySelectorAll(".card")
const cardImage = document.querySelectorAll(".card-image");

// async function getApiSlides() {
//     try {
//       const getSlides = await apiCall(wpApiNewest);
//       for (let i = 0; i < getSlides.length; i++) {
//         slideArray.forEach(element => 
//           element.innerHTML = `<a href="/projectpost.html?id=${getSlides[i].id}">
//           <img class="slide-image" src="${getSlides[i].featured_media_src_url}"/>
//           <h2 class="carousel-h2">${getSlides[i].title.rendered}</h2></a>`
//         )

// console.log(imageLocation, "hello");
// image.src = `https://si.larssandell.no/wp-content/uploads/2022/05/img_content_${i}.jpg`;

// const cardImgOne = Document.querySelector("#card-one");
// const cardImageOne = document.querySelector(".card-one");


// for å gi sti til url for zoom
// const imageZoom = getElementsById("image-zoom");
// const getImgUrlPos = getImgUrl.split();
// let youtubeimgsrc = document.getElementById("image-zoom").src;
// console.log(imgFullUrl);
// image.src = `https://si.larssandell.no/wp-content/uploads/2022/05/img_content_${i}.jpg`

// async function getApiImagetest() {
//     try {
//         const getImage = await apiCall(allImages);
        
//         for (let i = 0; i < getImage.length; i++) {
//             console.log(getImage[i]);
            

//             // cardImgOne.innerHTML = `<div><p>hei</p></div>`
//             if (i === 0) {
//                 cardImgOne.innerHTML = `<img id="image-zoom" class="image" src="${getImage[2].guid.rendered}" alt="${getImage[15].alt_text}">`;
//             }else if (i === 1) {
//                 cardImgtwo.innerHTML += `<img id="image-zoom" class="image" src="${getImage[16].guid.rendered}" alt="${getImage[i].alt_text}"> `
//             }else if (i === 2) {
//                 cardImgthree.innerHTML += `<img id="image-zoom" class="image" src="${getImage[i].guid.rendered}" alt="${getImage[i].alt_text}"> `
//             }else if (i === 3) {
//                 cardImgFour.innerHTML += `<img id="image-zoom" class="image" src="${getImage[i].guid.rendered}" alt="${getImage[i].alt_text}"> `
//             }else if (i === 4) {
//                 cardImgFive.innerHTML += `<img id="image-zoom" class="image" src="${getImage[i].guid.rendered}" alt="${getImage[i].alt_text}"> `
//             }else if (i === 5) {
//                 cardImgSix.innerHTML += `<img id="image-zoom" class="image" src="${getImage[i].guid.rendered}" alt="${getImage[i].alt_text}"> `
//             }
//             // console.log(getImage[0].guid.rendered, "127");
//             // console.log(getImage[i], "i");
//             // cardImage.forEach(element => 
//             //     element.innerHTML = `<img id="image-zoom" class="image" src="${getImage[0].guid.rendered}" alt="${getImage[i].alt_text}"> `
//             // )
//         }
//     } catch(err){}
// }
// getApiImagetest();


// async function getApiImagetest() {
//     try {
//         const getImage = await apiCall(allImages);
//         for (let i = 0; i < getImage.length; i++) {
//             // console.log(getImage[1].description.rendered, "image desc");
//             console.log(getImage[i]);
//             cardImage.forEach(element => 
//                 element.innerHTML = `<img id="image-zoom" class="image" src="${getImage[i].guid.rendered}" alt="${getImage[i].alt_text}"> `
//             )
//         }
//     } catch(err){}
// }
// getApiImagetest();