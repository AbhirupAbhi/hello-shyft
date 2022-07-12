import { useState, useEffect } from "react";
import axios from "axios";

const useReadAllApi = (xApiKey, net, wallId, upAuth,ready) => {
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(false);
  const [errMsg, setErrMsg] = useState(false);

  const [url, setUrl] = useState(
    `https://api.shyft.to/sol/v1/nft/read_all?network=${net}&address=${wallId}&update_authority=${upAuth}`
  );

  useEffect(() => {
    
    if(ready === true)
    {
        axios({
            // Endpoint to send files
            url: url,
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-api-key": xApiKey,
            },
          })
            // Handle the response from backend here
            .then((res) => {
              //console.log(res.data);
              setData(res.data);
              setFetchStatus(true);
              //setLoaded(true);
            })
      
            // Catch errors if any
            .catch((err) => {
              console.warn(err);
              setErrMsg(err);
              setFetchStatus(false);
            });
    }
    else
    {
        setFetchStatus(false);
    }
    
  }, [xApiKey, url,ready]);

  return { data, fetchStatus, errMsg };
};

export default useReadAllApi;
