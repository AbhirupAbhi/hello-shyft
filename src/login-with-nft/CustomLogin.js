import { LAMPORTS_PER_SOL, clusterApiUrl, Connection,PublicKey } from "@solana/web3.js";
import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const CustomLogin = () => {
    const navigate = useNavigate();
    const [wallID,setwallID] = useState("");
    const [xApi,setXApi] = useState();
    const [network,setNetwork] = useState("devnet");
    const [connProg,setConnProg] = useState("Not yet Connected");
    const getAccount = async () => {
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
                setConnProg('Attempting to Connect');
                console.log(wallet.address);
                setwallID(wallet.address);
                // ReactSession.set("userw", wallet.address);
                const accountInfo = await connection.getAccountInfo(new PublicKey(wallet.address),"confirmed");
                console.log(accountInfo);
                //document.getElementById("clsBtn").click();
                let nftUrl = `https://api.shyft.to/sol/v1/nft/read_all?network=${network}&address=${wallet.address}&update_authority=${wallet.address}`;
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
                        try{
                            res.data.result.map((item) => {
                                if(item.name === 'Unlocker' && item.mint === 'DmJ77jRq1ZvEinmKAxBqWGQEPausUkjQkPgbnLQYn7KE' && item.attributes.passphrase === 'musicdragon')
                                {
                                    setConnProg("Connected and authorized");
                                    navigate('/sample-page');
                                }
                                else
                                {
                                    setConnProg("Error Occured/Unauthorized"); 
                                }
                            });
                        }
                        catch
                        {
                            setConnProg("Error Occured/Unauthorized"); 
                        }
                        
                        // setDataFetched(res.data);
                        // setLoaded(true);
                      })
                
                      // Catch errors if any
                      .catch((err) => {
                        console.warn(err);
                        setConnProg("Unauthorized");
                      });
                
                
            }
        }
        catch(err)
        {
            console.log(err);
        }
    
    }


    return ( <div>
        <div className="container">
            <div className="row py-5">
                <div className="col-xs-12 col-sm-3"></div>
                <div className="col-xs-12 col-sm-6">
                    <div className="bg-info text-center p-3 rounded-3">
                        <input className="form-control mb-3" type="text" placeholder="Enter x-api-key" value={xApi} onChange={(e) => setXApi(e.target.value)}/>
                        <select
                            name="network"
                            className="form-control form-select mb-3"
                            id=""
                            onChange={(e) => setNetwork(e.target.value)}
                        >
                            <option value="devnet">Devnet</option>
                            <option value="testnet">Testnet</option>
                            <option value="mainnet-beta">Mainnet Beta</option>
                        </select>
                        <button className="btn btn-danger w-50" onClick={getAccount}>Connect & Verify</button>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-3"></div>
            </div>
            {/* <div className="text-center text-success pt-2">
                <h6>Your Wallet ID: {wallID}</h6>
            </div> */}
            <div className="text-center text-danger p-5">
                <h4>{connProg}</h4>
            </div>
        </div>
    </div> );
}
 
export default CustomLogin;