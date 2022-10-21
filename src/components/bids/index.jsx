import "./bids.css";
import { AiFillHeart } from "react-icons/ai";

import Bolsonaro from "../../assets/imgs/bolsonaro.jpg";
import Lula from "../../assets/imgs/lula.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Button } from "react-bootstrap";

const Bids = () => {
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
                  <span>VOTOS</span>
                </p>
                <p>
                  {" "}
                  <AiFillHeart /> 25
                </p>
              </div>
              <div className="bids-card-top">
                <LazyLoadImage src={Lula} alt="" />
                <h3 className="bids-title mt-2">Lula</h3>
              </div>

              <div className="d-grid gap-2">
                <Button id="btn-lula" variant="danger" size="lg">
                  Votar
                </Button>
              </div>
            </div>
          </div>
          <div className="card-column">
            <div className="bids-card" id="bolsonaro">
              <div className="bids-card-bottom">
                <p>
                  <span>VOTOS</span>
                </p>
                <p>
                  {" "}
                  <AiFillHeart /> 92
                </p>
              </div>
              <div className="bids-card-top">
                <LazyLoadImage src={Bolsonaro} alt="" />
                <h3 className="bids-title mt-2">Bolsonaro</h3>
              </div>
              <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                  Votar
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bids;
