// Api Call universal
const loader = document.querySelector(".loader");
const wpApi = "https://si.larssandell.no/wp-json/wp/v2/posts/";

export default async function apiCall(urlApi) {
  try {
    const response = await fetch(urlApi);
    const data = await response.json();
    // console.log(data);
    loader.innerHTML = "";
    return data;
  } catch (err) {
      loader.innerHTML = "Error404";
      console.log("Her er feilen: ", err);
  }
}