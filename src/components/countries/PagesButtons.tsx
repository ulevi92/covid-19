import Container from "@mui/material/Container";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import React, { FC } from "react";
import { useStoreContext } from "../../context/store/StoreProvider";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ParamsType } from "../types/ParamsType";

const PagesButtons: FC = () => {
  const { totalPages, currentPage, onPageClick, offset, perPage } =
    useStoreContext();

  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams<ParamsType>();

  const onBtnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onPageClick(e);
  };

  const renderButtons =
    totalPages &&
    totalPages.slice(offset, perPage - 5).map((page) => {
      console.log(offset);

      return (
        <Button key={page.id} disabled={false} onClick={onBtnClick}>
          {page.number}
        </Button>
      );
    })!;

  return (
    <ButtonGroup color='primary' variant='contained'>
      <Button startIcon={<ArrowBackIosNewIcon />} />
      {renderButtons}
      <Button endIcon={<ArrowForwardIosIcon />} />
    </ButtonGroup>
  );
};

export default PagesButtons;
