// https://beardland.hols.no/wp-json/wp/v2/posts/<id>

const qs = document.location.search;
const params = new URLSearchParams(qs);
console.log(params);
const id = params.get("id");

console.log(id);
const wpIdPost = "https://si.larssandell.no/wp-json/wp/v2/posts/" + id;
console.log(wpIdPost)

const postContainer = document.querySelector(".post-container");
const loader = document.querySelector(".loader")

import apiCall from "./components/getapi.js";

// async function wpPost() {
//     try {
//         const postData = await apiCall(wpIdPost);
//         for (let i = 0; i < postData.length; i++) {
//             console.log(postData[i]);
//             createHtml();
//             // console.log("object");
            
            
//         }


//     } catch(err) {
//         // console.log("Her er feilen: ", err);
//     }
// }
// wpPost();

async function wpPost() {
    try {
      const postData = await apiCall(wpIdPost);;
      postContainer.innerHTML = `<div>
                                  <h2>${postData.title.rendered}</h2>
                                  <p>${postData.acf.paragraph}</p>
                                  <img src="${postData.featured_media_src_url}"/>
                                  </div>`;
    } catch (err) {
        console.log(err);
    }
  }
  wpPost();

function createHtml(wpPost) {
    console.log(wpPost);
    console.log("object");

}

{/* <p>${postData.acf.paragraph}</p> */}
{/* <div>${postData.content.rendered}</div> */}