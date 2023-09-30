import { useEffect, useState } from "react";
import makeRequest from "../utils/makeRequest";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => { 
    try {
      const fetchData = async () => {
        setLoading(true);
        const response = await makeRequest.get(url);
        console.log("useFetcher ", response);

        if (response.status === 200) {
          setData(response.data.data);
        } else {
          throw new Error(response.message);
        }
      };
      fetchData();
    } catch (err) {
      console.log(err.message);
      setError(true);
    }
    setLoading(false);
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}
