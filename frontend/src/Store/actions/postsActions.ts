import { IData } from "../../Interfaces";

const FETCH_DATA = "FETCH_DATA" as const;
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS" as const;
const FETCH_DATA_FAIL = "FETCH_DATA_FAIL" as const;

const fetchData = () => {
  return {
    type: FETCH_DATA,
  };
};

const fetchDataSuccess = (lists: IData[]) => {
  return {
    type: FETCH_DATA_SUCCESS,
    lists,
  };
};

const fetchDataFail = (err: string | null) => {
  return {
    type: FETCH_DATA_FAIL,
    err,
  };
};

export default { fetchData, fetchDataSuccess, fetchDataFail };
