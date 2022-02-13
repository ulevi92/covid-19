import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@mui/material";
import { height } from "@mui/system";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../context/store/StoreProvider";

const CountryList = () => {
  const { countries, offset, currentPage, perPage } = useStoreContext();

  const renderCountries = countries!
    .slice(offset, currentPage * perPage)
    .map((c) => {
      const { country, countryInfo, active, deaths, recovered, cases } = c;
      const { _id, flag } = countryInfo;

      const shortName =
        country.length > 14 ? country.substring(0, 14) + "..." : country;

      return (
        <Link to={`/country/${country.toLowerCase()}`} key={_id}>
          <Card
            sx={{
              width: 265,
              my: 1,
              mx: 1,
              cursor: "pointer",
              ":hover": (theme) => ({
                backgroundColor: theme.palette.grey[500],
                transitionProperty: "all",
                transitionDuration: theme.transitions.duration.complex,
                transitionTimingFunction: theme.transitions.easing.sharp,
              }),
            }}
            variant='elevation'
          >
            <CardHeader title={shortName} />
            <CardMedia
              component='img'
              height='85'
              sx={{ objectFit: "fill" }}
              image={flag}
              alt={`${country} flag`}
            />
            <CardContent>
              <Typography variant='h6'>
                Toal Cases: {cases.toLocaleString()}
              </Typography>
              <Typography variant='h6'>
                Active: {active.toLocaleString()}
              </Typography>
              <Typography variant='h6'>
                Recovered: {recovered.toLocaleString()}
              </Typography>
              <Typography variant='h6'>
                Deaths: {deaths.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      );
    });

  return (
    <Box
      sx={{
        display: "flex",
        height: "82vh",
        width: "100%",
        position: "relative",
        flexWrap: "wrap",
        alignContent: "flex-start",
        justifyContent: "center",
      }}
    >
      {renderCountries}
    </Box>
  );
};

export default CountryList;
