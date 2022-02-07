import { useEffect, useRef, useState } from "react";

interface useFetchProps {
  url: string;
  options?: RequestInit;
}

interface useFetchState {
  error: string;
  data?: {};
}

const useFetch = (url: string, options?: RequestInit) => {
  const [state, setState] = useState<useFetchState>({
    error: "",
  });

  const isMounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, options);

        const data = await res.json();
      } catch (error) {}
    };

    if (isMounted.current) {
      fetchData();
    }

    return () => {
      isMounted.current = false;
    };
  }, [options, url]);

  return state;
};

export default useFetch;
