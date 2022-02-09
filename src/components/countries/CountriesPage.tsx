import { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStoreContext } from "../../context/store/StoreProvider";
import { ParamsType } from "../types/ParamsType";
import PagesButtons from "./PagesButtons";

const CountriesPage = () => {
  const { totalPages, currentPage } = useStoreContext();

  const params = useParams<ParamsType>();
  const navigate = useNavigate();

  useEffect(() => {
    +params.pageNum! > totalPages?.length! && navigate("/404");
  }, [currentPage, navigate, params.pageNum, totalPages]);

  return (
    <>
      <PagesButtons />
    </>
  );
};

export default CountriesPage;
