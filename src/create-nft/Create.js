import { useState } from "react";
import axios from "axios";
import { LAMPORTS_PER_SOL, clusterApiUrl, Connection,PublicKey } from "@solana/web3.js";
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

const Create = () => {
  const [file, setfile] = useState();
  const [displayPic, setDisplayPic] = useState();
  const [network, setnetwork] = useState("devnet");
  const [privKey, setprivKey] = useState();
  const [xApiKey, setXAPI] = useState('6YYVFYSK7PlguTsB');
  const [name, setName] = useState();
  const [symbol, setSymbol] = useState();
  const [desc, setDesc] = useState();
  const [attr, setAttr] = useState();
  const [extUrl, setExtUrl] = useState();
  const [maxSup, setMaxSup] = useState();
  const [roy, setRoy] = useState();
  const [errorRoy, setErrorRoy] = useState();

  const [status,setStatus] = useState("Awaiting Upload");
  const [dispResponse,setDispResp] = useState("");

  const [connStatus, setConnStatus] = useState(true);
  
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
                // setwallID(wallet.address);
                // ReactSession.set("userw", wallet.address);
                const accountInfo = await connection.getAccountInfo(new PublicKey(wallet.address),"confirmed");
                console.log(accountInfo);
                //document.getElementById("clsBtn").click();  
            }
        }
        catch(err)
        {
            console.log(err);
        }

  }

  const mintNow = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("network",network);
    formData.append("private_key",privKey);
    formData.append("name",network);
    formData.append("symbol",symbol);
    formData.append("description",desc);
    formData.append("attributes",attr);
    formData.append("external_url",extUrl);
    formData.append("max_supply",maxSup);
    formData.append("royalty",roy);
    formData.append("file",file);

    axios({
        // Endpoint to send files
        url: "https://api.shyft.to/sol/v1/nft/create",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
          "x-api-key": xApiKey,
          Accept: "*/*",
          "Access-Control-Allow-Origin": "*",
        },
  
        // Attaching the form data
        data: formData,
      })
        // Handle the response from backend here
        .then((res) => {
          console.log(res);
          setStatus("success: "+res.data.success);
          setDispResp(res.data);
        })
  
        // Catch errors if any
        .catch((err) => {
          console.warn(err);
          setStatus("success: false");
        });
    
  }

  return (
    <div>
      <div className="container p-5">
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
        {connStatus && (<div className="form-container border border-primary rounded py-3 px-5">
          <h3>Create An Nft</h3>
          <p>
            This Sample Project Illustrates how to create new NFTs using SHYFT
            APIs.
          </p>
          <form>
            <div className="img-container text-center mt-5">
              <div
                className="uploaded-img"
                style={{
                  height: "200px",
                  width: "200px",
                  backgroundColor: "grey",
                  margin: "0 auto",
                  borderRadius: "10px",
                }}
              >
                <img
                  src={displayPic}
                  alt="To be uploaded"
                  style={{ height: "100%", width: "100%", objectFit: "cover" }}
                />
              </div>
              <input
                type="file"
                className="border border-dark my-4 mx-auto"
                onChange={(e) => {
                  const [file_selected] = e.target.files;
                  setfile(e.target.files[0]);
                  setDisplayPic(URL.createObjectURL(file_selected));
                }}
              />
            </div>
            <div className="fields">
              <table className="table">
                <tr>
                  <td>
                    <h5 className="py-4 text-danger">
                      Network <br></br>
                      <small>Solana blockchain environment (testnet/devnet/mainnet-beta)</small>
                    </h5>

                  </td>
                  <td className="px-5">
                    <select
                      name="network"
                      className="form-control"
                      onChange={(e) => setnetwork(e.target.value)}
                    >
                      <option value="devnet">Devnet</option>
                      <option value="testnet">Testnet</option>
                      <option value="mainnet-beta">Mainnet Beta</option>
                    </select>
                    
                  </td>
                </tr>
                <tr>
                  <td className="py-4 ps-2 text-danger">
                    Private Key<br />
                    <small>Your wallet's private key (string)</small>
                  </td>
                  <td className="px-5">
                    <input type="text" className="form-control" value={privKey} onChange={(e)=>setprivKey(e.target.value)} required />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 ps-2 text-danger">Name<br />
                  <small>Your NFT Name (string)</small>
                  </td>
                  <td className="px-5">
                    <input type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)} required />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 ps-2 text-danger">
                    Symbol<br />
                    <small>Your NFT Symbol (string)</small>
                  </td>
                  <td className="px-5">
                    <input type="text" className="form-control" value={symbol} onChange={(e)=>setSymbol(e.target.value)} required />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 ps-2 text-danger">
                    Description <br />
                    <small>Your NFT Symbol (string)</small>
                  </td>
                  <td className="px-5 py-3">
                    <textarea className="form-control" value={desc} onChange={(e)=>setDesc(e.target.value)} required></textarea>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 ps-2 text-danger">
                    Attributes <br />
                    <small>attributes associated to this NFT. (Should have 'trait_type' and 'value')</small>
                  </td>
                  <td className="px-5 py-3">
                    <textarea className="form-control" value={attr} onChange={(e)=>setAttr(e.target.value)} required></textarea>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 ps-2">
                    External Url <br />
                    <small>any url to associate with the NFT</small>
                  </td>
                  <td className="px-5">
                    <input type="text" className="form-control" value={extUrl} onChange={(e)=>setExtUrl(e.target.value)} required />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 ps-2 text-danger">
                    Max Supply <br />
                    <small>Maximum number of clones/edition mints possible for this NFT</small>
                  </td>
                  <td className="px-5">
                    <input type="number" className="form-control" value={maxSup} onChange={(e)=>setMaxSup(e.target.value)} required />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 ps-2 text-danger">
                    Royalty <br />
                    <small>represents how much percentage of secondary<br/>
                     sales does the original creator gets. Ranges from (0-100),<br/> 
                    0 being original creator gets nothing and 100 being original<br/> 
                    creator gets entire amount from secondary sales</small>
                  </td>
                  <td className="px-5">
                    <input type="number" className="form-control" value={roy} onChange={(e) => {
                            let a = e.target.value;
                            if (a < 0 || a > 100)
                              setErrorRoy("Value must be between 0-100");
                            else {
                              setRoy(e.target.value);
                              setErrorRoy("");
                            }
                          }} min={0} max={100} required />
                          {errorRoy}
                  </td>
                </tr>
              </table>
              <div className="p-5 text-center">
                <button type="submiit" className="btn btn-danger" onClick={mintNow}>Submit</button>
              </div>
            </div>
          </form>
        </div>)}
        
        <div className="py-5">
          <h2 className="text-center pb-3">Response</h2>
          <div className="status text-center text-info p-3"><b>{status}</b></div>
          <textarea
            className="form-control"
            name=""
            value={JSON.stringify(dispResponse)}
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Create;
