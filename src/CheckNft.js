import { useState } from "react";
import axios from "axios";

const CheckNft = () => {
  const [network, setNetwork] = useState("devnet");
  const [token, setToken] = useState();
  const [xApi, setXApi] = useState();

  const [loaded, setLoaded] = useState();
  const [returns, setReturns] = useState({
    success: true,
    message: "NFT Data",
    result: {
      name: "SHYFT",
      description: "some description",
      symbol: "SHF",
      image_uri:
        "https://ipfs.io/ipfs/bafkreig7amamflgtsovczf2el7jt7kuwf274jeaeofjy7iaa34r7exydzm",
      attributes: {
        health: 100,
      },
      royalty: 5,
      mint: "9XTGWZENKa18N1vgCQ3RjJWHG92Di2JKYi73jiC4hkEM",
      owner: "BvzKvn6nUUAYtKu2pH3h5SbUkUNcRPQawg4bURBiojJx",
    },
  });

  const checkNow = (e) => {
    e.preventDefault();
    let nftUrl = `https://api.shyft.to/sol/v1/nft/read?network=${network}&token_address=${token}`;
    axios({
      // Endpoint to send files
      url: nftUrl,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": xApi,
      },
      // Attaching the form data
    })
      // Handle the response from backend here
      .then((res) => {
        console.log(res.data);
        setReturns(res.data);
      })
      // Catch errors if any
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div>
      <div className="container p-5">
        <div className="form-container p-5">
          <form>
            <select
              name="network"
              className="form-control mb-3"
              onChange={(e) => setNetwork(e.target.value)}
            >
              <option value="devnet">Devnet</option>
              <option value="testnet">Testnet</option>
              <option value="mainnet-beta">Mainnet Beta</option>
            </select>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Token Address"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Mint Address"
              value={xApi}
              onChange={(e) => setXApi(e.target.value)}
            />
            <button className="btn btn-success" onClick={checkNow}>
              Check Now
            </button>
          </form>
        </div>
      </div>
      <div className="container p-5">
        <table className="table">
          <tr>
            <td>Name</td>
            <td>{returns.result.name}</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{returns.result.description}</td>
          </tr>
          <tr>
            <td>Symbol</td>
            <td>{returns.result.symbol}</td>
          </tr>
          <tr>
            <td>Royalty</td>
            <td>{returns.result.royalty}</td>
          </tr>
        </table>
      </div>
      <div className="container p-5">
        <div className="row p-3 mt-3 bg-info">
          <div className="col">Mint Address</div>
          <div className="col">{returns.result.mint}</div>
        </div>
        <div className="row p-3 mt-3 bg-danger">
          <div className="col">Owner Address</div>
          <div className="col">{returns.result.owner}</div>
        </div>
      </div>
    </div>
  );
};

export default CheckNft;
