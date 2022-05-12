import { setItem, setItemErr, setItemLoading } from "./funcActions";

export function GetItems(url) {
  return (dispatch) => {
    fetch(`${url}/pub/items`)
      .then((res) => res.json())
      .then((prod) => dispatch(setItem(prod)))
      .catch((err) => dispatch(setItemErr(err.message)))
      .finally((_) => dispatch(setItemLoading(false)));
  };
}
