import { useEffect } from "react";

// custom hook to fetch data from api using useEffect
// api url: http://numbersapi.com/42
export const useFetch = url => {
  useEffect(async () => {
    try {
      const res = await fetch(url);
      console.log(res);
      const data = await res.text();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }, [url]);
};
