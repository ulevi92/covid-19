import { Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/material/styles";

const Spinner = () => {
  const renderSpinner = (
    <Box
      sx={{
        width: "99%",
        height: "99%",
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        alignItems: "center",
      }}
    >
      <CircularProgress size={150} color='primary' />
    </Box>
  );

  return <>{renderSpinner}</>;
};

export default Spinner;
