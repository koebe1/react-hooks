import { useEffect, useState } from "react";

// custom hook to fetch data from api using useEffect
// api url: http://numbersapi.com/42
export const useFetch = url => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(async () => {
      
    setLoading(true);
    setData(null);

    try {
      const res = await fetch(url);
      const text = await res.text();

      setData(text);
      setLoading(false);

    } catch (err) {
      console.log(err);
    }
  }, [url]);

  return {
    loading: loading,
    data: data
  };
};
