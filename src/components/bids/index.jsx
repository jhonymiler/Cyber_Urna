import "./bids.css";
import { AiFillHeart } from "react-icons/ai";

import Bolsonaro from "@assets/imgs/bolsonaro.jpg";
import Lula from "@assets/imgs/lula.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "react-bootstrap";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const Bids = ({ Contrato }) => {
  const [votosBolsonaro, setVotosBolsonaro] = useState(0);
  const [votosLula, setVotosLula] = useState(0);

  const votar = (candidato) => {
    Contrato.Votar(candidato)
      .then((res) => {
        toast.success("Voto realizado com Sucesso!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((e) => {
        let msg = e.data.message.match(/revert (.*)/);
        toast.success(msg[1], {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };

  useEffect(() => {
    Contrato.getVotos().then((res) => {
      setVotosBolsonaro(parseInt(res[0]["qtdVotos"], 16));
      setVotosLula(parseInt(res[1]["qtdVotos"], 16));
    });
  });

  return (
    <div className="bids m-5">
      <div className="bids-container">
        <div className="bids-container-text">
          <h1> Candidatos </h1>
        </div>
        <div className="bids-container-card">
          <div className="card-column">
            <div className="bids-card" id="lula">
              <div className="bids-card-bottom">
                <p>
                  <b className="pl-3">VOTOS</b>
                </p>
                <p>
                  {votosLula} <AiFillHeart />
                </p>
              </div>
              <div className="bids-card-top">
                <LazyLoadImage src={Lula} alt="" />
                <h3 className="bids-title mt-2">Lula</h3>
              </div>

              <div className="d-grid gap-2">
                <Button
                  id="btn-lula"
                  variant="danger"
                  size="lg"
                  onClick={() => {
                    votar(1);
                  }}
                >
                  Votar
                </Button>
              </div>
            </div>
          </div>
          <div className="card-column">
            <div className="bids-card" id="bolsonaro">
              <div className="bids-card-bottom">
                <p>
                  <b>VOTOS</b>
                </p>
                <p>
                  {votosBolsonaro} <AiFillHeart />
                </p>
              </div>
              <div className="bids-card-top">
                <LazyLoadImage src={Bolsonaro} alt="" />
                <h3 className="bids-title mt-2">Bolsonaro</h3>
              </div>
              <div className="d-grid gap-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => {
                    votar(0);
                  }}
                >
                  Votar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Bids;
