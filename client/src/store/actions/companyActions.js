import { setComp, setCompErr, setCompLoading } from "./funcActions";

export function GetCompanies(url) {
  return (dispatch) => {
    fetch(`${url}/pub/companies`)
      .then((res) => res.json())
      .then((prod) => dispatch(setComp(prod)))
      .catch((err) => dispatch(setCompErr(err.message)))
      .finally((_) => dispatch(setCompLoading(false)));
  };
}
