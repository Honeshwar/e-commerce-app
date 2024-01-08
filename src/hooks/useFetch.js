import { useEffect, useState } from "react";
import makeRequestAPI from "../utils/makeRequestAPI";

export default function useFetch(urlPath) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const fetchData = async () => {
        setLoading(true);
        const response = await makeRequestAPI.get(urlPath);
        // console.log("useFetcher ", response);

        if (response.status === 200) {
          setData(response.data.data);
        } else {
          throw new Error(response.message);
        }
      };
      fetchData();
    } catch (err) {
      // console.log(err.message);
      setError(true);
    }
    setLoading(false);
  }, [urlPath]);

  return {
    data,
    loading,
    error,
  };
}
