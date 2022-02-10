import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStoreContext } from "../../context/store/StoreProvider";
import { ParamsType } from "../types/ParamsType";
import PagesButtons from "./PagesButtons";

const CountriesPage = () => {
  const { totalPages, setCurrentPage } = useStoreContext();

  const [] = useState();

  const params = useParams<ParamsType>();
  const navigate = useNavigate();

  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted.current) {
      if (+params.pageNum! > totalPages?.length!) {
        navigate("/404");
      }
    }
  }, [navigate, params.pageNum, totalPages?.length]);

  return (
    <>
      <PagesButtons />
    </>
  );
};

export default CountriesPage;
