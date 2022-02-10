import { Box, CircularProgress } from "@mui/material";

const Spinner = () => {
  return (
    <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
