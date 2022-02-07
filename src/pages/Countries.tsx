import { useEffect } from "react";
import { LoadingContext } from "../context/loading/LoadingProvider";
import useFetchAll from "../hooks/useFetchAll";
import useFetchCountries from "../hooks/useFetchCountries";

const Countries = () => {
  const { loading } = LoadingContext();

  const countries = useFetchCountries(
    `https://disease.sh/v3/covid-19/countries`,
    {}
  );

  console.log(countries.data);

  if (loading) return <>Loading...</>;

  return <>Country</>;
};

export default Countries;
