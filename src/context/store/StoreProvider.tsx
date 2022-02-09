import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { fetchCountries, fetchGlobal } from "../../api/fetchFromApi";
import {
  GetAllDataType,
  GetCountriesDataType,
} from "../../components/types/FetchTypes";

import { v4 as uuidv4 } from "uuid";

type TotalPagesType = {
  id: string;
  number: number;
};

export interface StoreState {
  countries?: GetCountriesDataType[];
  global?: GetAllDataType;
  perPage: number;
  loading: boolean;
  currentPage: number;
  totalPages?: TotalPagesType[];
  offset: number;
}

interface ContextProps extends StoreState {
  onPageClick: (e: React.ChangeEvent<HTMLButtonElement>) => void;
}

const Context = createContext<ContextProps | null>(null);

export const useStoreContext = () => {
  const ctx = useContext(Context);

  if (!ctx) throw new Error("");

  return ctx;
};

const StoreProvider: FC = ({ children }) => {
  const isMounted = useRef(true);

  const [state, setState] = useState<StoreState>({
    loading: true,
    perPage: 10,
    currentPage: 0,
    offset: 0,
  });

  const { perPage } = state;

  useEffect(() => {
    const getData = async () => {
      await Promise.all([fetchGlobal(), fetchCountries()]).then((results) => {
        const global = results[0]!;
        const countries = results[1]!;

        setState((prevState) => ({
          ...prevState,
          global,
          countries,
          totalPages: [...Array(Math.ceil(countries.length / perPage))].map(
            (item, index) => ({
              id: uuidv4(),
              number: index + 1,
            })
          ),
          loading: false,
        }));
      });
    };

    if (isMounted.current) getData();

    return () => {
      isMounted.current = false;
    };
  }, [perPage]);

  const onPageClick = (e: React.ChangeEvent<HTMLButtonElement>) => {
    const currentPage = +e.target.value;
    const offset = currentPage * perPage;

    setState((prevState) => ({
      ...prevState,
      currentPage,
      offset,
    }));
  };

  return (
    <Context.Provider value={{ ...state, onPageClick }}>
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
