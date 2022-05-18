import apiCall from "./components/getapi.js";
import zoomImages from "./components/zoomimg.js";

const qs = document.location.search;
const params = new URLSearchParams(qs);
console.log(params);
const id = params.get("id");

console.log(id);
const wpIdPost = "https://si.larssandell.no/wp-json/wp/v2/posts/" + id;
console.log(wpIdPost)

const postContainer = document.querySelector(".post-container");
const loader = document.querySelector(".loader")


async function wpPost() {
    try {
      const postData = await apiCall(wpIdPost);
      document.title = `Smart Inspection | ${postData.title.rendered}`;
      postContainer.innerHTML = `<div id="container">
                                  <h2>${postData.title.rendered}</h2>
                                  <p>${postData.acf.paragraph}</p>
                                  <img id="image-zoom" src="${postData.featured_media_src_url}"/>
                                  </div>`;
      zoomImages();
    } catch (err) {
        console.log(err);
    }
  }
  wpPost();
  

// function createHtml(wpPost) {
//     console.log(wpPost);
//     console.log("object");

// }

{/* <p>${postData.acf.paragraph}</p> */}
{/* <div>${postData.content.rendered}</div> */}
