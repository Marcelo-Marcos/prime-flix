import { useEffect, useState } from "react";
import { useParams, useNavigate, replace } from "react-router-dom";
import api from "../../services/api";
import "./filme-info.css";

function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filme, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`movie/${id}`, {
          params: {
            api_key: "bc69350588c44f29756700c5539e12b0",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setFilmes(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/", { replace: true });
          return;
        });
    }

    loadFilme();

    return () => {
      console.log("COMPONENTE FOI DESMONTADO!");
    };
  }, [navigate, id]);

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avaliação: {filme.vote_average} /10</strong>

      <div className="area-buttons">
        <button>Salvar</button>
        <button>
          <a
            target="blank"
            rel="external"
            href={`https://www.youtube.com/results?search_query=${filme.title} trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}

export default Filme;
