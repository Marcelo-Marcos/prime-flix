import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

//URL da API: movie/now_playing?api_key=bc69350588c44f29756700c5539e12b0&language=pt-BR

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "bc69350588c44f29756700c5539e12b0",
          language: "pt-BR",
          page: 1,
        },
      });
      setFilmes(response.data.results.slice(0, 5));
      setLoading(false);
    }

    loadFilmes();
  }, []);

  function anterior(number) {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "bc69350588c44f29756700c5539e12b0",
          language: "pt-BR",
          page: 1,
        },
      });

      const novoCount = Math.max(count - number, 0);
      const fim = novoCount + number;

      setCount(novoCount);

      setFilmes(response.data.results.slice(novoCount, fim));
      setLoading(false);

      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    loadFilmes();
  }

  function proximo(number) {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "bc69350588c44f29756700c5539e12b0",
          language: "pt-BR",
          page: 1,
        },
      });

      const novoCount = count + number;
      const fim = novoCount + number;

      setCount(novoCount); // agenda a atualização

      setCount(novoCount);

      setFilmes(response.data.results.slice(novoCount, fim));
      setLoading(false);

      // Rolando para o topo da página
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    loadFilmes();
  }

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="lista-filmes">
        {filmes.map((filme) => {
          return (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          );
        })}
      </div>
      <div className="container-botoes">
        <button
          className="container-botoes-imagem"
          title="Anterior"
          onClick={() => anterior(5)}
        >
          <img src="/de-volta.png" alt="Voltar" />
        </button>
        <button
          className="container-botoes-imagem"
          title="Próximo"
          onClick={() => proximo(5)}
        >
          <img src="/proximo.png" alt="Voltar" />
        </button>
      </div>
    </div>
  );
}

export default Home;
