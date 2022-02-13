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
  countries: GetCountriesDataType[] | null;
  global: GetAllDataType | null;
  perPage: number;
  loading: boolean;
  currentPage: number;
  totalPages: TotalPagesType[] | null;
  offset: number;
}

interface ContextProps extends StoreState {
  onPageClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  setOffsetAndPage: (num: number) => void;
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
    perPage: 9,
    currentPage: 1,
    offset: 0,
    countries: null,
    global: null,
    totalPages: null,
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

  const onPageClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const currentPage = +e.currentTarget.innerText;
    const offset = +e.currentTarget.innerText * perPage - 9;

    setState((prevState) => ({
      ...prevState,
      currentPage,
      offset,
    }));
  };

  const setOffsetAndPage = (num: number) =>
    setState((prevState) => ({
      ...prevState,
      currentPage: num,
      offset: num * perPage - 9,
    }));

  return (
    <Context.Provider value={{ ...state, onPageClick, setOffsetAndPage }}>
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
