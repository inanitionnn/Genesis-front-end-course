import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { Constants } from "../../constants/constants";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: Constants.BASE_URL + "/auth",
    prepareHeaders: (headers, { getState }) => {
      headers.set("Content-Type", "application/json");
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    fetchToken: build.query<{ token: string }, void>({
      query: () => ({
        url: `anonymous?platform=subscriptions`,
        method: "GET",
      }),
    }),
  }),
});

export const { useFetchTokenQuery, useLazyFetchTokenQuery } = authApi;
