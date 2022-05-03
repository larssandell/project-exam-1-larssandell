// const urlApi = "https://beardland.hols.no/wp-json/wp/v2/posts/";
const loader = document.querySelector(".loader");

export default async function apiCall(urlApi) {
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    console.log(data);
    loader.innerHTML = "";
    return data;
  } catch (err) {
      loader.innerHTML = "Error404";
      console.log("Her er feilen: ", err);
  }
}




// orginal
// const urlApi = "https://beardland.hols.no/wp-json/wp/v2/posts/";

// async function apiCall(urlApi) {
//   try {
//     const response = await fetch(urlApi);
//     const data = await response.json();
//     return data;
//   } catch (e) {}
// }