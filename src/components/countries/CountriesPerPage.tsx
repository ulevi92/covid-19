import { useStoreContext } from "../../context/store/StoreProvider";

const CountriesPerPage = () => {
  const { countries, offset, perPage } = useStoreContext();
  const sliceCountries = countries!.slice(offset, offset + perPage);
  return sliceCountries.map((c) => <></>);
};
export default CountriesPerPage;
