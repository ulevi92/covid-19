import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { GetAllDataType } from "../components/types/useFetchTypes";
import { LoadingContext } from "../context/loading/LoadingProvider";

interface useFetchAllState {
  data?: GetAllDataType;
}

const useFetchAll = (url: string, options?: RequestInit) => {
  const { setLoading } = LoadingContext();

  const [state, setState] = useState<useFetchAllState>({});

  const isMounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url, options);

        const data: GetAllDataType = await res.json();

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

export default useFetchAll;
