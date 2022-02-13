import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import React, { FC } from "react";
import { useStoreContext } from "../../context/store/StoreProvider";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const PagesButtons: FC = () => {
  const { totalPages, currentPage, onPageClick, setOffsetAndPage } =
    useStoreContext();

  const navigate = useNavigate();

  const onPageNumClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onPageClick(e);
    navigate(`/countries/${e.currentTarget.innerText}`);
  };

  const RenderButtons = () => {
    if (totalPages) {
      const lastPage = totalPages.length;

      if (currentPage > lastPage - 10 || currentPage === lastPage) {
        return totalPages
          .slice(lastPage - 10, lastPage + 1)
          .map(({ id, number }) => (
            <Button
              key={id}
              onClick={onPageNumClick}
              disabled={number === currentPage}
            >
              {number}
            </Button>
          ));
      }

      if (currentPage < lastPage || currentPage === 1) {
        return totalPages
          .slice(currentPage - 1, lastPage)
          .slice(0, 10)
          .map(({ id, number }) => (
            <Button
              key={id}
              onClick={onPageNumClick}
              disabled={number === currentPage}
            >
              {number}
            </Button>
          ));
      }
    }

    return <></>;
  };

  const onPrevBtnClick = () => {
    setOffsetAndPage(currentPage - 1);
    navigate(`/countries/${currentPage - 1}`);
  };

  const onNextBtnClick = () => {
    setOffsetAndPage(currentPage + 1);
    navigate(`/countries/${currentPage + 1}`);
  };

  return (
    <ButtonGroup color='primary' variant='contained'>
      <Button
        disabled={currentPage === 1}
        startIcon={<ArrowBackIosNewIcon />}
        onClick={onPrevBtnClick}
      />
      {RenderButtons()}
      <Button
        disabled={currentPage === totalPages?.length}
        endIcon={<ArrowForwardIosIcon />}
        onClick={onNextBtnClick}
      />
    </ButtonGroup>
  );
};

export default PagesButtons;
