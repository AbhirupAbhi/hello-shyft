import { useState } from "react";
import axios from "axios";

const CheckNft = () => {
  const [network, setNetwork] = useState("devnet");
  const [token, setToken] = useState();
  const [xApi, setXApi] = useState('6YYVFYSK7PlguTsB');

  const [loaded, setLoaded] = useState(false);
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
    setLoaded(false);
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
        setLoaded(true);
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
            {/* <select
              name="network"
              className="form-control mb-3"
              onChange={(e) => setNetwork(e.target.value)}
            >
              <option value="devnet">Devnet</option>
              <option value="testnet">Testnet</option>
              <option value="mainnet-beta">Mainnet Beta</option>
            </select> */}
            
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter Token Address"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
            {/* <input
              type="text"
              className="form-control mb-3"
              placeholder="Enter X-api-key"
              value={xApi}
              onChange={(e) => setXApi(e.target.value)}
            /> */}
            <button className="btn btn-success" onClick={checkNow}>
              Check Now
            </button>
          </form>
        </div>
      </div>
      {!loaded && (<h3 className="text-center">Enter Data to Check</h3>)}
      {loaded && (<div>
        <div className="container p-5">
          <div
            className="img-cont"
            style={{
              width: "200px",
              height: "200px",
              margin: "30px auto",
              backgroundColor: "#fefefe",
              backgroundImage: `url(${returns.result.image_uri})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              border: "2px solid purple",
            }}
          ></div>
          <table className="table">
            <tbody>
              <tr>
                <td className="py-3 px-1">Name</td>
                <td className="py-3 px-1">{returns.result.name}</td>
              </tr>
              <tr>
                <td className="py-3 px-1">Description</td>
                <td className="py-3 px-1">{returns.result.description}</td>
              </tr>
              <tr>
                <td className="py-3 px-1">Symbol</td>
                <td className="py-3 px-1">{returns.result.symbol}</td>
              </tr>
              <tr>
                <td className="py-3 px-1">Royalty</td>
                <td className="py-3 px-1">{returns.result.royalty}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container py-5">
          Attributes:
          <div className="d-flex">
            {JSON.stringify(returns.result.attributes)}
          </div>
        </div>
        <div className="container p-5">
          <div className="row p-3 mt-3 bg-warning">
            <div className="col">Mint Address</div>
            <div className="col text-end">
              <b>{returns.result.mint}</b>
            </div>
          </div>
          <div className="row p-3 mt-3 bg-danger text-light rounded">
            <div className="col">Owner Address</div>
            <div className="col text-end">
              <b>{returns.result.owner}</b>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  );
};

export default CheckNft;
