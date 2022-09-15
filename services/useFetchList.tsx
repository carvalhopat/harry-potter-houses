import useSWR from "swr";
import axios from "axios";
import TListData from "../types/TListData";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

type TDataResponse = {
  data: TListData;
  isLoading: boolean;
  error: any;
};

export default function useFetchList(): TDataResponse {
  const { data, error } = useSWR(
    "http://personio-fe-test.herokuapp.com/api/v1/candidates",
    async (url) => {
      const response = await api.get(url);

      return response.data;
    },
    {
      //refreshInterval: data?.error?.code === 500 ? 2000 : 0
    }
  );

  return {
    data: data?.data,
    error: data?.error?.code === 500 || error,
    isLoading: !data && !error,
  };
}
