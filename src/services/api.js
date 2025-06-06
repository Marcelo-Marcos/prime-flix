import axios from "axios";

//Base da URL: https://api.themoviedb.org/3/
//URL da API: movie/now_playing?api_key=bc69350588c44f29756700c5539e12b0&language=pt-BR
//URL completa: https://api.themoviedb.org/3/movie/now_playing?api_key=bc69350588c44f29756700c5539e12b0&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
