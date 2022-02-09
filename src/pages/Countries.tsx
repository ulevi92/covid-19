import { useEffect, useRef, useState } from "react";
import PagesButtons from "../components/countries/PagesButtons";
import { GetCountriesDataType } from "../components/types/FetchTypes";
import { useStoreContext } from "../context/store/StoreProvider";

const Countries = () => {
  const { loading, countries, onPageClick, totalPages } = useStoreContext();

  // const renderPageButtons = totalPages!

  return (
    <>
      <h1>{loading ? "Loading..." : "Countries"}</h1>

      <br />
      <br />

      <PagesButtons />
    </>
  );
};

export default Countries;
