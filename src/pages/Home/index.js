import { useEffect, useState } from "react";
import api from "../../services/api";

//URL da API: movie/now_playing?api_key=bc69350588c44f29756700c5539e12b0&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "bc69350588c44f29756700c5539e12b0",
          language: "pt-BR",
          page: 1,
        },
      });

      console.log(response.data.results);
    }

    loadFilmes();
  }, []);

  return (
    <div>
      <h1>Bem vindo a Home</h1>
    </div>
  );
}

export default Home;
