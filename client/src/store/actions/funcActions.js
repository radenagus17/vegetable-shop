import { GET_COMPANIES, GET_ITEMS, SET_COMP_ERR, SET_COMP_LOAD, SET_ITEMS_ERR, SET_ITEMS_LOADING } from "../actionType";

export function setItem(data) {
  return {
    type: GET_ITEMS,
    payload: data,
  };
}

export function setItemLoading(data) {
  return {
    type: SET_ITEMS_LOADING,
    payload: data,
  };
}

export function setItemErr(data) {
  return {
    type: SET_ITEMS_ERR,
    payload: data,
  };
}

export function setComp(data) {
  return {
    type: GET_COMPANIES,
    payload: data,
  };
}

export function setCompLoading(data) {
  return {
    type: SET_COMP_LOAD,
    payload: data,
  };
}

export function setCompErr(data) {
  return {
    type: SET_COMP_ERR,
    payload: data,
  };
}
