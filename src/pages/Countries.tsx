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
    currentPage,
    setOffsetAndPage,
  } = useStoreContext();

  const navigate = useNavigate();
  const params = useParams<ParamsType>();

  const isMounted = useRef(true);

  useEffect(() => {
    if (!params.pageNum) {
      navigate("/countries/1");
      setOffsetAndPage(1);
    }

    if (isMounted.current && +params.pageNum! >= 1) {
      setOffsetAndPage(+params.pageNum!);
    }

    return () => {
      isMounted.current = false;
    };
  }, [currentPage, navigate, params.pageNum, setOffsetAndPage]);

  return (
    <Container>
      <h1>{loading ? "Loading..." : "Countries"}</h1>

      <CountriesPage />
    </Container>
  );
};

export default Countries;
