import { Box, Card, CardHeader } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStoreContext } from "../../context/store/StoreProvider";
import { ParamsType } from "../types/ParamsType";
import CountryList from "./CountryList";
import PagesButtons from "./PagesButtons";

const CountriesPage = () => {
  const { totalPages, offset, currentPage, perPage } = useStoreContext();

  const params = useParams<ParamsType>();
  const navigate = useNavigate();

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      if (+params.pageNum! > totalPages?.length!) {
        navigate("/404");
      }
    }

    return () => {
      isMounted.current = false;
    };
  }, [navigate, params.pageNum, totalPages?.length]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <CountryList />
      <PagesButtons />
    </Box>
  );
};

export default CountriesPage;
