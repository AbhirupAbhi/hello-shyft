import { useState, useEffect } from "react";
import axios from "axios";
// import useReadAllApi from "./hello-shyft-collection/Read_All";
// import Navbar from "./Navbar";


const ListAll = () => {
  const [xKey, setXkey] = useState("");
  const [wallID, setWallID] = useState("");
  const [network, setNetwork] = useState("devnet");
  const [updAuth, setUpdAuth] = useState("");
  

  const [isLoaded, setLoaded] = useState(false);
  const [dataFetched, setDataFetched] = useState();


  const fetchNFTs = (e) => {
    e.preventDefault();
    //const val = ReadAllNFts.callNft(xKey,wallID,network,updAuth); // This is the code which is not working
    
    let nftUrl = `https://api.shyft.to/sol/v1/nft/read_all?network=${network}&address=${wallID}&update_authority=${updAuth}`;
    axios({
      // Endpoint to send files
      url: nftUrl,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": xKey,
      },
      // Attaching the form data
    })
      // Handle the response from backend here
      .then((res) => {
        console.log(res.data);
        setDataFetched(res.data);
        setLoaded(true);
      })

      // Catch errors if any
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <div>
      
      <div className="container-lg">
        <div className="py-4">
          <h1>List All Your NFTs</h1>
          <p>
            This is a sample project which will list all your NFTs associated
            with your wallet
          </p>
        </div>
      </div>
      <div className="container-lg">
        <div className="w-100 border border-info rounded-3">
          <div className="form-container p-3">
            <form>
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter X-API-KEY"
                    value={xKey}
                    onChange={(e) => setXkey(e.target.value)}
                  />
                </div>
                <div className="col-12 col-sm-3">
                  <select
                    name="network"
                    className="form-control form-select"
                    id=""
                    onChange={(e) => setNetwork(e.target.value)}
                  >
                    <option value="devnet">Devnet</option>
                    <option value="testnet">Testnet</option>
                    <option value="mainnet-beta">Mainnet Beta</option>
                  </select>
                </div>
                <div className="col-12 col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Wallet Id"
                    value={wallID}
                    onChange={(e) => setWallID(e.target.value)}
                  />
                </div>
                <div className="col-12 col-sm-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Update Authority"
                    value={updAuth}
                    onChange={(e) => setUpdAuth(e.target.value)}
                  />
                </div>
              </div>
              <div className="pt-4 w-25 mx-auto">
                <button
                  className="btn btn-info w-100 custom-button"
                  onClick={fetchNFTs}
                >
                  Get
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container-lg">
        <div className="cards-section py-4">
          <div className="row">
            {isLoaded &&
              dataFetched.result.map((item) => (
                <div className="col-xs-12 col-sm-3 p-1">
                  <div className="card nft-card">
                    <div className="card-body">
                      <a href={`/get-details?token_address=${item.mint}&apiKey=${xKey}`}>
                        <h5>{item.name}</h5>
                      </a>
                      <div className="row">
                        <div className="col">{item.symbol}</div>
                        <div className="col text-end">
                          Royalty: {item.royalty}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            {/* <div className="col-xs-12 col-sm-3">
              <div className="card nft-card">
                <div className="card-body">
                    <h5>
                        Heart Road
                    </h5>
                    <div className="row">
                        <div className="col">HRT</div>
                        <div className="col text-end">Royalty: 5</div>
                    </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListAll;
