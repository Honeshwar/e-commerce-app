// React hooks
import { useEffect, useState } from "react";

// API utility
import makeRequestAPI from "../utils/makeRequestAPI";
import type { ApiResponse, Product } from "./types/useFetch.types";

interface ApiResponseType {
  status: number;
  data: {
    data: ApiResponse<Product>[];
  };
  message?: string;
}

export default function useFetch<T>(urlPath: string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    try {
      const fetchData = async () => {
        setLoading(true);
        const response: ApiResponseType = await makeRequestAPI.get(urlPath);
        // console.log("useFetcher ", response);

        if (response.status === 200) {
          setData(response.data.data as T);
        } else {
          throw new Error(response?.message ?? "Something went wrong");
        }
      };
      fetchData();
    } catch (err: any) {
      console.error(err.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, [urlPath]);

  return {
    data,
    loading,
    error,
  };
}
