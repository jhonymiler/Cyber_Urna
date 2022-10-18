import "./bids.css";
import { AiFillHeart } from "react-icons/ai";

import Bolsonaro from "../../assets/imgs/bolsonaro.jpg";
import Lula from "../../assets/imgs/lula.jpg";

import { LazyLoadImage } from "react-lazy-load-image-component";

const Bids = () => {
  return (
    <div className="bids m-5">
      <div className="bids-container">
        <div className="bids-container-text">
          <h1> Candidatos </h1>
        </div>
        <div className="bids-container-card px-3">
          <div className="card-column">
            <div className="bids-card">
              <div className="bids-card-top">
                <LazyLoadImage src={Lula} alt="" />
                <h3 className="bids-title mt-2">Lula</h3>
              </div>
              <div className="bids-card-bottom">
                <p>
                  0.20 <span>ETH</span>
                </p>
                <p>
                  {" "}
                  <AiFillHeart /> 25
                </p>
              </div>
            </div>
          </div>
          <div className="card-column">
            <div className="bids-card">
              <div className="bids-card-top">
                <LazyLoadImage src={Bolsonaro} alt="" />
                <h3 className="bids-title mt-2">Bolsonaro</h3>
              </div>
              <div className="bids-card-bottom">
                <p>
                  1.25 <span>ETH</span>
                </p>
                <p>
                  {" "}
                  <AiFillHeart /> 92
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bids;
