import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import {
  GetAllDataType,
  GetCountriesDataType,
} from "../components/types/useFetchTypes";
import { LoadingContext } from "../context/loading/LoadingProvider";

interface useFetchState {
  data?: GetCountriesDataType[];
}

const useFetchCountries = (url: string, options?: RequestInit) => {
  const { setLoading } = LoadingContext();

  const [state, setState] = useState<useFetchState>({});

  const isMounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);

        const data: GetCountriesDataType[] = await res.json();

        setState((prevState) => ({
          ...prevState,
          data,
        }));
        setLoading(false);
      } catch (error) {
        toast.error(`Couldn't fetch data`);
        setLoading(false);
      }
    };

    if (isMounted.current) {
      fetchData();
    }

    return () => {
      isMounted.current = false;
    };
  }, [options, setLoading, url]);

  return state;
};

export default useFetchCountries;
