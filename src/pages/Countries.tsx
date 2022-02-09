import Container from "@mui/material/Container";
import { useEffect, useRef, useState } from "react";
import CountriesPage from "../components/countries/CountriesPage";
import PagesButtons from "../components/countries/PagesButtons";
import { GetCountriesDataType } from "../components/types/FetchTypes";
import { useStoreContext } from "../context/store/StoreProvider";

const Countries = () => {
  const { loading, countries, onPageClick, totalPages } = useStoreContext();

  // const renderPageButtons = totalPages!

  return (
    <Container>
      <h1>{loading ? "Loading..." : "Countries"}</h1>

      <CountriesPage />
    </Container>
  );
};

export default Countries;
