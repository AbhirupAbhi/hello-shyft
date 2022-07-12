import axios from "axios";


const ReadAllNFts = () => {
   const callNft = (xKey,network,wallID,updAuth) => {
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
        //setDataFetched(res.data);
        //setLoaded(true);
      })

      // Catch errors if any
      .catch((err) => {
        console.warn(err);
      });
   }
    return ( <div></div> );
}
 
export default ReadAllNFts;