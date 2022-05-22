import apiCall from "./components/getapi.js";
const listPost = document.querySelector(".project-grid");
// const wpApi = "https://si.larssandell.no/wp-json/wp/v2/posts/";
// api call to one catogorie
const wpApi = "https://si.larssandell.no/swp-json/wp/v2/posts?categories=1";
// api call that includes 100 posts pr page
const wpApiMore = "https://si.larssandell.no/wp-json/wp/v2/posts?categories=1&per_page=100";
const loadMoreBtn = document.querySelector(".btn-more");
const searchbar = document.getElementById("searchbar");
const main = document.querySelector("main");

// let data = [];

// searchbar.addEventListener("keyup", (e) => {
//   console.log(e.target.value);
//   // const filteredSearch = getPosts.
//   // data.filter(getPosts => {
//   //   getPosts.title.rendered.

//   // })
// });




async function wpPostList() {
  try {
    const getPosts = await apiCall(wpApi);
    // console.log(getPosts);
    for (let i = 0; i < getPosts.length; i++) {
        console.log(getPosts);
        listPost.innerHTML += `<div class="project-card">
                               <a class="stacked" href="/projectpost.html?id=${getPosts[i].id}">
                               <img class="project-img" src="${getPosts[i].featured_media_src_url}" alt="${getPosts[i].acf.alt_text}">
                               <div class="text-box"><h2 class="post-h2">${getPosts[i].title.rendered}</h2></div>
                               </a></div>`;
    }
  } catch (err) {
    console.log(err, "wpPostlist Api");
  }
};

wpPostList();

loadMoreBtn.addEventListener("click", () => {
  loadMore();
});

async function loadMore() {
  try {
    const getPosts = await apiCall(wpApiMore);
    // console.log(getPosts);
    for (let i = 10; i < getPosts.length; i++) {
        console.log(getPosts);
        listPost.innerHTML += `<div class="project-card">
                               <a class="stacked" href="/projectpost.html?id=${getPosts[i].id}">
                               <img class="project-img" src="${getPosts[i].featured_media_src_url}" alt="${getPosts[i].acf.alt_text}">
                               <div class="text-box"><h2 class="post-h2">${getPosts[i].title.rendered}</h2></div>
                               </a></div>`;
    }
    loadMoreBtn.style.display = "none";
  } catch (err) {
    console.log(err, "loadMore Api");
  }
};

