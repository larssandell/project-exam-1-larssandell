const listPost = document.querySelector(".project-grid");
const wpApi = "https://si.larssandell.no/wp-json/wp/v2/posts/";

import apiCall from "./components/getapi.js";

async function wpPostList() {
  try {
    const getPosts = await apiCall(wpApi);
    // console.log(getPosts);
    for (let i = 0; i < getPosts.length; i++) {
        console.log(getPosts);
        listPost.innerHTML += `<div class="project-card">
                               <a class="stacked" href="/projectpost.html?id=${getPosts[i].id}">
                               <img class="project-img" src="${getPosts[i].featured_media_src_url}" alt="">
                               <div class="text-box"><h2 class="post-h2">${getPosts[i].title.rendered}</h2></div>
                               </a></div>`;
    }
  } catch (err) {}
}

wpPostList();
