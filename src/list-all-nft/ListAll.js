import { useState, useEffect } from "react";
import axios from "axios";
import { LAMPORTS_PER_SOL, clusterApiUrl, Connection,PublicKey } from "@solana/web3.js";
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
// import useReadAllApi from "./hello-shyft-collection/Read_All";
// import Navbar from "./Navbar";


const ListAll = () => {
  const [xKey, setXkey] = useState('6YYVFYSK7PlguTsB');
  const [wallID, setWallID] = useState("");
  const [network, setNetwork] = useState("devnet");
  const [updAuth, setUpdAuth] = useState("");
  

  const [isLoaded, setLoaded] = useState(false);
  const [dataFetched, setDataFetched] = useState();

  const [connStatus,setConnStatus] = useState(false);

  const mtmskConnect = async () => {
    console.log('clicked meta mask');
    const { ethereum } = window;
    
        if(!ethereum)
        {
            console.log("Please Install Meta Mask");
        }
    
        try{
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Found An account: "+accounts[0]);
            console.log(accounts);
            setWallID(accounts[0]);
            setConnStatus(true);
            //setCurrentAccount(accounts);
        }
        catch(err)
        {
            console.log(err);
        }
  }

  const solanaConnect = async () => {
    console.log('clicked solana connect');
    const { solana } = window;
        if(!solana)
        {
            alert("Please Install Solana");
        }

        try{  
            //const network = "devnet";
            const phantom = new PhantomWalletAdapter();
            await phantom.connect();
            const rpcUrl = clusterApiUrl(network);
            const connection = new Connection(rpcUrl,"confirmed");
            const wallet = {
                address: phantom.publicKey.toString(),
            };

            if(wallet.address)
            {
                console.log(wallet.address);
                setWallID(wallet.address);
                
                // ReactSession.set("userw", wallet.address);
                const accountInfo = await connection.getAccountInfo(new PublicKey(wallet.address),"confirmed");
                console.log(accountInfo);
                //document.getElementById("clsBtn").click();
                setConnStatus(true);
                
                
            }
        }
        catch(err)
        {
            console.log(err);
        }

  }

  const fetchNFTs = (e) => {
    e.preventDefault();
    //const val = ReadAllNFts.callNft(xKey,wallID,network,updAuth); // This is the code which is not working
    
    let nftUrl = `https://api.shyft.to/sol/v1/nft/read_all?network=${network}&address=${wallID}&update_authority=${wallID}`;
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
      {!connStatus && (<div className="card border border-primary rounded py-3 px-5">
          <div className="card-body text-center">
            <h2 className="card-title p-2">Connect Your Wallet</h2>
            <p className="card-text p-1">You need to connect your wallet to deploy and interact with your contracts.</p>
            {/* <button class="btn btn-primary">Connect Wallet</button> */}
            <select className="form-select" onChange={(e) => {
              console.log(e.target.value);
              (e.target.value === 'mtmsk') ? mtmskConnect() : solanaConnect();
            }}>
              <option value="none">Connect</option>
              {/* <option value="mtmsk">Metamask</option> */}
              <option value="phntm">Phantom</option>
            </select>
          </div>
        </div>)}
        {connStatus && (<div className="w-100 border border-info rounded-3">
          <div className="form-container p-3">
            <form>
              <div className="row d-flex justify-content-center">
                <div className="col-12 col-sm-3">
                  {/* <input
                    type="text"
                    className="form-control"
                    placeholder="Enter X-API-KEY"
                    value={xKey}
                    onChange={(e) => setXkey(e.target.value)}
                  /> */}
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
                  />
                </div>
                <div className="col-12 col-sm-3">
                  {/* <input
                    type="text"
                    className="form-control"
                    placeholder="Update Authority"
                    value={updAuth}
                    onChange={(e) => setUpdAuth(e.target.value)}
                  /> */}
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
        </div>)}
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
