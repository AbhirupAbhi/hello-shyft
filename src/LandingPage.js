import { Link } from "react-router-dom";
import pattern from './resources/images/landing-card.jpg';
const LandingPage = () => {
  return (
    <div>
      <div
        className="w-100 p-5 text-center text-light"
        style={{ backgroundColor: "#1F4488" }}
      >
        <h3 className="my-3">Sample Projects</h3>
        <h1 style={{ margin: "60px auto", fontSize: "70px" }}>Hello SHYFT</h1>
        <p className="pb-5">
          A series of sample projects to help you understand SHYFT APIs and even
          use them in your projects.
        </p>
        <button className="btn btn-info p-3 mb-5">SHYFT API Docs</button>
      </div>
      <div className="container py-5">
      <div className="d-flex justify-content-center">
      <div className="p-4">
          <div className="card" style={{ width: "300px" }}>
            <img
              className="card-img-top"
              src={pattern}
              alt="Card"
              style={{ width: "100%" }}
            />
            <div className="card-body" >
              <h4 className="card-title">How to create an NFT?</h4>
              <p className="card-text" style={{height: "70px"}}>
                A sample project that illustrates minting new NFTs using our own SHYFT APIs
              </p>
              <Link to="/create-new" className="btn btn-primary">
                View Demo
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="card" style={{ width: "300px" }}>
            <img
              className="card-img-top"
              src={pattern}
              alt="Card"
              style={{ width: "100%" }}
            />
            <div className="card-body" >
              <h4 className="card-title">List All Your NFTs</h4>
              <p className="card-text" style={{height: "70px"}}>
                Sample Project which illustrates the fetch all api, which lists all the NFTs from the users wallet. 
              </p>
              <Link to="/list-all" className="btn btn-primary">
                View Demo
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="card" style={{ width: "300px" }}>
            <img
              className="card-img-top"
              src={pattern}
              alt="Card"
              style={{ width: "100%" }}
            />
            <div className="card-body" >
              <h4 className="card-title">Login Using NFTs</h4>
              <p className="card-text" style={{height: "70px"}}>
                Sample Project which fetches all your NFTs which illustrates Login using NFTs.    
              </p>
              <Link to="/nft-login" className="btn btn-primary">
                View Demo
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="card" style={{ width: "300px" }}>
            <img
              className="card-img-top"
              src={pattern}
              alt="Card"
              style={{ width: "100%" }}
            />
            <div className="card-body" >
              <h4 className="card-title">Get Details of one particular Nft</h4>
              <p className="card-text" style={{height: "70px"}}>
                Sample Project which illustrates our read api, and fetches all metadata with respect to an NFT.
              </p>
              <Link to="/check" className="btn btn-primary">
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
        
      </div>
    </div>
  );
};

export default LandingPage;
