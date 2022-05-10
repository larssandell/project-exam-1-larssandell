const listPost = document.querySelector(".list-container");
const wpApi = "https://si.larssandell.no/wp-json/wp/v2/posts/";

import apiCall from "./components/getapi.js";

async function wpPostList() {
  try {
    const getPosts = await apiCall(wpApi);
    // console.log(getPosts);
    for (let i = 0; i < getPosts.length; i++) {
        console.log(getPosts);
        document.title = `${getPosts[i].title.rendered}`
        listPost.innerHTML += ` <div><a href="/projectpost.html?id=${getPosts[i].id}">
                                <h2>${getPosts[i].title.rendered}</h>
                                <img src="${getPosts[i].featured_media_src_url}" alt="" /></a>
                                </div>`;
    }
  } catch (err) {}
}

wpPostList();