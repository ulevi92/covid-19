import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { useStoreContext } from "../../context/store/StoreProvider";

const PagesButtons = () => {
  const { totalPages, currentPage, onPageClick, offset, perPage } =
    useStoreContext();

  const onClick = (e: React.ChangeEvent<HTMLButtonElement>) => {
    console.log("click");
  };

  // const renderButtons = totalPages!.slice(offset, perPage - 5);

  // const renderButtons =
  //   totalPages &&
  //   totalPages.map((page) => {
  //     return (
  //       <Button
  //         // disabled={}
  //         key={page.id}
  //         color='secondary'
  //         variant='contained'
  //         sx={{ mx: 1, my: 1 }}
  //       >
  //         {page.number}
  //       </Button>
  //     );
  //   });

  return (
    <Container sx={{ width: "100%", height: "10%" }}>
      {/* {renderButtons} */}
    </Container>
  );
};

export default PagesButtons;
