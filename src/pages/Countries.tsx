import Container from "@mui/material/Container";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CountriesPage from "../components/countries/CountriesPage";
import PagesButtons from "../components/countries/PagesButtons";
import { GetCountriesDataType } from "../components/types/FetchTypes";
import { ParamsType } from "../components/types/ParamsType";
import { useStoreContext } from "../context/store/StoreProvider";

const Countries = () => {
  const {
    loading,
    countries,
    onPageClick,
    totalPages,
    setCurrentPage,
    currentPage,
  } = useStoreContext();

  const navigate = useNavigate();
  const params = useParams<ParamsType>();

  const isMounted = useRef(true);

  useEffect(() => {
    if (!params.pageNum) {
      navigate("/countries/1");
      setCurrentPage(1);
    }

    if (isMounted.current && +params.pageNum! >= 1) {
      setCurrentPage(+params.pageNum!);
    }

    return () => {
      isMounted.current = false;
    };
  }, [currentPage, navigate, params.pageNum, setCurrentPage]);

  return (
    <Container>
      <h1>{loading ? "Loading..." : "Countries"}</h1>

      <CountriesPage />
    </Container>
  );
};

export default Countries;
