import { toast } from "react-toastify";
import {
  GetAllDataType,
  GetCountriesDataType,
} from "../components/types/FetchTypes";

export const fetchGlobal = async () => {
  try {
    const res = await fetch("https://disease.sh/v3/covid-19/all");
    const data: GetAllDataType = await res.json();

    return data;
  } catch (error) {
    toast.error(`Couldn't fetch global data`);
  }
};

export const fetchCountries = async () => {
  try {
    const res = await fetch("https://disease.sh/v3/covid-19/countries");
    const data: GetCountriesDataType[] = await res.json();

    return data;
  } catch (error) {
    toast.error(`Couldn't fetch global data`);
  }
};
